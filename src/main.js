/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
const pinia = createPinia();
app.use(pinia);
app.use(PrimeVue);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("InputText", InputText);

app.mount("#app");
