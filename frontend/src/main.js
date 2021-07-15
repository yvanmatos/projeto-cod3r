import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMP
require('axios').defaults.headers.common['Authorization'] =
  'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ill2YW4gUC4gTWF0b3MiLCJlbWFpbCI6Inl2YW4ubWF0b3MyQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MjYzMTY3NzYsImV4cCI6MTYyNjU3NTk3Nn0.JYblcJ7l8448vM9tKGv6khvKbKxtB8BJE8Vl8XNIi58'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')