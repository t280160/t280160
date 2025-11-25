<template>
  <div ref="containerRef" class="bagua-container relative w-full h-full">
    <!-- 标题 -->
    <div class="absolute top-5 left-8 z-10 pointer-events-none">
      <h1 class="text-white text-3xl tracking-widest m-0">洛书 · 易</h1>
      <p class="text-white/60 text-sm mt-1 tracking-wider m-0">I CHING INTERACTIVE</p>
    </div>

    <!-- 加载提示 -->
    <div
      v-if="isLoading"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl pointer-events-none z-20 transition-opacity duration-500"
    >
      正在构建空间...
    </div>

    <!-- 卦象解读卡片 -->
    <div
      class="absolute top-5 right-8 w-[300px] min-h-[100px] bg-black/70 text-white p-4 rounded-xl shadow-lg backdrop-blur-sm z-10 transition-all duration-300"
    >
      <div id="oracle-content" class="text-sm leading-relaxed mb-2.5">
        {{ oracleContent }}
      </div>
      <div
        v-if="oracleSources"
        id="oracle-sources"
        class="text-[10px] opacity-70 border-t border-dashed border-white/20 pt-1.5"
        v-html="oracleSources"
      />
      <div v-if="isLLMLoading" class="flex flex-col items-center mt-4">
        <div class="loading-spinner" />
        <p class="text-center mt-4">✨ 正在请求 {{ currentHoveredName }} 的现代解读...</p>
      </div>
    </div>

    <!-- 风格切换按钮 -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-5 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20"
    >
      <button
        v-for="theme in themes"
        :key="theme.name"
        :class="[
          'style-btn px-6 py-2 rounded-full text-base cursor-pointer font-inherit transition-all duration-300 border text-white',
          currentTheme === theme.name
            ? 'bg-white text-gray-800 shadow-[0_0_15px_white] border-white font-bold'
            : 'bg-transparent border-white/40 hover:bg-white/20 hover:-translate-y-0.5',
        ]"
        @click="switchStyle(theme.name)"
      >
        {{ theme.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// --- 类型定义 ---
type ThemeName = "jade" | "cyber" | "ink";

interface BaguaData {
  name: string;
  name_cn: string;
  num?: string;
  dir?: string;
  type?: string;
  x: number;
  z: number;
}

interface DirectionLabel {
  text: string;
  x: number;
  z: number;
}

interface Theme {
  name: ThemeName;
  label: string;
  bg: number;
  fog: number;
  fogDensity: number;
  floorColor: number;
  floorMetal: number;
  floorRough: number;
  textColor: string;
  textSubColor: string;
  labelColor: string;
  lights: () => THREE.Light[];
  geo: THREE.BufferGeometry;
}

// --- 响应式数据 ---
const containerRef = useTemplateRef<HTMLDivElement>("containerRef");
const isLoading = ref(true);
const currentTheme = ref<ThemeName>("jade");
const oracleContent = ref("点击任一卦位 ✨寻求现代解读✨");
const oracleSources = ref("");
const isLLMLoading = ref(false);
const currentHoveredName = ref("");

// --- 全局变量 ---
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let controls: OrbitControls | null = null;
let objects: THREE.Mesh[] = [];
let labelObjects: THREE.Sprite[] = [];
let animationId: number | null = null;
let hoveredBlockData: BaguaData | null = null;
let raycaster: THREE.Raycaster | null = null;
let mouse: THREE.Vector2 | null = null;

// --- API 配置（需要用户配置）---
const API_KEY = "";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;

// --- 数据定义 ---
const baguaData: BaguaData[] = [
  { name: "巽", name_cn: "巽", num: "4", dir: "东南", x: -1, z: -1 },
  { name: "离", name_cn: "离", num: "9", dir: "正南", x: 0, z: -1 },
  { name: "坤", name_cn: "坤", num: "2", dir: "西南", x: 1, z: -1 },
  { name: "震", name_cn: "震", num: "3", dir: "正东", x: -1, z: 0 },
  { name: "Taiji", name_cn: "太极", type: "center", x: 0, z: 0 },
  { name: "兑", name_cn: "兑", num: "7", dir: "正西", x: 1, z: 0 },
  { name: "艮", name_cn: "艮", num: "8", dir: "东北", x: -1, z: 1 },
  { name: "坎", name_cn: "坎", num: "1", dir: "正北", x: 0, z: 1 },
  { name: "乾", name_cn: "乾", num: "6", dir: "西北", x: 1, z: 1 },
];

const directionLabels: DirectionLabel[] = [
  { text: "南", x: 0, z: -4.5 },
  { text: "北", x: 0, z: 4.5 },
  { text: "东", x: -4.5, z: 0 },
  { text: "西", x: 4.5, z: 0 },
];

const themes: Theme[] = [
  {
    name: "jade",
    label: "温润白玉",
    bg: 0x3d4a2f, // 深色橄榄绿背景
    fog: 0x3d4a2f,
    fogDensity: 0.01,
    floorColor: 0x050505,
    floorMetal: 0.8,
    floorRough: 0.1,
    textColor: "#d4af37", // 金色文字
    textSubColor: "#d4af37",
    labelColor: "#d4af37", // 金色标注
    lights: () => {
      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(-5, 10, 5); // 左上角光源，产生右下阴影
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 50;
      dirLight.shadow.camera.left = -10;
      dirLight.shadow.camera.right = 10;
      dirLight.shadow.camera.top = 10;
      dirLight.shadow.camera.bottom = -10;
      return [ambient, dirLight];
    },
    geo: new RoundedBoxGeometry(2, 0.15, 2, 4, 0.15), // 更薄的卡片，更圆润的边角
  },
  {
    name: "ink",
    label: "水墨太虚",
    bg: 0xf0f0f0,
    fog: 0xf0f0f0,
    fogDensity: 0.015,
    floorColor: 0xffffff,
    floorMetal: 0.0,
    floorRough: 1.0,
    textColor: "#000000",
    textSubColor: "#333333",
    labelColor: "#000000",
    lights: () => {
      const ambient = new THREE.AmbientLight(0xffffff, 0.9);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(5, 10, 5);
      dir.castShadow = true;
      return [ambient, dir];
    },
    geo: new THREE.CylinderGeometry(1.2, 1.2, 0.1, 32),
  },
];

// --- 工具函数 ---
function createTexture(data: BaguaData, style: ThemeName, textColor?: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;
  const theme = themes.find((t) => t.name === style)!;
  // 如果指定了文字颜色，使用它；否则使用主题默认颜色
  const finalTextColor = textColor || theme.textColor;
  const finalTextSubColor = textColor || theme.textSubColor;

  // 背景
  if (style === "cyber") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 6;
    ctx.strokeRect(5, 5, 502, 502);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.strokeStyle = "rgba(0,255,255,0.3)";
    ctx.stroke();
  } else if (style === "ink") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 512, 512);
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000";
    ctx.stroke();
  } else {
    // 根据是否为中心卡片选择背景色
    if (data.type === "center") {
      // 中心太极图使用浅灰色背景，让黑白太极图更清晰
      ctx.fillStyle = "#f5f5f5";
    } else {
      // 其他卡片使用白色背景
      ctx.fillStyle = "#ffffff";
    }
    ctx.fillRect(0, 0, 512, 512);
  }

  if (data.type === "center") {
    drawTaiji(ctx, 256, 256, 180, style);
    // 中心太极图不需要额外文字
  } else {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 卦名
    ctx.font = style === "cyber" ? 'bold 200px "Arial"' : 'bold 180px "KaiTi", serif';
    ctx.fillStyle = finalTextColor;
    if (style === "cyber") {
      ctx.shadowColor = "#00ffff";
      ctx.shadowBlur = 30;
    }
    ctx.fillText(data.name_cn, 256, 240);
    ctx.shadowBlur = 0;

    // 辅助信息
    ctx.font = 'bold 60px "Times New Roman"';
    ctx.fillStyle = finalTextSubColor;
    ctx.fillText(data.num || "", 256, 80);

    ctx.font = 'bold 50px "KaiTi", serif';
    ctx.fillStyle = finalTextSubColor;
    ctx.fillText(data.dir || "", 256, 380);
  }

  const tex = new THREE.CanvasTexture(canvas);
  // @ts-expect-error - colorSpace may not exist in older Three.js versions
  if (tex.colorSpace !== undefined) {
    // @ts-expect-error
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  return tex;
}

