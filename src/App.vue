<template>
  <ClickSpark
    spark-color="#ff6b6b"
    :spark-size="12"
    :spark-radius="25"
    :spark-count="12"
    :duration="600"
    easing="ease-out"
    :extra-scale="1.2"
  >
    <router-view />
  </ClickSpark>
</template>

<script setup lang="ts">
import ClickSpark from "@/components/ClickSpark/index.vue";
</script>
