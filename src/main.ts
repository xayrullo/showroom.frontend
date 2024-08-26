import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

import "./assets/css/tailwind.css";

import router from "./router";

import { i18n } from "@/plugins/i18n";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
