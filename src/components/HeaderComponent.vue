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
  <header class="bg-dark py-5 header-background">
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
          <div class="text-center my-5">
            <h1 class="display-5 fw-bolder text-white mb-2">
              {{ title }}
            </h1>
            <p class="lead text-white-50 mb-4">
              {{ subtititle }}
            </p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <a
                class="btn btn-primary btn-lg px-4 me-sm-3"
                href="#apartments"
              >{{ cta_primary }}</a
              >
              <a class="btn btn-outline-light btn-lg px-4" href="#discover">{{
                  cta_secondary
                }}</a>
            </div>
          </div>
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
  z-index: 1;
}


</style>