function createLabelTexture(text: string, style: ThemeName, color: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = style === "cyber" ? 'bold 150px "Arial"' : 'bold 160px "KaiTi", serif';
  ctx.fillStyle = color;

  if (style === "cyber") {
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
  }

  ctx.fillText(text, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  // @ts-expect-error - colorSpace may not exist in older Three.js versions
  if (tex.colorSpace !== undefined) {
    // @ts-expect-error
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  return tex;
}

function drawTaiji(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  style: ThemeName
): void {
  // 根据风格选择颜色，jade风格使用黑白太极图
  const c1 = style === "cyber" ? "#00ffff" : style === "jade" ? "#000000" : "#000";
  const c2 = style === "cyber" ? "#ff00ff" : style === "jade" ? "#ffffff" : "#fff";
  ctx.beginPath();
  ctx.arc(x, y, radius, -Math.PI / 2, Math.PI / 2, true);
  ctx.fillStyle = c1;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, radius, -Math.PI / 2, Math.PI / 2, false);
  ctx.fillStyle = c2;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y - radius / 2, radius / 2, 0, Math.PI * 2);
  ctx.fillStyle = c1;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y + radius / 2, radius / 2, 0, Math.PI * 2);
  ctx.fillStyle = c2;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y - radius / 2, 30, 0, Math.PI * 2);
  ctx.fillStyle = c2;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y + radius / 2, 30, 0, Math.PI * 2);
  ctx.fillStyle = c1;
  ctx.fill();
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 5
): Promise<Response> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.status === 429 && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error("Max retries exceeded");
}

