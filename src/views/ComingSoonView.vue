<template>
  <div class="bgimg">
    <h1 class="text-3xl font-semibold text-center relative">La Casa del Lecceto</h1>
    <p class="text-center text-gray-300 mt-4 relative">Il sito è in costruzione, torneremo
      presto!</p>
    <br>
    <h2>Contattaci</h2>
    <h4>Via Suveretana 5, 57021 Campiglia Marittima LI, Italia
    </h4>
    <h4>
      Email
      <a href="mailto:cdlit13@gmail.com" class="text-blue-400">
        cdlit13@gmail.com
      </a>
    </h4>
    <h4>
      Telefono
      <a href="tel:+393496000000" class="text-blue-400">
        +39 349 600 0000
      </a>
    </h4>

  </div>
</template>

<style>
.bgimg {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/lecceto2.jpg') center/cover no-repeat;
  position: relative;
  color: white;
  text-align: center;
}

/* Faded Background Overlay */
.bgimg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Adjust opacity here */
}

/* Ensures text appears above overlay */
.bgimg > * {
  position: relative;
  z-index: 1;
}
</style>
<script setup lang="ts">
</script>
