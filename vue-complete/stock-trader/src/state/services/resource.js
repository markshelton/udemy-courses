import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "https://stock-trader-a9a0e.firebaseio.com/";
//Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next();
});

const http = Vue.http;

export default http;