async function getOracleInterpretation(data: BaguaData): Promise<void> {
  if (isLLMLoading.value || !API_KEY) return;
  isLLMLoading.value = true;
  currentHoveredName.value = data.name_cn || data.name;

  const systemPrompt =
    "Act as a modern interpreter of the I Ching (Book of Changes). Provide a concise, single-paragraph explanation of the trigram's symbolic meaning, its element, and its modern psychological relevance. If the input is '太极', explain the concept of Taiji (Great Ultimate). Answer in fluent, high-quality Chinese, ensuring the tone is insightful and encouraging.";
  const userQuery = `请用现代视角解读八卦中的 "${data.name_cn || data.name}" 卦。`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    tools: [{ google_search: {} }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetchWithRetry(API_URL, options);
    const result = await response.json();
    const candidate = result.candidates?.[0];

    if (candidate && candidate.content?.parts?.[0]?.text) {
      const text = candidate.content.parts[0].text;
      let sourcesHtml = "参考来源：";
      let sources: Array<{ uri: string; title: string }> = [];

      const groundingMetadata = candidate.groundingMetadata;
      if (groundingMetadata && groundingMetadata.groundingAttributions) {
        sources = groundingMetadata.groundingAttributions
          .map((attribution: any) => ({
            uri: attribution.web?.uri,
            title: attribution.web?.title,
          }))
          .filter((source: any) => source.uri && source.title);
      }

      if (sources.length > 0) {
        sourcesHtml += sources
          .map(
            (s, i) =>
              `<a href="${s.uri}" target="_blank" style="color: #00ffff; text-decoration: none;">[${i + 1}] ${s.title}</a>`
          )
          .join("; ");
      } else {
        sourcesHtml += "无";
      }

      oracleContent.value = `<h3 style="margin-top: 0; color: #00ffff; font-family: inherit;">${data.name_cn || data.name} 解读</h3><p>${text}</p>`;
      oracleSources.value = sourcesHtml;
    } else {
      oracleContent.value = '<p style="color: #ff5555;">解读失败：未能获取有效的AI响应。</p>';
      oracleSources.value = "";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    oracleContent.value =
      '<p style="color: #ff5555;">请求AI服务时发生错误。请检查网络或稍后再试。</p>';
    oracleSources.value = "";
  } finally {
    isLLMLoading.value = false;
  }
}

function onBlockClick(event: MouseEvent): void {
  if (!renderer || !camera || !raycaster || !mouse) return;

  // 获取canvas元素和其边界
  const canvas = renderer.domElement;
  const rect = canvas.getBoundingClientRect();

  // 计算鼠标在canvas中的标准化坐标
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // 使用raycaster检测点击的对象
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const target = intersects[0].object as THREE.Mesh;
    const clickedData = baguaData.find(
      (d) => d.x === target.userData.baguaX && d.z === target.userData.baguaZ
    );

    if (clickedData) {
      getOracleInterpretation(clickedData);
      return;
    }
  }

  // 如果没有点击到对象，显示提示
  oracleContent.value = "请点击任一卦位进行解读。";
  oracleSources.value = "";
}

