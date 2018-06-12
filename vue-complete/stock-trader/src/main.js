import Vue from "vue";

import App from "App.vue";
import router from "state/router/router";
import store from "state/store/store";
import http from "state/services/resource";

new Vue({
  el: "#app",
  router,
  store,
  http,
  render: h => h(App)
});
