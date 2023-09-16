<template>
  <div>
    <section class="about-us">
      <div class="about-us-container">
        <div class="about-us-text">
          <h1>A <span class="blue-text">GlobeSpeak</span>.</h1>
          <div>
            <p>
              Somos uma equipe dedicada na vanguarda da facilitação de processos internacionais. Na GlobeSpeak, combinamos nossa paixão por conexões globais com conhecimento especializado em tradução juramentada, viagens internacionais e assessoria em cidadania e naturalização. Com anos de experiência, estamos comprometidos em simplificar as complexidades que envolvem esses aspectos cruciais da vida internacional.
            </p>
            <p>
              Nossa equipe de tradutores juramentados é apaixonada por garantir que seus documentos legais sejam traduzidos com precisão e estejam em conformidade com todos os requisitos legais, tornando seus processos internacionais mais suaves e eficientes.
            </p>
            <p>
              Quando se trata de viagens internacionais, acreditamos que todos merecem aventuras sem complicações. Nossa assistência vai além da simples reserva de voos e acomodações; estamos aqui para proporcionar a você uma experiência de viagem verdadeiramente memorável, cuidando de todos os detalhes logísticos, incluindo vistos e itinerários personalizados.
            </p>
            <p>
              A busca da cidadania e naturalização é um momento crucial em sua vida, e nossa equipe de especialistas está pronta para orientá-lo a cada passo do caminho. Com um profundo conhecimento dos procedimentos burocráticos e regulatórios, estamos comprometidos em tornar seu sonho de cidadania uma realidade.
            </p>
            <p>
              Na GlobeSpeak, valorizamos a confiança que nossos clientes depositam em nós e estamos empenhados em fornecer soluções sob medida que atendam às suas necessidades individuais. Nossa missão é simplificar o complexo, conectando pessoas e culturas, garantindo que você possa alcançar seus objetivos globais com confiança.
            </p>
            <p>
              Junte-se a nós em uma jornada de oportunidades internacionais e descubra como podemos tornar sua experiência global mais acessível, descomplicada e gratificante.
            </p>
          </div>
        </div>
        <div class="about-us-image-div">
          <img
            class="about-us-company-image"
            src="@/assets/images/companyPeopleImage.jpg"
          >
          <small>Hiroyuki Sawano, Fundador da GlobeSpeak</small>
        </div>
      </div>
    </section>
    <section>
      <PartnersPanel />
    </section>
  </div>
</template>
    
<script>
import PartnersPanel from '@/components/PartnersPanel/PartnersPanel.vue';
  
export default {
  name: 'AboutUsView',
  
  components: {
    PartnersPanel,
  },
};
</script>
    
  <style scoped src="./AboutUsView.scss" lang="scss" />
    