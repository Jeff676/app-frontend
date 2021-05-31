import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const isAuthenticated = async (to, from, next) => {
    const jwt = sessionStorage.jwt
    if (!jwt) {
      next({ name: 'login' })
    } else {
      await axios.post('//localhost:3000/users/checkuser', { jwt: jwt })
      .then(()=> {
        next()
      }).catch(()=> {
        next({ name: 'login'})
      })
    }
  }

  export default isAuthenticated