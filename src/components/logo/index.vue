<template>
  <MetallicPaint
    :image-data="imageData!"
    :params="{
      patternScale: 5,
      refraction: 0.1,
      edge: 1,
      patternBlur: 0.1,
      liquid: 0.1,
      speed: 0.3,
    }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MetallicPaint from "../MetallicPaint/index.vue";
import logo from "@/assets/logo.svg";
import { parseImage } from "../MetallicPaint/Utility";

const imageData = ref<ImageData | null>(null);

onMounted(async () => {
  try {
    // Example: Fetch an SVG image and parse it
    // The SVG should have a transparent background and black fill color for the best effect

    const response = await fetch(logo);
    const blob = await response.blob();
    const file = new File([blob], "logo.svg", { type: "image/svg+xml" });
    const { imageData: processedImageData } = await parseImage(file);
    imageData.value = processedImageData;
  } catch (err) {
    console.error("Error loading image:", err);
  }
});
</script>
