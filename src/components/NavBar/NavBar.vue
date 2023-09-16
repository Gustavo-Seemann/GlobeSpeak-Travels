<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <div
          class="mobile-menu-icon"
          @click="toggleMobileMenu"
        >
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
        <router-link
          to="/"
        > 
          <img
            class="company-logo"
            src="@/assets/images/companyLogo.png"
          >
        </router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link
            to="/services"
            class="link"
          >
            Serviços
          </router-link>
        </li>
        <li>
          <router-link
            to="/about-us"
            class="link"
          >
            Quem Somos
          </router-link>
        </li>
        <li>
          <router-link
            to="/translators"
            class="link"
          >
            Tradutores
          </router-link>
        </li>
      </ul>
      <div class="auth-buttons">
        <router-link
          to="/selfcheckout"
          class="link"
        >
          <button class="register-btn">
            Fazer um orçamento
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="mobile-menu"
      :class="{ 'open': isMobileMenuOpen }"
    >
      <ul class="mobile-nav-links">
        <li>
          <router-link
            to="/services"
            class="link"
          >
            Serviços
          </router-link>
        </li>
        <li>
          <router-link
            to="/about-us"
            class="link"
          >
            Quem Somos
          </router-link>
        </li>
        <li>
          <router-link
            to="/translators"
            class="link"
          >
            Tradutores
          </router-link>
        </li>
        <li>
          <router-link
            to="/selfcheckout"
            class="link"
          >
            <button class="register-btn">
              Fazer um orçamento
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style src="./navbar.scss" lang="scss" />
