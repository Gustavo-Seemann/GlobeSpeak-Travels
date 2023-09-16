<template>
  <div>
    <section class="services-header">
      <div class="services-header-container">
        <img
          class="services-header-image"
          src="@/assets/images/suitcaseImage.jpg"
        >
        <div>
          <h1 class="services-header-title">
            Com <span class="blue-text">nosso trabalho</span>
          </h1>
          <h1 class="services-header-subtitle">
            você fica de mala pronta.
          </h1>
          <router-link
            to="/selfcheckout"
            class="link"
          >
            <button class="buying-btn-header">
              Fazer um orçamento
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="services-body">
      <div class="services-body-container">
        <div>
          <h1 class="services-body-title">
            SERVIÇOS
          </h1>
          <div class="services-body-itens">
            <div
              class="services-body-info"
              v-for="(service, index) in getServicesPresentation"
              :key="index"
            >
              <h1> {{ service.title }}</h1>
              <p> {{ service.description }}</p>
            </div>
          </div>
        </div>
        <img
          class="services-body-image"
          src="@/assets/images/travelManImage.jpg"
        >
      </div>
    </section>
    <section class="services-footer">
      <div class="services-footer-container">
        <div>
          <h1 class="services-footer-title">
            E ai? Tem interesse?
          </h1>
          <h1 class="services-footer-subtitle">
            O <span class="blue-text">mundo</span> espera por você, vem com a gente.
          </h1>
          <router-link
            to="/selfcheckout"
            class="link"
          > 
            <button class="buying-btn-footer">
              Fazer um orçamento
            </button>
          </router-link>
        </div>
        <img
          class="services-footer-image"
          src="@/assets/images/airplaneImage.jpg"
        >
      </div>
    </section>
  </div>
</template>
    
<script>  
import { mapGetters } from "vuex";

export default {
  name: 'ServicesView',
  
  components: {
  },

  computed: {
    ...mapGetters(["getServicesPresentation"])
  }
};
</script>
    
  <style scoped src="./ServicesView.scss" lang="scss" />
    