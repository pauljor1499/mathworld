import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App);
app.use(naive);

app.use(router).mount("#app");
