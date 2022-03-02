import * as $ from "jquery";
import "./babel.js";
import Post from "./Post";
import "./styles/styles.css";
import "./styles/scss.scss";
import WebpackLogo from "./assets/webpack-logo.png";
import csv from "./assets/data.csv";

import Vue from "vue";
import App from "./App.vue";

const post = new Post("Webpack post title", WebpackLogo);

$("pre").html(post.toString());

new Vue({
  render: h => h(App),
}).$mount("#app");

console.log("Loaded csv :>> ", csv);
