// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' // 自动转换rem插件
import Vuex from 'Vuex'
import $ from 'jquery'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import iconfont from '../static/iconFont/iconfont.css'

Vue.config.productionTip = false;

// Vue.use(MintUI)
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  },
  mutations: {
    storeUserInfo: function (state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {},
  modules: {}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
