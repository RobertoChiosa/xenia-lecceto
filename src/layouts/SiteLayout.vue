<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/SiteNavbar.vue'
</script>

<template>
  <NavbarComponent />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>
