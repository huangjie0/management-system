import Vue from 'vue'
import App from './App.vue'
import {Button,Radio} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
