<template>
  <div ref="container" class="w-full h-120" @click="launchBody" />
</template>

<script setup lang="ts">
import * as THREE from "three";
import { InitThree, Animate, useMouseShake, InitCannon } from "./utils";

const { moveV2 } = useMouseShake();
const container = ref<HTMLDivElement>();
let initThree = new InitThree();
let initCannon = new InitCannon();
let animate = new Animate();
let cube1: THREE.Mesh | null = null;
let cube2: THREE.Mesh | null = null;
let cube3: THREE.Mesh | null = null;

function init() {
  if (!container.value) return;
  initThree.init(container.value);
  animate.animatePush(initThree.animate.bind(initThree));
  cube1 = initThree.addBox(new THREE.Vector3(0, 1, 0));
  initThree.scene?.add(cube1);
  cube2 = initThree.addBox(new THREE.Vector3(-4, 1, -2));
  initThree.scene?.add(cube2);
  cube3 = initThree.addBox(new THREE.Vector3(3, 1, 3));
  initThree.scene?.add(cube3);

  initCannon.initCube(cube1);
  initCannon.initCube(cube2);
  initCannon.initCube(cube3);
  animate.animatePush(initCannon.animate.bind(initCannon));

  /* animate.animatePush(() => {
    // initCannon.cubeShape.copy
    if (cube1 && initCannon.body) {
      cube1.position.set(
        initCannon.body.position.x,
        initCannon.body.position.y,
        initCannon.body.position.z
      );
      cube1.quaternion.set(
        initCannon.body.quaternion.x,
        initCannon.body.quaternion.y,
        initCannon.body.quaternion.z,
        initCannon.body.quaternion.w
      );
      // initThree.camera?.lookAt(cube.position);
    }
  }); */
}
function launchBody() {
  initCannon.launchBody();
}

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
