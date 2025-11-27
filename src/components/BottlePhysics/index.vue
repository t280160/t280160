<template>
  <div ref="container" class="w-full h-120" />
</template>

<script setup lang="ts">
import * as THREE from "three";
import { InitThree, Animate, useMouseShake, InitCannon } from "./utils";

const { moveV2 } = useMouseShake();
const container = ref<HTMLDivElement>();
let initThree = new InitThree();
let initCannon = new InitCannon();
let animate = new Animate();
let cube: THREE.Mesh | null = null;
let lastX = 0;
let lastY = 0;

function init() {
  if (!container.value) return;
  initThree.init(container.value);
  animate.animatePush(initThree.animate.bind(initThree));
  cube = initThree.addBox();
  initThree.scene?.add(cube);

  initCannon.initCube();
  animate.animatePush(initCannon.animate.bind(initCannon));

  animate.animatePush(() => {
    // initCannon.cubeShape.copy
    if (cube && initCannon.body) {
      cube.position.set(
        initCannon.body.position.x,
        initCannon.body.position.y,
        initCannon.body.position.z
      );
      cube.quaternion.set(
        initCannon.body.quaternion.x,
        initCannon.body.quaternion.y,
        initCannon.body.quaternion.z,
        initCannon.body.quaternion.w
      );
    }
  });
}
watch(
  () => moveV2.value.x,
  () => {
    if (initCannon.body) {
      initCannon.launchBody(initCannon.body);
    }
  }
);

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      init();
    }, 300);
  });
  animate.animate();
});
onUnmounted(() => {});
</script>
