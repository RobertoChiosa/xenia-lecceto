<script setup lang="ts">
interface Props {
  reverse?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="image-container"
    :class="{
      inverted: reverse,
    }"
  >
    <div class="container-image">
      <slot name="image" />
    </div>
    <div class="container-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-container {
  @apply grid grid-cols-2 items-center;
  grid-template-areas: 'image content';

  &.inverted {
    grid-template-areas: 'content image';
  }
}

.container-image {
  grid-area: image;
}

.container-content {
  grid-area: content;
}
</style>
