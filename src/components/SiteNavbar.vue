<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container px-5">
      <a class="navbar-brand" href="/">
        La Casa del Lecceto
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
          <LanguageSelector />
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.header-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
  url("../assets/img/hero.jpg"); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
}

.navbar-background {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
