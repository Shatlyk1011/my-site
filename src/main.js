import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

var VueScrollTo = require("vue-scrollto");

import "@/assets/main.css";

createApp(App).use(VueScrollTo).use(store).mount("#app");
