<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

const baseUrl = 'https://login.smoobu.com'
const props = defineProps<{
  id_smoobu: number
  title: string
  subtitle: string
  images: string[]
}>()

declare global {
  interface Window {
    BookingToolIframe?: {
      initialize: (config: { url: string; baseUrl: string; target: string }) => void;
    };
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js'
  script.onload = () => {
    if (window.BookingToolIframe && props.id_smoobu) {
      const iframeTarget = `#apartmentIframe${props.id_smoobu}`
      // Ensure the iframe container is available before initializing
      const iframeContainer = document.querySelector(iframeTarget)
      if (iframeContainer) {
        window.BookingToolIframe.initialize({
          url: `${baseUrl}/de/booking-tool/iframe/46106/${props.id_smoobu}`,
          baseUrl: baseUrl,
          target: iframeTarget
        })
      }
    }
  }
  document.body.appendChild(script)
})
</script>

<template>
  <div class="container my-5 py-5 text-center">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">{{ props.title }}</h2>
      <p class="text-muted">Intero monolocale - 38 m²</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div v-if="props.images && props.images.length > 0"
             id="carouselExampleIndicators"
             class="carousel slide carousel-fade shadow rounded overflow-hidden"
             data-bs-ride="carousel">

          <div class="carousel-indicators">
            <!-- First indicator is always active -->
            <button v-for="(image, index) in props.images"
                    :key="index"
                    type="button"
                    :data-bs-target="'#carouselExampleIndicators'"
                    :data-bs-slide-to="index"
                    :class="{ active: index === 0 }"></button>
          </div>

          <div class="carousel-inner">
            <div v-for="(image, index) in props.images"
                 :key="index"
                 :class="['carousel-item', { active: index === 0 }]">
              <img :src="image"
                   class="d-block w-100"
                   :alt="'Image ' + (index + 1)"
                   :loading="'lazy'">
            </div>
          </div>

          <button class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div v-else>
          <p>No images available for this apartment.</p>
        </div>

        <div class="card mt-4 p-4">
          <h5 class="fw-bold">Descrizione</h5>
          <p>
            Appartamento in stile toscano con connessione WiFi gratuita, lavatrice, ventilatore,
            camera da letto, ampia zona giorno e angolo cottura completamente attrezzato.
            A vostra disposizione anche un parcheggio ombreggiato.
          </p>
        </div>

        <div class="card mt-4 p-4">
          <div :id="'apartmentIframe' + props.id_smoobu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-inner {
  display: flex;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel img {
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
}

.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-hover {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
