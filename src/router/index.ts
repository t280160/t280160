// 静态路由
import { type App } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const text = () => import("@/views/text.vue");

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: text,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
