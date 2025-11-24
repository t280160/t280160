<template>
  <div class="h-[100vh] grid place-items-center">
    {{ text }}
    <br />
    {{ path }}
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const text = route.meta.title;
const path = route.path;
</script>
