import Vue from "vue";
import Vuex from 'vuex'
//注册vuex
import tab from './tab'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        tab
    }
})
