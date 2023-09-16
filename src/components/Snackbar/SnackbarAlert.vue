<template>
  <div
    v-if="getSnackbar.show"
    class="snackbar"
    :class="getSnackbar.color"
  >
    {{ getSnackbar.message }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(["getSnackbar"]),

    showSnackbar() {
      return this.getSnackbar.show;
    }
  }, 
  methods: {
    ...mapActions(["setSnackbar", "closeTimeOutSnackbar"])
  },
  watch: {
    showSnackbar() {
      if (this.showSnackbar === true) {
        this.closeTimeOutSnackbar();
      }
    },
  },
};
</script>

<style src="./SnackbarAlert.scss" lang="scss" />