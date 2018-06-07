// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import UpTemplate from './components/template';
import '../static/ui-kit/index.min.css';
import 'mdi/css/materialdesignicons.min.css';
import lang from 'element-ui/lib/locale/lang/ru-RU'
import '../src/vue-tree-halower/dist/halower-tree.min.css' // you can customize the style of the tree
import VTree from '../src/vue-tree-halower'
Vue.use(VTree);
Vue.prototype.$split = require("split.js");

Vue.config.productionTip = false;
Vue.component('up-template', UpTemplate);

Vue.use(ElementUI, {
  size: 'mini',
  locale: lang,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


