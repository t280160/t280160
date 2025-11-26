<template>
  <div ref="containerRef" class="w-10/12 h-screen bg-transparent" />
</template>

<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

// --- 响应式数据 ---
const containerRef = useTemplateRef<HTMLDivElement>("containerRef");

// --- 全局变量 ---
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let controls: OrbitControls | null = null;
let animationId: number | null = null;

function init(): void {
  cleanup();
  const container = containerRef.value;
  if (!container) return;

  const { width, height } = containerRef.value.getBoundingClientRect();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, width / height, 1, 100);
  camera.position.set(5, 2, 8);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.enableZoom = false;
  // controls.enableRotate = false;
  // // 👉 关键：手机触摸映射（否则不能旋转）
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;

  addGroup();
  setCamera();
  function animate(): void {
    animationId = requestAnimationFrame(animate);
    if (!scene || !camera || !renderer) return;

    const time = performance.now() * 0.001;

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
}
type ThemeName = "jade" | "cyber" | "ink";
// --- 数据定义 ---
const baguaData = [
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

const directionLabels = [
  { text: "南", x: 0, z: -4.5 },
  { text: "北", x: 0, z: 4.5 },
  { text: "东", x: -4.5, z: 0 },
  { text: "西", x: 4.5, z: 0 },
];
const themes = [
  {
    name: "jade",
    label: "温润白玉",
    bg: "transparent", // 深色橄榄绿背景
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
let themeName: ThemeName = "jade";

function addGroup() {
  // 创建九宫格方块
  if (scene) {
    const group = new THREE.Group();
    const theme = themes.find((t) => t.name === themeName)!;
    console.log(theme);
    // 灯光
    const lights = theme.lights();
    lights.forEach((l) => scene!.add(l));
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
    });

    scene.add(group);
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
    });
  }
}
function createTexture(
  data: (typeof baguaData)[0],
  style: ThemeName,
  textColor?: string
): THREE.CanvasTexture {
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
    // ctx.fillText(data.num || "", 256, 80);

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
function setCamera() {
  if (scene && camera) {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    // 屏幕宽度系数，电脑屏幕让模型更大
    let factor = 1;
    if (window.innerWidth >= 1200) {
      // 电脑屏幕阈值，可调整
      factor = 0.7; // 调小距离，让模型显得更大
    } else if (window.innerWidth <= 768) {
      // 手机屏幕
      factor = 2; // 适当拉远
    }
    camera.position.copy(center);
    camera.position.z += size * factor; // 拉远距离，保证完整可见
    camera.position.y = 16;
    camera.lookAt(center);
  }
}
watch(
  () => containerRef.value,
  (val) => {
    if (val) {
      init();
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
