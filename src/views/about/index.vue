<template>
  <div class="w-full bg-black">
    <div class="relative w-full h-screen overflow-hidden">
      <LetterGlitch
        :glitch-speed="50"
        :center-vignette="false"
        :outer-vignette="true"
        :smooth="true"
        class="w-full h-full"
      />
      <Test class="flex justify-center absolute z-10 w-full" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LetterGlitch from "@/components/LetterGlitch/index.vue";
import TrueFocus from "@/components/TrueFocus/index.vue";
import Test from "@/components/Test/index.vue";
</script>
