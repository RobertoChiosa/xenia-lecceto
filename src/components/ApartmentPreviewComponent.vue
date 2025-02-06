<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  title: string;
  text: string;
  cta_primary: string;
  cta_link_primary?: string;
  cta_secondary: string;
  cta_link_secondary?: string;
  img_path: string;
  people: number;
}

const props = defineProps<Props>()
const router = useRouter()
const expanded = ref(false)

// Computed property to show truncated text
const displayText = () => {
  return expanded.value ? props.text : props.text.slice(0, 120) + '...'
}

// Navigate when the card is clicked
const navigateToPrimary = () => {
  if (props.cta_link_primary) {
    router.push(props.cta_link_primary)
  }
}
</script>

<template>
  <div class="col-lg-4">
    <div class="card mb-xl-0 card-hover" @click="navigateToPrimary">
      <img class="card-img-top" :src="img_path" alt="Card image" />
      <div class="card-body text-dark">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ displayText() }}
          <span v-if="!expanded" class="read-more" @click.stop="expanded = true">
            Read more
          </span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a class="btn btn-dark" :href="cta_link_primary" @click.stop>{{
                cta_primary
              }}</a>
            <a class="btn btn-outline-secondary" :href="cta_link_secondary" @click.stop>{{
                cta_secondary
              }}</a>
          </div>
          <small class="text-muted">
            <i class="bi bi-people-fill"></i> {{ people }}
          </small>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-hover {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.read-more {
  cursor: pointer;
  margin-left: 5px;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
