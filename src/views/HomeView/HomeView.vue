<template>
  <div class="home">
    <CarouselComponent />
    <section class="short-about-us">
      <div class="about-us-image-container">
        <img
          class="about-us-image"
          src="@/assets/images/passportImage.jpg"
        >
      </div>
      <div class="about-us-text">
        <h1 class="about-us-title">
          O MUNDO SE ABRE PARA VOCÊ.
        </h1>
        <h2 class="about-us-subtitle">
          Somos uma equipe altamente especializada que se dedica a simplificar os desafios das relações internacionais.
        </h2>
        <p class="about-us-description">
          Na GlobeSpeak, simplificamos processos internacionais com traduções juramentadas, assistência em viagens e expertise em cidadania. Combinando paixão e experiência, tornamos sua vida global mais fácil e acessível. 
        </p>
        <router-link
          to="/services"
          class="link"
        > 
          <button
            class="lets-go-btn"
          >
            Vamos lá!
          </button>
        </router-link>
      </div>
    </section>
    <PartnersPanel />
    <section class="why-us-section">
      <div class="why-us-container">
        <div class="why-us-title">
          <h1>Por que GlobeSpeak?</h1>
        </div>
        <div class="why-us-texts">
          <div
            v-for="(reason, index) in reasons"
            :key="index"
          >
            <h2 class="why-us-subtitle">
              {{ reason.title }}
            </h2>
            <p class="why-us-text">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-us-section">
      <div class="contact-us-container">
        <div class="contact-us-text-div">
          <h1 class="contact-us-title">
            Ainda com dúvidas? 
            Entre em <span class="blue-text">contato</span> conosco. 
          </h1>
          <p class="contact-us-subtitle">
            Descubra hoje mesmo como podemos tornar sua jornada internacional mais simples e clara.
          </p>
          <router-link
            to="/translators"
            class="link"
          > 
            <button class="contact-us-btn">
              Fale Conosco
            </button>
          </router-link>
        </div>
        <div>
          <img
            class="contact-us-image"
            src="@/assets/images/contactUsImage.jpg"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '@/components/Carousel/CarouselComponent.vue';
import PartnersPanel from '@/components/PartnersPanel/PartnersPanel.vue';

export default {
  name: 'HomeView',

  components: {
    CarouselComponent,
    PartnersPanel,
  },

  data() {
    return {
      reasons: [
        {
          title: "Serviços Integrados e Convenientes",
          description: "Como cliente, você terá acesso a uma gama abrangente de serviços em um só lugar. Isso significa que você pode lidar com traduções juramentadas, planejamento de viagens internacionais e processos de cidadania e naturalização de forma eficiente e conveniente, economizando tempo e esforço."
        },
        {
          title: "Experiência Especializada",
          description: "Nossa empresa conta com uma equipe experiente e especializada em cada um dos serviços que oferece. Isso garante que você receba traduções precisas e legalmente reconhecidas, assistência personalizada em suas viagens internacionais e orientação especializada em processos de cidadania, tudo entregue por profissionais altamente qualificados."
        },
        {
          title: "Suporte Personalizado",
          description: "Valorizamos nossos clientes e oferecemos suporte personalizado para atender às suas necessidades individuais. Estamos comprometidos em ajudá-lo a atingir seus objetivos, seja obtendo documentos traduzidos com perfeição, aproveitando uma viagem internacional tranquila ou alcançando o status de cidadania desejado, e estamos aqui para apoiá-lo a cada passo do caminho."
        }
      ]
    };
  }
};
</script>

<style src="./HomeView.scss" lang="scss" />