function loadTheme(themeName: ThemeName): void {
  if (!scene) return;

  const theme = themes.find((t) => t.name === themeName)!;

  // 深度清理场景
  while (scene.children.length > 0) {
    const child = scene.children[0];
    if (child instanceof THREE.Mesh && child.geometry) {
      child.geometry.dispose();
    }
    if (child instanceof THREE.Mesh && child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => m.dispose());
      } else {
        child.material.dispose();
      }
    }
    scene.remove(child);
  }
  objects = [];
  labelObjects = [];

  // 环境设置
  scene.background = new THREE.Color(theme.bg);
  scene.fog = new THREE.FogExp2(theme.fog, theme.fogDensity);

  // 灯光
  const lights = theme.lights();
  lights.forEach((l) => scene!.add(l));

  // 删除地面/圆盘 - 不再创建地面

  // 创建九宫格方块
  const group = new THREE.Group();
  scene.add(group);

  baguaData.forEach((data) => {
    const texture = createTexture(data, themeName);
    // 创建hover版本的纹理（黑色文字）
    const hoverTexture =
      data.type !== "center" ? createTexture(data, themeName, "#000000") : texture;

    let material: THREE.Material | THREE.Material[];
    if (themeName === "cyber") {
      material = [
        new THREE.MeshBasicMaterial({ color: 0x002233, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0x002233, wireframe: true }),
        new THREE.MeshStandardMaterial({
          map: texture,
          emissive: 0x001111,
          roughness: 0.2,
          metalness: 0.8,
        }),
        new THREE.MeshBasicMaterial({ color: 0x000000 }),
        new THREE.MeshBasicMaterial({ color: 0x002233, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0x002233, wireframe: true }),
      ];
    } else if (themeName === "ink") {
      const mat = new THREE.MeshLambertMaterial({ map: texture });
      const sideMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
      material = [sideMat, mat, sideMat];
    } else {
      // 根据是否为中心卡片选择材质颜色
      if (data.type === "center") {
        // 中心太极图使用浅灰色卡片，让黑白太极图更清晰
        const matSide = new THREE.MeshStandardMaterial({
          color: 0xf5f5f5, // 浅灰色侧面
          roughness: 0.3,
          metalness: 0.0,
        });
        const matTop = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.2,
          metalness: 0.0,
        });
        material = [matSide, matSide, matTop, matSide, matSide, matSide];
      } else {
        // 其他卡片使用白色材质
        const matSide = new THREE.MeshStandardMaterial({
          color: 0xffffff, // 白色侧面
          roughness: 0.3,
          metalness: 0.0,
        });
        const matTop = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.2,
          metalness: 0.0,
        });
        material = [matSide, matSide, matTop, matSide, matSide, matSide];
      }
    }

    const mesh = new THREE.Mesh(theme.geo, material);
    const spacing = 2.4;
    mesh.position.set(data.x * spacing, 0.1, data.z * spacing); // 稍微抬高，产生悬浮效果
    mesh.castShadow = true;
    mesh.receiveShadow = false; // 不需要接收阴影，因为没有地面

    mesh.userData = {
      initialY: 0,
      floatSpeed: 1.5 + Math.random(),
      floatOffset: Math.random() * Math.PI * 2,
      baguaX: data.x,
      baguaZ: data.z,
      normalTexture: texture, // 保存正常纹理
      hoverTexture: hoverTexture, // 保存hover纹理
      isHovered: false, // hover状态
    };
    mesh.name = data.name;

    group.add(mesh);
    objects.push(mesh);
  });

  // 添加方位大字
  directionLabels.forEach((dir) => {
    const labelTexture = createLabelTexture(dir.text, themeName, theme.labelColor);
    const labelMat = new THREE.SpriteMaterial({
      map: labelTexture,
      transparent: true,
      opacity: 0.8,
    });
    const sprite = new THREE.Sprite(labelMat);
    sprite.scale.set(2.5, 2.5, 1); // 稍微小一点
    const yPos = 0.3; // 统一高度
    sprite.position.set(dir.x, yPos, dir.z);

    if (scene) {
      scene.add(sprite);
    }
    labelObjects.push(sprite);
  });
}

