<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'

onMounted(() => {
  const map = L.map('property-map').setView([43.7696, 11.2558], 13) // Example: Florence, Italy

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  L.marker([43.7696, 11.2558]).addTo(map) // Example location
    .bindPopup('La tua proprietà')
    .openPopup()
})
</script>

<template>
  <div class="map-container">
    <div id="property-map"></div>
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  max-width: 600px; /* Adjust the size of the box */
  height: 400px;
  margin: auto; /* Center the box */
  border: 2px solid #ddd; /* Optional border */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Ensure map stays within bounds */
}

#property-map {
  width: 100%;
  height: 100%;
}
</style>
