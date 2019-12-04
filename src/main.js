import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import $api from '@/api'
import routes from '@/routers'
import Pagoda from 'pagoda-mobile'
import 'pagoda-mobile/lib/index.css'

Vue.use(Pagoda)
Vue.config.productionTip = false
Vue.prototype.$api = $api

Vue.use(VueRouter)
const router = new VueRouter({routes})
Vue.use(router)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
