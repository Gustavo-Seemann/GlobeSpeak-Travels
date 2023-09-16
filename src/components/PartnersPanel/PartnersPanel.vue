<template>
  <div class="partners-panel">
    <div>
      <h2 class="partners-title">
        ALIADOS DE <span class="blue-text">CONFIANÇA</span>.
      </h2>
    </div>
    <div class="partners-logo-list">
      <div
        class="partners-logo"
        v-for="(logo, index) in getPartnersLogo"
        :key="index"
      >
        <img
          width="150"
          :src="require('@/assets/images/' + logo)"
        >
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";

export default {
  name: 'PartnersPanel',

  computed: {

    ...mapGetters([
      "getPartnersLogo"
    ]),
  },
};
</script>
  
<style src="./PartnersPanel.scss" lang="scss" />
  