"use strict";
exports.__esModule = true;
var Vue = require("vue");
var App = require('./App.vue');
var router = require('./router')["default"];
var ElementUI = require("element-ui");
require("element-ui/lib/theme-default/index.css"); // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
Vue.use(ElementUI);
new Vue({
    components: {
        router: router
    },
    render: function (h) { return h(App); }
}).$mount('#app');
