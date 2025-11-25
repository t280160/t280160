<template>
  <div class="w-full bg-black">
    <div class="relative w-full h-screen overflow-hidden">
      <Aurora
        :color-stops="['#7cff67', '#171D22', '#7cff67']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="0.5"
        :intensity="1.5"
      />
    </div>
    <!-- 添加额外内容以支持滚动 -->
    <div class="min-h-screen bg-black flex items-center justify-center">
      <div class="text-white text-center">
        <h2 class="text-4xl font-bold mb-4">第二页内容</h2>
        <p class="text-lg text-gray-400">向下滚动查看导航栏变化</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Aurora from "@/components/Aurora/index.vue";
</script>
