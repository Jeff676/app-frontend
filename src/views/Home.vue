<template>
<div>
  <nav-bar/>
  <hello-world />
</div>
</template>

<script>
  import NavBar from '../components/navBar'
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    created () {
      window.scrollTo(0, 0);
    },

    components: {
      HelloWorld,
      NavBar
    },
  }
</script>
