<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
import PropertyComponent from '@/components/ApartmentPreviewComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<template>
  <HeaderComponent
    title="Casa del Lecceto"
    subtititle="La tua vacanza nella campagna toscana"
    cta_primary="Scopri di più"
    cta_secondary="Esplora"
  />
  <section class="py-5 border-bottom" id="apartments">
    <div class="container px-5 my-5 px-5">
      <div class="text-center mb-5">
        <h2 class="fw-bolder">Le nostre strutture</h2>
        <p class="lead mb-0">Scopri e prenota nelle nostre strutture</p>
      </div>
      <div class="row gy-4 justify-content-center">
        <PropertyComponent
          title="Trilocale Erica con piscina"
          text=""
          cta_primary="Scopri di più"
          cta_link_primary="apartments/erica"
          cta_secondary="Prenota"
          img_path='/photos/appartamenti/erica/camera.jpg'
          :people=6
        />
        <PropertyComponent
          title='Monolocale Iris con piscina'
          text=""
          cta_primary="Scopri di più"
          cta_link_primary="apartments/iris"
          cta_secondary="Prenota"
          img_path='/photos/appartamenti/iris/camera.jpg'
          :people=2
        />
        <PropertyComponent
          title='Quadrilocale Rosa con piscina'
          text=""
          cta_primary="Scopri di più"
          cta_link_primary="apartments/rosa"
          cta_secondary="Prenota"
          img_path='/photos/appartamenti/rosa/camera.jpg'
          :people=4
        />
        <PropertyComponent
          title='Quadrilocale Viola con piscina'
          text=""
          cta_primary="Scopri di più"
          cta_link_primary="apartments/viola"
          cta_secondary="Prenota"
          img_path='/photos/appartamenti/viola/camera.jpg'
          :people=6
        />
      </div>
    </div>
  </section>
  <section id="discover">
    <SectionComponent
      section_id="us"
      header="La proprietà"
      title="La tua vacanza nella campagna toscana"
      body="La residenza Casa del Lecceto nasce all'interno di una villa padronale ottocentesca, ristrutturata con arredi in stile toscano per dar vita ad un luogo unico di relax. Animali da cortile e cavalli completano l'accoglienza degli amici che vorranno trascorrere le loro vacanze in questa grande casa di campagna."
      cta="Prenota"
      img="/photos/lecceto-villa.jpg"
      :light="true"
    />
    <SectionComponent
      section_id="us"
      header="Gli appartamenti"
      title="Comodità e relax"
      body="Con tre grandi appartamenti, uno spazioso monolocale ed una piscina di 128mq a disposizione degli ospiti, Casa del Lecceto è la dimora ideale per una permanenza che sappia coniugare riposo ed escursione, mare e collina, comfort e contatto con la natura."
      cta="Prenota"
      img="/photos/lecceto-piscina.jpg"
    />
    <SectionComponent
      section_id="us"
      header="Nelle vicinanze"
      title="La costa degli etruschi"
      body="Situata a circa 1 km dal paese di Venturina Terme, la residenza dista pochi minuti in auto dalla Costa degli Etruschi, con il parco e il mare di Rimigliano, il golfo di Baratti e Populonia, Piombino e gli imbarchi per l'isola d'Elba."
      cta="Prenota"
      img="/photos/piombino.jpg"
      :light="true"
    />
    <SectionComponent
      section_id="us"
      header="Nelle vicinanze"
      title="Scopri il patrimonio storico e culturale"
      body="Nelle immediate vicinanze ci sono le Terme del Calidario e le Terme Valle del Sole. La posizione di Casa del Lecceto permette di raggiungere agevolmente anche le principali località storiche e turistiche della Toscana, dai vicini borghi di Campiglia Marittima e Suvereto alle cittadine di Volterra, Massa Marittima e San Gimignano fino alle città di Pisa, Siena e Firenze."
      cta="Prenota"
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
          signature="Delia, Luglio 2024"
          text="La tranquillità del luogo in mezzo agli ulivi pur essendo vicino a tutti i servizi , la gentilezza e la cordialità dei proprietari, l' appartamento funzionale e molto pulito e la piscina , gradita molto dai bambini."
        />
        <TestimonialComponent
          signature="- Marco, Agosto 2024"
          text="È una tipica e bellissima casa toscana, molto pulita e curata. La posizione stupenda, immersa nella natura e a due passi dal mare. Relax assicurato e piscina top!"
        />
        <TestimonialComponent
          signature="- Jessica, Ottobre 2024"
          text="Il casale ha un'ottima posizione e il sig. Sergio è stato molto accogliente. Letto molto comodo, abbiamo dormito benissimo e parcheggio davanti alla porta d'ingresso. La nostra cagnolina è stata ben accolta. Ci ritorneremo."
        />
      </div>
    </div>
  </section>
  <section class="py-5 border-bottom" id="map">
  </section>
</template>
