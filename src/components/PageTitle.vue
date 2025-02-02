<script setup lang="ts">
interface Props {
  title: string
  size?: 'small' | 'medium' | 'large'
}

defineProps<Props>()
</script>

<template>
  <h3
    class="font-bold font-adieu"
    :class="{
      'text-5xl': !size,
      'text-2xl': size === 'small',
      'text-3xl': size === 'medium',
      'text-4xl': size === 'large',
    }"
  >
    {{ title }}
  </h3>
</template>
