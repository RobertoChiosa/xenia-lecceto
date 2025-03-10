<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
import PropertyComponent from '@/components/ApartmentPreviewComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<template>
  <HeaderComponent
    :title="$t('home:header-title')"
    :subtititle="$t('home:header-subtitle')"
    :cta_primary="$t('home:header-cta-primary')"
    :cta_secondary="$t('home:header-cta-secondary')"
  />
  <section class="py-5 border-bottom" id="apartments">
    <div class="container px-5 my-5 px-5">
      <div class="text-center mb-5">
        <h2 class="fw-bolder">{{ $t('home:apartments-title') }}</h2>
        <p class="lead mb-0">{{ $t('home:apartments-subtitle') }}</p>
      </div>
      <div class="row gy-4 justify-content-center">
        <PropertyComponent
          :title="$t('common:property-erica-title')"
          :text="$t('common:property-erica-text')"
          :cta_primary="$t('common:discover-more')"
          cta_link_primary="apartments/erica"
          :cta_secondary="$t('common:book-now')"
          img_path='/photos/erica/1.jpg'
          :people=6
        />
        <PropertyComponent
          :title="$t('common:property-iris-title')"
          :text="$t('common:property-iris-text')"
          :cta_primary="$t('common:discover-more')"
          cta_link_primary="apartments/iris"
          :cta_secondary="$t('common:book-now')"
          img_path='/photos/iris/1.jpg'
          :people=2
        />
        <PropertyComponent
          :title="$t('common:property-rosa-title')"
          :text="$t('common:property-rosa-text')"
          :cta_primary="$t('common:discover-more')"
          cta_link_primary="apartments/rosa"
          :cta_secondary="$t('common:book-now')"
          img_path='/photos/rosa/1.jpg'
          :people=4
        />
        <PropertyComponent
          :title="$t('common:property-viola-title')"
          :text="$t('common:property-viola-text')"
          :cta_primary="$t('common:discover-more')"
          cta_link_primary="apartments/viola"
          :cta_secondary="$t('common:book-now')"
          img_path='/photos/viola/1.jpg'
          :people=6
        />


      </div>
    </div>
  </section>
  <section id="discover">
    <SectionComponent
      section_id="us"
      :header="$t('home:discover-property-header')"
      :title="$t('home:discover-property-title')"
      :body="$t('home:discover-property-body')"
      :cta="$t('home:discover-property-cta')"
      img="/photos/lecceto-villa.jpg"
      :light="true"
    />
    <SectionComponent
      section_id="us"
      :header="$t('home:discover-apartments-header')"
      :title="$t('home:discover-apartments-title')"
      :body="$t('home:discover-apartments-body')"
      :cta="$t('home:discover-apartments-cta')"
      img="/photos/lecceto-piscina.jpg"
    />
    <SectionComponent
      section_id="us"
      :header="$t('home:discover-nearby-header')"
      :title="$t('home:discover-nearby-title')"
      :body="$t('home:discover-nearby-body')"
      :cta="$t('home:discover-nearby-cta')"
      img="/photos/piombino.jpg"
      :light="true"
    />
    <SectionComponent
      section_id="us"
      :header="$t('home:discover-history-header')"
      :title="$t('home:discover-history-title')"
      :body="$t('home:discover-history-body')"
      :cta="$t('home:discover-history-cta')"
      img="/photos/campiglia.jpg"
    />
  </section>

  <!-- Testimonials section-->
  <section class="py-5 border-bottom bg-light" id="testimonials">
    <div class="container px-5 my-5 px-5">
      <div class="text-center mb-5">
        <h2 class="fw-bolder">{{ $t('home:testimonials-title') }}</h2>
        <p class="lead mb-0">{{ $t('home:testimonials-subtitle') }}</p>
      </div>
      <div class="row justify-content-center">
        <TestimonialComponent
          :signature="$t('home:testimonial-1-signature')"
          :text="$t('home:testimonial-1-text')"
        />
        <TestimonialComponent
          :signature="$t('home:testimonial-2-signature')"
          :text="$t('home:testimonial-2-text')"
        />
        <TestimonialComponent
          :signature="$t('home:testimonial-3-signature')"
          :text="$t('home:testimonial-3-text')"
        />
      </div>
    </div>
  </section>
  <section class="py-5 border-bottom" id="map">
  </section>
</template>
