<template>
  <div class="relative overflow-hidden">
    <canvas ref="canvasRef" class="absolute top-0 left-0 w-full h-full" />

    <div
      v-if="outerVignette"
      class="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]"
    />

    <div
      v-if="centerVignette"
      class="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, useTemplateRef } from "vue";

interface Props {
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  glitchSpeed: 50,
  centerVignette: false,
  outerVignette: false,
  smooth: true,
});

const canvasRef = useTemplateRef<HTMLCanvasElement>("canvasRef");
const animationRef = ref<number | null>(null);
const letters = ref<
  {
    char: string;
    color: string;
    targetColor: string;
    colorProgress: number;
  }[]
>([]);
const grid = ref({ columns: 0, rows: 0 });
const context = ref<CanvasRenderingContext2D | null>(null);
const lastGlitchTime = ref(Date.now());

const fontSize = 18;
const charWidth = 40;
const charHeight = 40;

const lettersAndSymbols = [
  ["乾", "坤", "震", "巽", "坎", "离", "艮", "兑"],
  // ["金", "土", "木", "木", "水", "火", "土", "金"],
  // ["西北", "西南", "正东", "东南", "正北", "正南", "东北", "正西"],
  // ["头", "腹", "足", "股", "耳", "眼", "手背", "口肺"],
  // ["父", "母", "长男", "长女", "中男", "中女", "少男", "少女"],
];

const getRandomChar = () => {
  const flat = lettersAndSymbols.flat();
  const index = Math.floor(Math.random() * flat.length);
  return {
    char: flat[index],
    index,
  };
};

const getRandomColor = (index: number) => {
  const obj = [
    "#FFD700",
    "#A0522D",
    "#228B22",
    "#66CDAA",
    "#1E90FF",
    "#FF4500",
    "#D2B48C",
    "#C0C0C0",
  ];
  return obj[index];
};

const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const interpolateColor = (
  start: { r: number; g: number; b: number },
  end: { r: number; g: number; b: number },
  factor: number
) => {
  const result = {
    r: Math.round(start.r + (end.r - start.r) * factor),
    g: Math.round(start.g + (end.g - start.g) * factor),
    b: Math.round(start.b + (end.b - start.b) * factor),
  };
  return `rgb(${result.r}, ${result.g}, ${result.b})`;
};

const calculateGrid = (width: number, height: number) => {
  const columns = Math.ceil(width / charWidth);
  const rows = Math.ceil(height / charHeight);
  return { columns, rows };
};

const initializeLetters = (columns: number, rows: number) => {
  grid.value = { columns, rows };
  const totalLetters = columns * rows;
  letters.value = Array.from({ length: totalLetters }, () => {
    const { char, index } = getRandomChar();
    return {
      char,
      color: getRandomColor(index),
      targetColor: getRandomColor(index),
      colorProgress: 1,
    };
  });
};

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const parent = canvas.parentElement;
  if (!parent) return;

  const dpr = window.devicePixelRatio || 1;

  const parentWidth = parent.parentElement?.offsetWidth || parent.offsetWidth || window.innerWidth;
  const parentHeight =
    parent.parentElement?.offsetHeight || parent.offsetHeight || window.innerHeight;

  const width = Math.max(parentWidth, 300);
  const height = Math.max(parentHeight, 300);

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  if (context.value) {
    context.value.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const { columns, rows } = calculateGrid(width, height);
  initializeLetters(columns, rows);
  drawLetters();
};

const drawLetters = () => {
  if (!context.value || letters.value.length === 0) return;
  const ctx = context.value;
  const { width, height } = canvasRef.value!.getBoundingClientRect();
  ctx.clearRect(0, 0, width, height);
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = "top";

  letters.value.forEach((letter, index) => {
    const x = (index % grid.value.columns) * charWidth;
    const y = Math.floor(index / grid.value.columns) * charHeight;
    ctx.fillStyle = letter.color;
    ctx.fillText(letter.char, x, y);
  });
};

const updateLetters = () => {
  if (!letters.value || letters.value.length === 0) return;

  const updateCount = Math.max(1, Math.floor(letters.value.length * 0.05));

  for (let i = 0; i < updateCount; i++) {
    const index = Math.floor(Math.random() * letters.value.length);
    if (!letters.value[index]) continue;
    const { char, index: charIndex } = getRandomChar();
    letters.value[index].char = char;
    letters.value[index].targetColor = getRandomColor(charIndex);

    if (!props.smooth) {
      letters.value[index].color = letters.value[index].targetColor;
      letters.value[index].colorProgress = 1;
    } else {
      letters.value[index].colorProgress = 0;
    }
  }
};

const handleSmoothTransitions = () => {
  let needsRedraw = false;
  letters.value.forEach((letter) => {
    if (letter.colorProgress < 1) {
      letter.colorProgress += 0.05;
      if (letter.colorProgress > 1) letter.colorProgress = 1;

      const startRgb = hexToRgb(letter.color);
      const endRgb = hexToRgb(letter.targetColor);
      if (startRgb && endRgb) {
        letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
        needsRedraw = true;
      }
    }
  });

  if (needsRedraw) {
    drawLetters();
  }
};

const animate = () => {
  const now = Date.now();
  if (now - lastGlitchTime.value >= props.glitchSpeed) {
    updateLetters();
    drawLetters();
    lastGlitchTime.value = now;
  }

  if (props.smooth) {
    handleSmoothTransitions();
  }

  animationRef.value = requestAnimationFrame(animate);
};

let resizeTimeout: any;

const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (animationRef.value) {
      cancelAnimationFrame(animationRef.value);
    }
    resizeCanvas();
    animate();
  }, 100);
};

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  context.value = canvas.getContext("2d");
  resizeCanvas();
  animate();

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value);
  }
  window.removeEventListener("resize", handleResize);
});

watch([() => props.glitchSpeed, () => props.smooth], () => {
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value);
  }
  animate();
});
</script>

<style scoped>
div {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

:deep(canvas) {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
