import { createApp } from "vue";

import router from "./router.js";
import App from "./App.vue";
import store from "./Store.js";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios'
app.use(store);
app.use(router);
app.mount("#app");
