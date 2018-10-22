import Vue from "vue";
import axios from "axios";

import App from "./App.vue";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vue-update-fb2a2.firebaseio.com";

axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

axios.interceptors.response.use(res => {
  console.log(res);
  return res;
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
