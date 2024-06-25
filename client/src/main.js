import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store/index"

import "bootstrap";
import "./assets/css/bootstrap.min.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mixin(mixins);
app.use(VueSweetalert2);
app.mount("#app");

// client 전역변수 선언
app.config.globalProperties.url = "http://localhost:3000";

// 카카오로그인 앱 키
window.Kakao.init('397ea64334c055563c436141e6a5523c');