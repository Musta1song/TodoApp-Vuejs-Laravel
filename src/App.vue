<template>
  <VueNavbar/>
  <router-view/>
</template>

<script>
import VueNavbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    VueNavbar
  }
}
</script>

<style>

</style>
