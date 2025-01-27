import { createApp } from "vue";
import App from "./App.vue";

import { Button } from "primevue";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.mount("#app");
app.use(PrimeVue);
app.component(Button);
