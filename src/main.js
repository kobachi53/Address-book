import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAm3UFiLQVNGKaOVRXz4mtqdYHnNBJf2xs",
  authDomain: "my-address-pj-8e7b1.firebaseapp.com",
  databaseURL: "https://my-address-pj-8e7b1.firebaseio.com",
  projectId: "my-address-pj-8e7b1",
  storageBucket: "",
  messagingSenderId: "413493618557",
  appId: "1:413493618557:web:e5a43298fe871b7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
