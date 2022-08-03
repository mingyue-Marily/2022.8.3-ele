import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/index'
import App from './App'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:'hash'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
