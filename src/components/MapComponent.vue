<template>
  <div class="map-wrapper">
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'
import L, { Map } from 'leaflet'

const mapContainer = ref<HTMLDivElement | null>(null)
let map: Map | null = null

const latitude = 43.03620026352828
const longitude = 10.613182785878262
const zoom = 16

onMounted(() => {
  if (mapContainer.value) {
    // Initialize the map
    map = L.map(mapContainer.value).setView([latitude, longitude], zoom)

    // Add OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    // Add a real marker to the center
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup('📍 Casa del Lecceto')
      .openPopup()
  }
})
</script>

<style scoped>
/* Center the map container */
.map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.map-container {
  width: 800px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
