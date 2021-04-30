import Vue from 'vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router/index.js'

import store from './store/index.js'

import loadMore from './plugins/loadMore.js'

import message from './plugins/message.js'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(loadMore);
Vue.use(message);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')