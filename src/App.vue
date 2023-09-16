<template>
  <div id="app">
    <Navbar />
    <router-view />
    <SnackbarAlert />
    <FooterComp />
  </div>
</template>

<script>
import Navbar from './components/NavBar/NavBar.vue';
import SnackbarAlert from './components/Snackbar/SnackbarAlert.vue';
import FooterComp from './components/Footer/FooterComp.vue';


export default {
  components: {
    Navbar,
    SnackbarAlert,
    FooterComp,
  }
};
</script>

<style src="./app.scss" lang="scss" />
