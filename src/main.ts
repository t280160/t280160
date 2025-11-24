import { createApp } from "vue";
import App from "./App.vue";
import setupPlugins from "@/plugins";

import "@/styles/index.scss";

const app = createApp(App);
// 注册插件
app.use(setupPlugins);
app.mount("#app");
