import { createApp } from "vue";
import App from "./App.vue";
import ColorContainer from "./components/ColorContainer.vue";
import ColorCard from './components/ColorCard.vue';

const app = createApp(App);

app.component("color-card-container", ColorContainer);
app.component("color-card", ColorCard);
app.mount("#app");