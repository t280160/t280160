import * as THREE from "three";
import * as CANNON from "cannon-es";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export class InitThree {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  controls: OrbitControls | null;
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
  }

  init(container: HTMLDivElement) {
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 200);
      this.camera.position.set(0, 10, 12);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      container.appendChild(this.renderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(3, 5, 2);
      this.scene.add(light);
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // 阻尼效果，动画循环里需要 update
      this.controls.dampingFactor = 0.05;
      this.controls.enablePan = true; // 允许平移
      this.controls.enableZoom = true; // 允许缩放
      // this.controls.maxDistance = 10; // 最大缩放距离
      // this.controls.minDistance = 1.5; // 最小缩放距离
      this.controls.target.set(0, 1, 0); // 控制中心
      this.controls.update();

      const geometry = new THREE.BoxGeometry(20, 1, 20);
      const material = new THREE.MeshBasicMaterial({ color: 0x00000 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(0, 0.5, 0);
      // cube.rotation.z = -0.3;
      this.scene.add(cube);
    }
  }
  addBox() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 1, 0);
    return cube;
  }
  animate() {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
    if (this.controls) {
      this.controls.update();
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
  body: CANNON.Body | null;
  cubeShape: CANNON.Box | null;
  clock: THREE.Clock;
  groundMaterial: CANNON.Material;
  bouncyMaterial: CANNON.Material;
  constructor() {
    this.clock = new THREE.Clock();
    this.world = new CANNON.World();
    this.body = null;
    this.cubeShape = null;
    this.groundMaterial = new CANNON.Material("ground");
    this.bouncyMaterial = new CANNON.Material("bouncy");
    this.initWorld();
    this.initMaterial();
  }
  initWorld() {
    this.world.gravity.set(0, -9.82, 0);
    // 创建地面（物理）
    // const planeShape = new CANNON.Plane(); // 地面形状
    const planeBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(10, 0.5, 10)),
      position: new CANNON.Vec3(0, 0, 0),
      material: this.groundMaterial,
    });
    const topBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(10, 0.5, 10)),
      position: new CANNON.Vec3(0, 5, 0),
      material: this.groundMaterial,
    });
    /* 左 */
    const wallLeft = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(0.5, 5, 10)), // 厚0.5, 高5, 深20
      position: new CANNON.Vec3(-10.5, 5, 0), // x偏移到左边
      material: this.groundMaterial,
    });
    // 右墙
    const wallRight = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(0.5, 5, 10)),
      position: new CANNON.Vec3(10.5, 5, 0),
      material: this.groundMaterial,
    });
    // 前墙
    const wallFront = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(10, 5, 0.5)),
      position: new CANNON.Vec3(0, 5, 10.5),
      material: this.groundMaterial,
    });
    // 后墙
    const wallBack = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(10, 5, 0.5)),
      position: new CANNON.Vec3(0, 5, -10.5),
      material: this.groundMaterial,
    });
    this.world.addBody(wallLeft);
    this.world.addBody(topBody);
    this.world.addBody(planeBody);
    this.world.addBody(wallRight);
    this.world.addBody(wallFront);
    this.world.addBody(wallBack);
  }
  initMaterial() {
    this.world.addContactMaterial(
      new CANNON.ContactMaterial(this.groundMaterial, this.bouncyMaterial, {
        friction: 0.4,
        restitution: 0.9,
      })
    );
  }
  initCube() {
    this.cubeShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1)); // 立方体形状
    this.body = new CANNON.Body({
      mass: 1, // 质量
      position: new CANNON.Vec3(0, 3, 0), // 初始位置
      material: this.bouncyMaterial,
    });
    if (this.body && this.cubeShape) {
      this.body?.addShape(this.cubeShape);
      this.world.addBody(this.body);
    }
    // this.body.type = CANNON.Body.KINEMATIC; // 不受重力影响
  }
  launchBody(body: CANNON.Body) {
    // 力大小
    const forceMagnitude = 1 + Math.random() * 10;

    // 随机方向
    const fx = (Math.random() - 0.5) * 2; // -1~1
    const fy = (Math.random() - 0.5) * 4; // 0~1，主要向上
    const fz = (Math.random() - 0.5) * 2;

    const force = new CANNON.Vec3(fx, fy, fz).scale(forceMagnitude);

    // 随机施加点，相对于物体中心
    const offsetX = (Math.random() - 0.5) * 1; // -0.5~0.5
    const offsetY = (Math.random() - 0.5) * 1;
    const offsetZ = (Math.random() - 0.5) * 1;
    const point = body.position.vadd(new CANNON.Vec3(offsetX, offsetY, offsetZ));
    console.log(force, point);

    // 施加冲击力
    body.applyImpulse(force, point);
  }
  animate() {
    this.world.step(1 / 60, this.clock.getDelta());
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
