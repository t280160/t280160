<template>
  <div class="w-full bg-black pb-10">
    <div class="relative w-full h-screen overflow-hidden">
      <Aurora
        :color-stops="['#7cff67', '#171D22', '#7cff67']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="0.5"
        :intensity="1.5"
      />
      <div
        class="text-center whitespace-normal break-words px-4 sm:px-0 h-full flex items-center justify-center"
      >
        <BlurText
          v-if="str"
          :text="str"
          :delay="200"
          class-name="text-sm sm:text-base lg:text-5xl font-semibold text-white mx-auto"
          animate-by="letters"
          direction="top"
          :threshold="0.1"
          root-margin="0px"
          :step-duration="0.35"
        />
      </div>
    </div>
    <!-- 添加额外内容以支持滚动 -->
    <div class="min-h-screen bg-black flex justify-center">
      <Test />
    </div>
    <!-- 底部 -->
    <div class="w-[90%] md:w-[60%] mx-auto grid place-items-center min-h-16">
      <TrueFocus
        sentence="VueBits Vue Vite TypeScript Tailwindcss Three Gasp Motion-v Ogl"
        :manualMode="false"
        :blurAmount="2"
        borderColor="#27FF64"
        :animationDuration="0.5"
        :pauseBetweenAnimations="1"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Aurora from "@/components/Aurora/index.vue";
import TrueFocus from "@/components/TrueFocus/index.vue";
import BlurText from "@/components/BlurText/index.vue";
import Bagua from "@/components/bagua/index.vue";
import Test from "@/components/Test/index.vue";
import { getDashBoardStr } from "@/api/dailyQuote";

const str = ref("");
onMounted(() => {
  getDashBoardStr().then((res) => {
    str.value = res.data.content;
  });
});
</script>
