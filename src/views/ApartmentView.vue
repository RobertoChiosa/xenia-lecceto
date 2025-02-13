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
      '/photos/erica/1.jpg',
      '/photos/erica/2.jpg',
      '/photos/erica/3.jpg',
      '/photos/erica/4.jpg'
    ]
  },
  iris: {
    id_smoobu: 2066263,
    title: 'Monolocale Iris con piscina',
    subtitle: 'Intero monolocale - 38 m²',
    images: [
      '/photos/iris/1.jpg',
      '/photos/iris/2.jpg',
      '/photos/iris/3.jpg',
      '/photos/iris/4.jpg',
      '/photos/iris/5.jpg'
    ]
  },
  rosa: {
    id_smoobu: 2066353,
    title: 'Quadrilocale Rosa con piscina',
    subtitle: 'Intero appartamento - 60 m²',
    images: [
      '/photos/rosa/1.jpg',
      '/photos/rosa/2.jpg',
      '/photos/rosa/3.jpg',
      '/photos/rosa/4.jpg',
      '/photos/rosa/5.jpg',
      '/photos/rosa/6.jpg'
    ]
  },
  viola: {
    id_smoobu: 2066266,
    title: 'Quadrilocale Viola con piscina',
    subtitle: 'Intero monolocale - 38 m²',
    images: [
      '/photos/viola/1.jpg',
      '/photos/viola/2.jpg',
      '/photos/viola/3.jpg',
      '/photos/viola/4.jpg',
      '/photos/viola/5.jpg',
      '/photos/viola/6.jpg'
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
