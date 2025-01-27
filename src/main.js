import { createApp } from "vue";
import App from "./App.vue";

import { Button } from "primevue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(PrimeVue);
app.component(Button);
app.mount("#app");
