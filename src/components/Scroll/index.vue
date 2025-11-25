<template>
  <div
    class="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer animate-bounce hover:scale-110 transition-transform duration-200"
    @click="scrollDown"
  >
    <span class="text-2xl select-none">👇</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollButton",
  setup() {
    const scrollDown = () => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    };

    return { scrollDown };
  },
});
</script>
