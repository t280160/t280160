import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  base: "/t280160/", // github仓库名称
  plugins: [
    vue(),

    AutoImport({
      // 导入 Vue 函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      resolvers: [
        // 导入 Element Plus函数，如：ElMessage, ElMessageBox 等
      ],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      vueTemplate: true,
      // 导入函数类型声明文件路径 (false:关闭自动生成)
      dts: "src/types/auto-imports.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
});
