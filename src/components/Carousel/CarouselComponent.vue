<template>
  <div class="carousel">
    <div class="carousel-container">
      <div
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        class="carousel-content"
      >
        <div
          v-for="(service, index) in getServicesPresentation"
          :key="index"
          class="carousel-slide"
        >
          <div class="carousel-overlay">
            <button
              class="carousel-controler"
              @click="prevSlide"
            >
              <font-awesome-icon
                icon="fa-solid fa-chevron-left"
                size="xl"
                style="color: #ffffff;"
              />    
            </button>
            <div class="carousel-info">
              <h1 class="carousel-title">
                {{ service.title }}
              </h1>
              <p class="carousel-description">
                {{ service.short_description }}
              </p>
              <router-link
                to="/services"
                class="link"
              > 
                <button class="knowmore-btn">
                  Saiba mais
                </button>
              </router-link>
            </div>
            <button
              class="carousel-controler"
              @click="nextSlide"
            >
              <font-awesome-icon
                icon="fa-solid fa-chevron-right"
                size="xl"
                style="color: #ffffff;"
              />      
            </button>
          </div>
          <div>
            <video
              class="carousel-video"
              autoplay
              muted
              loop
            >
              <source
                :src="require('@/assets/videos/' + service.video)"
                type="video/mp4"
              >
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {

    ...mapGetters([
      "getServicesPresentation"
    ]),
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.getServicesPresentation.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.getServicesPresentation.length) % this.getServicesPresentation.length;
    },
  },
};
</script>

<style src="./CarouselComponent.scss" lang="scss" />