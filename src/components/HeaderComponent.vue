<script setup lang="ts">
interface Props {
  title: string;
  subtititle: string;
  cta_primary: string;
  cta_secondary: string;
}

defineProps<Props>()
</script>

<template>
  <!-- Header-->
  <header class="header-background">
    <div class="overlay"></div>
    <div class="container px-5 d-flex justify-content-center align-items-center text-center">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bolder mb-2 text-white h1" style="font-family: 'Hobo', sans-serif;">
          {{ title }}
        </h1>
        <p class="lead mb-4 text-white fw-bold">
          {{ subtititle }}
        </p>
        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <a class="btn btn-light btn-lg px-4 me-sm-3" href="#apartments">{{ cta_primary
            }}</a>
          <!--          <a class="btn btn-outline-dark btn-lg px-4" href="#discover">{{ cta_secondary }}</a>-->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-background {
  background-image: url('/photos/lecceto-villa.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  min-height: 50vh; /* Increased height */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

@font-face {
  font-family: 'Hobo';
  src: url('fonts/hobo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.h1 {
  font-family: 'Hobo', sans-serif;
  font-size: 7rem !important;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
