<script setup lang="ts">
interface Props {
  title: string;
  text: string;
  cta_primary: string;
  cta_secondary: string;
  img_path: string;
}

defineProps<Props>()
</script>

<template>
  <div class="col-lg-4">
    <div class="card mb-xl-0">
      <img
        class="card-img-top"
        :img="{ backgroundImage: `url(${img_path})` }"
        alt="Card image cap"
      />
      <div class="card-body text-dark">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ text }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a class="btn btn-primary" :href="cta_link_primary">{{
                cta_primary
              }}</a>
            <a class="btn btn-outline-secondary" :href="cta_link">{{
                cta_secondary
              }}</a>
          </div>
          <small class="text-muted">up to s8 people</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
