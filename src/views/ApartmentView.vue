<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApartmentComponent from '@/components/ApartmentComponent.vue'


// Define the Apartment type
interface Apartment {
  id_smoobu: number
  titleKey: string
  bodyKey: string
  descriptionKey: string
  images: string[]
}

// Define the apartment data using translation keys
const apartments: Record<string, Apartment> = {
  erica: {
    id_smoobu: 2066233,
    titleKey: 'common:property-erica-title',
    bodyKey: 'common:property-erica-text',
    descriptionKey: 'common:property-erica-description',
    images: [
      '/photos/erica/1.jpg',
      '/photos/erica/2.jpg',
      '/photos/erica/3.jpg',
      '/photos/erica/4.jpg'
    ]
  },
  iris: {
    id_smoobu: 2066263,
    titleKey: 'common:property-iris-title',
    bodyKey: 'common:property-iris-text',
    descriptionKey: 'common:property-iris-description',
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
    titleKey: 'common:property-rosa-title',
    bodyKey: 'common:property-rosa-text',
    descriptionKey: 'common:property-rosa-description',
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
    titleKey: 'common:property-viola-title',
    bodyKey: 'common:property-viola-text',
    descriptionKey: 'common:property-viola-description',
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
      :title="$t(apartmentData.titleKey)"
      :body="$t(apartmentData.bodyKey)"
      :description="$t(apartmentData.descriptionKey)"
      :images="apartmentData.images" />
  </div>
  <div v-else>
    <p>{{ $t('common:apartment-not-found') }}</p>
  </div>
</template>
