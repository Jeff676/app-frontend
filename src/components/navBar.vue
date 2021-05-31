<template>
     <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <router-link to="/" color="text-white"><v-btn text>Home</v-btn></router-link>
      <router-link to="/about"><v-btn text>About</v-btn></router-link>
      <router-link to="/login" v-if="!userLogged"><v-btn text>Login</v-btn></router-link>
      <router-link to="/logout" v-if="userLogged"><v-btn text>LogOut</v-btn></router-link>

      <v-btn
        href="http://192.168.0.9:3000"
        text
      >
        <span class="mr-2" v-if="userLogged"> {{ this.userLogged }} </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'navBar',
    data: () => ({
        logged:false,
    }),
}
</script>