function switchStyle(style: ThemeName): void {
  currentTheme.value = style;
  loadTheme(style);
}

function init(): void {
  const container = containerRef.value;
  if (!container) return;

  scene = new THREE.Scene();

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.set(0, 8, 8); // 稍微俯视的角度

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  renderer.domElement.addEventListener("mousedown", onBlockClick);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2 - 0.1;

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  const handleMouseMove = (event: MouseEvent) => {
    if (!mouse || !renderer) return;
    const canvas = renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };
  window.addEventListener("mousemove", handleMouseMove);

  // 保存事件处理器以便清理
  (window as any).__baguaMouseMoveHandler = handleMouseMove;

  loadTheme("jade");
  isLoading.value = false;

  const handleResize = () => {
    if (!container || !camera || !renderer) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  window.addEventListener("resize", handleResize);

  function animate(): void {
    animationId = requestAnimationFrame(animate);
    if (!scene || !camera || !renderer || !raycaster || !mouse) return;

    const time = performance.now() * 0.001;

    // 九宫格呼吸动画
    objects.forEach((obj) => {
      const floatY = Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * 0.2;
      if (obj.scale.x === 1) {
        obj.position.y = obj.userData.initialY + floatY;
      }
    });

    // 方位字浮动
    labelObjects.forEach((sprite, idx) => {
      sprite.position.y += Math.sin(time * 2 + idx) * 0.002;
    });

    // 鼠标悬停检测
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);

    let currentHoveredBlockData: BaguaData | null = null;

    // 恢复所有物体状态
    objects.forEach((obj) => {
      const isCurrentlyHovered = intersects.some((i) => i.object === obj);

      if (!isCurrentlyHovered) {
        obj.scale.setScalar(1);
        if (currentTheme.value === "cyber" && Array.isArray(obj.material) && obj.material[2]) {
          (obj.material[2] as THREE.MeshStandardMaterial).emissive.setHex(0x001111);
        } else if (currentTheme.value === "jade" && Array.isArray(obj.material)) {
          obj.material.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial && mat.map) {
              // 恢复正常纹理
              if (obj.userData.normalTexture && obj.userData.isHovered) {
                mat.map = obj.userData.normalTexture;
                mat.needsUpdate = true;
                obj.userData.isHovered = false;
              }
            }
          });
        }
      }
    });

    if (intersects.length > 0) {
      const target = intersects[0].object as THREE.Mesh;
      target.scale.setScalar(1.1);
      target.position.y =
        target.userData.initialY +
        Math.sin(time * target.userData.floatSpeed + target.userData.floatOffset) * 0.2 +
        0.4;

      currentHoveredBlockData =
        baguaData.find((d) => d.x === target.userData.baguaX && d.z === target.userData.baguaZ) ||
        null;

      if (currentTheme.value === "cyber" && Array.isArray(target.material) && target.material[2]) {
        (target.material[2] as THREE.MeshStandardMaterial).emissive.setHex(0x00ffff);
      } else if (currentTheme.value === "jade" && Array.isArray(target.material)) {
        target.material.forEach((mat) => {
          if (
            mat instanceof THREE.MeshStandardMaterial &&
            mat.map &&
            target.userData.hoverTexture
          ) {
            // 切换到黑色文字的纹理
            if (!target.userData.isHovered) {
              mat.map = target.userData.hoverTexture;
              mat.needsUpdate = true;
              target.userData.isHovered = true;
            }
          }
        });
      }
    }

    hoveredBlockData = currentHoveredBlockData;

    controls?.update();
    renderer.render(scene, camera);
  }

  animate();
}

function cleanup(): void {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  // 移除事件监听器
  if ((window as any).__baguaMouseMoveHandler) {
    window.removeEventListener("mousemove", (window as any).__baguaMouseMoveHandler);
    delete (window as any).__baguaMouseMoveHandler;
  }

  if (renderer) {
    const container = containerRef.value;
    if (container && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
    renderer.dispose();
    renderer = null;
  }

  if (scene) {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    scene = null;
  }

  camera = null;
  controls = null;
  objects = [];
  labelObjects = [];
  raycaster = null;
  mouse = null;
}

onMounted(() => {
  init();
});

onUnmounted(() => {
  cleanup();
});
</script>

<style scoped>
.bagua-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bagua-container canvas {
  display: block;
}

.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.style-btn {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
