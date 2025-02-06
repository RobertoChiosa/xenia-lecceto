<script setup lang="ts">

interface Props {
  section_id: string;
  header: string;
  title: string;
  body: string;
  cta?: string;
  img: string;
  light?: boolean;
}

defineProps<Props>()
</script>

<template>
  <section class="py-5 border-bottom" :class="{ 'bg-light': light }" :id="section_id">
    <div class="container px-5 my-5 px-5">
      <div class="mt-16 grid gap-8 md:grid-cols-3">
        <div class="row featurette gap-4 d-flex">
          <div class="col-md-7 flex-shrink-0">
            <span class="large text-uppercase fw-bold text-muted py-3">
              {{ header }}
            </span>
            <h2 class="featurette-heading"></h2>
            <h2 class="fw-bolder">{{ title }}</h2>
            <p>{{ body }}</p>
            <a v-if="cta" class="btn btn-dark text-white btn-md px-4 me-sm-3" href="#apartments">Scopri</a>
            <a class="btn btn-tertiary btn-md px-4"
               href="mailto:cdlit13@gmail.com?subject=Richiesta informazione">Contattaci</a>

          </div>
          <div class="col-md-4 img-service flex-shrink-0">
            <div
              class="img-container"
              :style="{ backgroundImage: `url(${img})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Style for the image container */
.img-service {
  position: relative;
  height: 100%; /* Ensure it stretches the full height available */
}

.img-container {
  width: 100%;
  height: 0;
  padding-top: 75%; /* Aspect ratio (adjust as needed, e.g., 75% = 4:3) */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px; /* Optional: rounded corners */
}

/* Thin out the marketing headings uppercase the text*/
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}
</style>
