<template>
  <div class="h-full w-full">
    <!-- 浮动导航栏 (初始状态) -->
    <div
      :class="[
        'grid place-items-center bg-transparent fixed z-10 w-full left-0 transition-all duration-500',
        isScrolled ? 'top-0 translate-y-0 py-2' : 'top-[2em]',
      ]"
    >
      <div
        :class="[
          'flex items-center h-16 px-6  bg-[hsla(0,0%,100%,0.05)] backdrop-filter backdrop-blur-[10px] border border-[rgba(255,255,255,0.6)] w-[90%] md:w-[60%] transition-all duration-500',
          isScrolled ? 'rounded-[16px]' : 'rounded-[50px]',
        ]"
      >
        <nav class="grid grid-cols-[1fr_38px_38px] gap-8 font-semibold h-full w-full items-center">
          <div>
            <Logo />
          </div>
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'flex items-center text-[18px] transition-all duration-300 relative group',
              activePath === item.path
                ? 'text-[var(--color-1)]'
                : 'text-white hover:text-[var(--color-1)]',
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute bottom-[-4px] left-0 h-1 bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)] transition-all duration-300',
                activePath === item.path ? 'w-full' : 'w-0 group-hover:w-full',
              ]"
            />
          </router-link>
        </nav>
      </div>
    </div>

    <div ref="contentRef" class="h-full w-full overflow-y-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/components/logo/index.vue";

const contentRef = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const scrollThreshold = 20;

const navItems = [
  { label: "主页", path: "/dashboard" },
  { label: "关于", path: "/about" },
];

const route = useRoute();
const activePath = computed(() => route.path);

const handleScroll = () => {
  const containerScrollTop = contentRef.value?.scrollTop ?? 0;
  const windowScrollTop = window.scrollY || window.pageYOffset || 0;
  const currentScrollTop = Math.max(containerScrollTop, windowScrollTop);
  isScrolled.value = currentScrollTop > scrollThreshold;
};

onMounted(() => {
  if (contentRef.value) {
    contentRef.value.addEventListener("scroll", handleScroll);
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  if (contentRef.value) {
    contentRef.value.removeEventListener("scroll", handleScroll);
  }
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style>
/* Add these CSS custom properties to your global styles */
:root {
  --color-1: #ff6b6b;
  --color-2: #4ecdc4;
  --color-3: #45b7d1;
  --color-4: #f9ca24;
}
</style>
