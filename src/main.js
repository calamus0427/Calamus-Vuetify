import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {router} from './router'
import store from './store'
// import './router/permission'   //路由权限限制

import '@/common/style/common.module.scss'

Vue.config.productionTip = false
import Vuetify from 'vuetify'
Vue.use(Vuetify)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
