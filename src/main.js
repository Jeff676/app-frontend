import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

Vue.mixin({
  data: function() {
    return {
      userLogged: sessionStorage.user || false,
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
