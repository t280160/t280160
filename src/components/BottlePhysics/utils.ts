import * as THREE from "three";
import * as CANNON from "cannon-es";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export class InitThree {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  controls: OrbitControls | null;
  spotLight: THREE.SpotLight | null;
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.spotLight = null;
  }

  init(container: HTMLDivElement) {
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(77, width / height, 0.1, 200);
      this.camera.position.set(0, 15, 10);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 柔和阴影
      container.appendChild(this.renderer.domElement);

      this.addLights();
      this.addControls();
      this.addPlane();
      // this.resizeCamera();
    }
  }
  addPlane() {
    if (!this.scene) return;
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x101010, // 和背景颜色相近
      side: THREE.DoubleSide,
      roughness: 0.5, // 较暗，但能有一点光泽
      metalness: 0.1, // 少量金属感，让光线有反射
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // 平铺 XZ 平面
    groundMesh.position.y = -5.5; // 放在盒子底部
    groundMesh.receiveShadow = true; // 接收阴影
    this.scene.add(groundMesh);
  }
  addControls() {
    if (!this.camera || !this.renderer) return;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // 阻尼效果，动画循环里需要 update
    this.controls.dampingFactor = 0.05;
    this.controls.enableRotate = false;
    this.controls.enablePan = false; // 允许平移
    this.controls.enableZoom = false; // 允许缩放
    // this.controls.maxDistance = 10; // 最大缩放距离
    // this.controls.minDistance = 1.5; // 最小缩放距离
    this.controls.target.set(0, 1, 0); // 控制中心
    this.controls.update();
  }
  addLights() {
    if (!this.scene) return;
    const spotLight = new THREE.SpotLight(0xffffff, 5);
    spotLight.name = "spotLight";
    spotLight.position.set(0, 20, 10);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 0;

    spotLight.castShadow = true;
    this.spotLight = spotLight;
    this.scene.add(spotLight);

    // const helper = new THREE.SpotLightHelper(spotLight);
    // this.scene.add(helper);

    // const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
    // this.scene.add(cameraHelper);
  }
  addBox(position: THREE.Vector3 = new THREE.Vector3(0, 1, 0)) {
    const geometry = new THREE.CylinderGeometry(1, 1, 0.1, 20);
    const material = new THREE.MeshStandardMaterial({
      color: 0xb5a642, // 材质颜色
      metalness: 0.7, // 金属感，0-1
      roughness: 0.4, // 粗糙度，0-1
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.set(position.x, position.y, position.z);
    return cube;
  }
  animate() {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
    if (this.controls) {
      this.controls.update();
    }
    /* if (this.spotLight) {
      const time = performance.now() / 500;
      this.spotLight.position.x = Math.cos(time) * 2.5;
      this.spotLight.position.z = Math.sin(time) * 2.5;
    } */
  }
  /* 根据屏幕尺寸调整相机 */
  resizeCamera() {
    if (this.scene && this.camera) {
      const box = new THREE.Box3().setFromObject(this.scene);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      // 屏幕宽度系数，电脑屏幕让模型更大
      let factor = 1;
      if (window.innerWidth >= 1200) {
        // 电脑屏幕阈值，可调整
        factor = 0.3; // 调小距离，让模型显得更大
      } else if (window.innerWidth <= 768) {
        // 手机屏幕
        factor = 2; // 适当拉远
      }
      this.camera.position.copy(center);
      this.camera.position.z += size * factor; // 拉远距离，保证完整可见
      this.camera.position.y = 16;
      this.camera.lookAt(center);
    }
  }
  dispose() {
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}
export class InitCannon {
  world: CANNON.World;
  bodyArr: { body: CANNON.Body; cube: THREE.Mesh }[] = [];
  cubeShape: CANNON.Cylinder | null;
  clock: THREE.Clock;
  groundMaterial: CANNON.Material;
  bouncyMaterial: CANNON.Material;
  constructor() {
    this.clock = new THREE.Clock();
    this.world = new CANNON.World();
    this.bodyArr = [];
    this.cubeShape = null;
    this.groundMaterial = new CANNON.Material("ground");
    this.bouncyMaterial = new CANNON.Material("bouncy");
    this.initWorld();
    this.initMaterial();
  }
  createWall(position: CANNON.Vec3, halfExtents: CANNON.Vec3) {
    const shape = new CANNON.Box(halfExtents);
    const body = new CANNON.Body({ mass: 0, shape });
    body.position.copy(position);
    body.material = this.groundMaterial;
    this.world.addBody(body);
  }
  initWorld() {
    this.world.gravity.set(0, -9.82, 0);
    const size = 5; // 盒子半边长
    const ho = 0.5;
    // 上下左右前后墙
    this.createWall(new CANNON.Vec3(0, size, 0), new CANNON.Vec3(size, ho, size)); // 上
    this.createWall(new CANNON.Vec3(0, -size, 0), new CANNON.Vec3(size, ho, size)); // 下
    this.createWall(new CANNON.Vec3(size, 0, 0), new CANNON.Vec3(ho, size, size)); // 右
    this.createWall(new CANNON.Vec3(-size, 0, 0), new CANNON.Vec3(ho, size, size)); // 左
    this.createWall(new CANNON.Vec3(0, 0, size), new CANNON.Vec3(size, size, ho)); // 前
    this.createWall(new CANNON.Vec3(0, 0, -size), new CANNON.Vec3(size, size, ho)); // 后
  }
  initMaterial() {
    this.world.addContactMaterial(
      new CANNON.ContactMaterial(this.groundMaterial, this.bouncyMaterial, {
        friction: 0.3,
        restitution: 0.9,
      })
    );
  }
  initCube(cube: THREE.Mesh) {
    const position = new CANNON.Vec3(cube.position.x, cube.position.y, cube.position.z);
    this.cubeShape = new CANNON.Cylinder(1, 1, 0.1, 100); // 立方体形状
    const body = new CANNON.Body({
      mass: 1, // 质量
      position: new CANNON.Vec3(position.x, 3, position.z), // 初始位置
      material: this.bouncyMaterial,
    });
    if (body && this.cubeShape) {
      body?.addShape(this.cubeShape);
      this.world.addBody(body);
      this.bodyArr.push({
        body,
        cube,
      });
    }
  }
  launchBody() {
    this.bodyArr.forEach(({ body }) => {
      const fx = (Math.random() - 0.5) * 20;
      const fy = (Math.random() - 0.5) * 20;
      const fz = (Math.random() - 0.5) * 20;

      body.applyImpulse(new CANNON.Vec3(fx, fy, fz), body.position);
    });
  }
  animate() {
    this.world.step(1 / 60, this.clock.getDelta());
    this.bodyArr.forEach(({ body, cube }) => {
      cube.position.set(body.position.x, body.position.y, body.position.z);
      cube.quaternion.set(
        body.quaternion.x,
        body.quaternion.y,
        body.quaternion.z,
        body.quaternion.w
      );
    });
  }
}
type Fun = () => void;
export class Animate {
  animationId: number;
  animateArr: Fun[];
  constructor() {
    this.animationId = 0;
    this.animateArr = [];
  }
  animate() {
    this.animationId = requestAnimationFrame(() => {
      this.animate();
    });
    this.animateArr.forEach((fun) => fun());
  }
  animatePush(fun: Fun) {
    this.animateArr.push(fun);
  }
  dispose() {
    this.animateArr.length = 0;
    cancelAnimationFrame(this.animationId);
  }
}

export function useMouseShake() {
  const { dx, dy, isDown } = usePcMouseShake();
  const mobile = ref(false);
  const moveV2 = ref(new THREE.Vector2(0, 0));
  let animationId: number = 0;
  function isMobile() {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|iphone|ipad|ipod|mobile|blackberry|iemobile|opera mini/i.test(ua);
  }
  let setNum: any = 0;

  function animate() {
    setNum = setInterval(() => {
      if (mobile.value == false) {
        moveV2.value = new THREE.Vector2(dx.value, dy.value);
      } else {
        clearInterval(setNum);
      }
    }, 1000);
  }

  onMounted(() => {
    mobile.value = isMobile();
    animate();
  });
  onUnmounted(() => {
    cancelAnimationFrame(animationId);
  });

  return {
    moveV2,
    isDown,
  };
}

export function usePcMouseShake(threshold = 5) {
  const isDown = ref(false); // 鼠标是否按下
  const dx = ref(0); // 水平位移
  const dy = ref(0); // 垂直位移
  const direction = ref<"up" | "down" | "left" | "right" | null>(null); // 当前方向

  let lastX = 0;
  let lastY = 0;

  function onMouseDown(e: MouseEvent) {
    isDown.value = true;
    lastX = e.clientX;
    lastY = e.clientY;
  }

  function onMouseMove(e: MouseEvent) {
    if (!isDown.value) return;

    dx.value = e.clientX - lastX;
    dy.value = e.clientY - lastY;

    lastX = e.clientX;
    lastY = e.clientY;

    // 判断主要方向
    if (Math.abs(dx.value) > Math.abs(dy.value)) {
      if (Math.abs(dx.value) > threshold) direction.value = dx.value > 0 ? "right" : "left";
    } else {
      if (Math.abs(dy.value) > threshold) direction.value = dy.value > 0 ? "down" : "up";
    }
  }

  function onMouseUp() {
    isDown.value = false;
    dx.value = 0;
    dy.value = 0;
    direction.value = null;
  }

  onMounted(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  onUnmounted(() => {
    window.removeEventListener("mousedown", onMouseDown);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  });

  return {
    isDown,
    dx,
    dy,
    direction,
  };
}
