<script setup lang="ts">
interface Props {
  text: string;
  signature: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card mb-4">
    <div class="card-body p-4">
      <div class="d-flex">
        <div class="flex-shrink-0">
          <i class="bi bi-chat-right-quote-fill text-primary fs-1"></i>
        </div>
        <div class="ms-4">
          <p class="mb-1">
            {{ text }}
          </p>
          <div class="small text-muted">{{ signature }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
