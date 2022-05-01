import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItemGroup,
  MenuItem,Dropdown,DropdownMenu,DropdownItem,Row,Col,Card,Table,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import router from './router'
import store from './store'
import Router from 'vue-router'
import http from 'axios'
import './api/mock.js'
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
//配置路由信息
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
