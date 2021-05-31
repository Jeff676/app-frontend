<template>
<div>
    <nav-bar/>
    <v-container>
        <v-alert :type="alertType" class="alert-style text-capitalize" v-model="seenAlert" dismissible absolute transition="slide-y-transition"> {{ alertMsg }}</v-alert>
        <v-row justify="center" class="mt-8">
            <v-col sm='10' md="4" class="ma-0 px-0 d-flex">
                <v-card color="primary" tile class="flex-grow-1 rounded-l pa-8 white--text" outlined >
                    <v-card-title class="text-h4">Welcome !</v-card-title>
                    <v-card-text class="white--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ex, dignissimos dolorem quia suscipit corrupti dolore labore libero ratione, aspernatur quibusdam quod, quaerat nulla soluta nobis non numquam laudantium corporis!</v-card-text>
                    <v-btn rounded class="white--text ml-4" outlined>Read more...</v-btn>
                </v-card>
            </v-col>
            <v-col xs='12' sm='10' md='4' class="ma-0 px-0">
                <v-card outlined tile class="rounded-r">
                    <v-form class="ma-2 px-10 py-16">
                        <p class="primary--text font-weight-black text-center text-h4">Login</p>
                        <v-text-field v-model="username" :counter="10" label="Username" required></v-text-field>
                        <v-text-field v-model="password" :counter="10" label="Password" required></v-text-field>
                        <v-btn color="primary" class="mt-12" block @click="login()">Submit</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
    import NavBar from '../components/navBar'

    export default {
        name: 'Login',
        components: {
            NavBar
        },
        data() {
            return {
                username: '',
                password: '',
                alertMsg:'',
                alertType:'error',
                seenAlert: false
            }
        },
        methods: {
            login() {
                this.axios.post('//localhost:3000/users/login', {username: this.username, password: this.password})
                .then((req)=> {
                    sessionStorage.jwt = req.data.token
                    sessionStorage.user = req.data.user
                    this.alertMsg = 'Bienvenido ' + req.data.user
                    this.alertType = 'success'
                    this.seenAlert = true
                    this.userLogged = req.data.user
                    setTimeout(()=> this.$router.push('/'), 2000)
                    
                }).catch((err)=>{
                    this.alertMsg = err.response.data
                    this.alertType = 'error'
                    this.seenAlert = true
                    console.log(err.response.data)
                })
            },
        },
        watch: {
            alertMsg() {
                setTimeout(()=> {
                    this.seenAlert = false
                }, 3000)
            }
        },
    }
</script>

<style lang="scss" scoped>
.alert-style {
    position:fixed;
    top: 0;
    z-index:100;
    width: 95%;
    margin: auto;
}

</style>