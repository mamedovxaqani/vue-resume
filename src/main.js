import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import BaseContainer from "@/components/UI/BaseUI/BaseContainer";
import BaseContainerSecond from "@/components/UI/BaseUI/BaseContainerSecond";
import BaseTitle from "@/components/UI/BaseUI/BaseTitle";

const app = createApp(App);

app.use(store);

app.component("base-container", BaseContainer);
app.component("base-second-container", BaseContainerSecond);
app.component("base-title", BaseTitle);

app.mount("#app");
