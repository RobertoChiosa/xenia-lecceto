<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApartmentComponent from '@/components/ApartmentComponent.vue'

// Define the Apartment type
interface Apartment {
  id_smoobu: number
  title: string
  subtitle: string
  images: string[]
}

// Define the apartment data
const apartments: Record<string, Apartment> = {
  erica: {
    id_smoobu: 2066233,
    title: 'Trilocale Erica con piscina',
    subtitle: 'Intero trilocale - 38 m²',
    images: [
      '/photos/appartamenti/erica/bagno.jpg',
      '/photos/appartamenti/erica/camera.jpg',
      '/photos/appartamenti/erica/camera2.jpg',
      '/photos/appartamenti/erica/sala.jpg'
    ]
  },
  iris: {
    id_smoobu: 2066263,
    title: 'Monolocale Iris con piscina',
    subtitle: 'Intero monolocale - 38 m²',
    images: [
      '/photos/appartamenti/iris/bagno.jpg',
      '/photos/appartamenti/iris/camera.jpg',
      '/photos/appartamenti/iris/ingresso.jpg',
      '/photos/appartamenti/iris/sala.jpg',
      '/photos/appartamenti/iris/sala2.jpg'
    ]
  },
  rosa: {
    id_smoobu: 2066353,
    title: 'Quadrilocale Rosa con piscina',
    subtitle: 'Intero appartamento - 60 m²',
    images: [
      '/photos/appartamenti/rosa/bagno2.jpg',
      '/photos/appartamenti/rosa/camera.jpg',
      '/photos/appartamenti/rosa/sala.jpg',
      '/photos/appartamenti/rosa/sala2.jpg',
      '/photos/appartamenti/rosa/sala3.jpg'
    ]
  },
  viola: {
    id_smoobu: 2066266,
    title: 'Quadrilocale Viola con piscina',
    subtitle: 'Intero monolocale - 38 m²',
    images: [
      '/photos/appartamenti/viola/bagno.jpg',
      '/photos/appartamenti/viola/camera.jpg',
      '/photos/appartamenti/viola/cucina.jpg',
      '/photos/appartamenti/viola/sala.jpg'
    ]
  }
}

const route = useRoute()

// Compute the current apartment dynamically
const apartmentData = computed(() => {
  const slug = route.params.slug as string
  return apartments[slug] || null
})

onMounted(() => {
  console.log('Apartment data:', apartmentData.value)
})
</script>

<template>
  <div v-if="apartmentData">
    <ApartmentComponent
      :id_smoobu="apartmentData.id_smoobu"
      :title="apartmentData.title"
      :subtitle="apartmentData.subtitle"
      :images="apartmentData.images" />
  </div>
  <div v-else>
    <p>Apartment not found.</p>
  </div>
</template>
