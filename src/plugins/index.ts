import type { App } from "vue";

import { setupRouter } from "@/router";

export default {
  install(app: App<Element>) {
    // 路由(router)
    setupRouter(app);
  },
};
