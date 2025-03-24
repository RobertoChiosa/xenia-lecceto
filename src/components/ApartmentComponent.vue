<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

const baseUrl = 'https://login.smoobu.com'

const props = defineProps<{
  id_smoobu: number
  title: string
  body: string
  description: string
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
      <h2 class="fw-bold text-uppercase hobo">{{ props.title }}</h2>
      <!--      <p class="text-muted">{{ props.body }}</p>-->
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div v-if="props.images && props.images.length > 0"
             id="carouselExampleIndicators"
             class="carousel slide carousel-fade shadow rounded overflow-hidden"
             data-bs-ride="carousel">

          <div class="carousel-indicators">
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
          <h5 class="fw-bold">{{ $t('common:description') }}</h5>
          <p v-html="props.description"></p> <!-- Using v-html to render formatted text -->
        </div>

        <div class="card mt-4 p-4">
          <div :id="'apartmentIframe' + props.id_smoobu"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  max-height: 700px;
}

.hobo {
  font-family: 'Hobo', sans-serif;
}
</style>
