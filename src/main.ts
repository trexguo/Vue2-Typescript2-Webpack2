declare var require: any

import Vue = require('vue');
var App = require('./App.vue');
var router = require('./router').default;
import ElementUI = require('element-ui');
import 'element-ui/lib/theme-default/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题

Vue.use(ElementUI);
new Vue({
  components: {
    router
  },
  render: h => h(App)
}).$mount('#app');
