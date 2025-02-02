<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
import PropertyComponent from '@/components/PropertyComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<template>
  <HeaderComponent
    title="La Casa del lecceto"
    subtititle="La tua vacanza nella campagna toscana"
    cta_primary="Prenota"
    cta_secondary="Scopri"
  />
  <section id="discover"></section>
  <SectionComponent
    section_id="us"
    header="La proprietà"
    title="La tua vacanza nella campagna toscana"
    body="La residenza Casa del Lecceto nasce all'interno di una villa padronale ottocentesca, ristrutturata con arredi in stile toscano per dar vita ad un luogo unico di relax. Animali da cortile e cavalli completano l'accoglienza degli amici che vorranno trascorrere le loro vacanze in questa grande casa di campagna."
    cta="Prenota"
    img="/public/photos/lecceto-villa.jpg"
  />
  <SectionComponent
    section_id="us"
    header="Gli appartamenti"
    title="Comodità e relax"
    body="Con tre grandi appartamenti, uno spazioso monolocale ed una piscina di 128mq a disposizione degli ospiti, Casa del Lecceto è la dimora ideale per una permanenza che sappia coniugare riposo ed escursione, mare e collina, comfort e contatto con la natura."
    cta="Prenota"
    img="/public/photos/lecceto-piscina.jpg"
  />
  <SectionComponent
    section_id="us"
    header="Nelle vicinanze"
    title="La costa degli etruschi"
    body="Situata a circa 1 km dal paese di Venturina Terme, la residenza dista pochi minuti in auto dalla Costa degli Etruschi, con il parco e il mare di Rimigliano, il golfo di Baratti e Populonia, Piombino e gli imbarchi per l'isola d'Elba."
    cta="Prenota"
    img="/public/photos/piombino.jpg"
  />
  <SectionComponent
    section_id="us"
    header="Nelle vicinanze"
    title="Scopri il patrimonio storico e culturale"
    body="Nelle immediate vicinanze ci sono le Terme del Calidario e le Terme Valle del Sole. La posizione di Casa del Lecceto permette di raggiungere agevolmente anche le principali località storiche e turistiche della Toscana, dai vicini borghi di Campiglia Marittima e Suvereto alle cittadine di Volterra, Massa Marittima e San Gimignano fino alle città di Pisa, Siena e Firenze."
    cta="Prenota"
    img="/public/photos/campiglia.jpg"
  />
  <!-- Properties section-->
  <section class="py-5 border-bottom" id="apartments">
    <div class="container px-5 my-5 px-5">
      <div class="text-center mb-5">
        <h2 class="fw-bolder">Le nostre strutture</h2>
        <p class="lead mb-0">Scopri e prenota nelle nostre strutture</p>
      </div>
      <div class="row grid-1 justify-content-center">
        <div class="row">
          <PropertyComponent
            title="Trilocale ERICA 5+2 pax"
            text="Il trilocale Erica di 75mq, a piano terra, è composto da un'ampia cucina/soggiorno abitabile corredata di frigorifero, freezer, cucina, lavatrice e divano prontoletto matrimoniale. La spaziosa camera matrimoniale con terzo posto letto, la cameretta con due letti singoli; il bagno è con vasca, doccia e bidet."
            cta_primary="Scopri"
            cta_secondary="Prenota"
            img_path="photos/appartamenti/erica/camera.jpg"
          />
        </div>
      </div>
    </div>
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
          signature="Luca, Host di Torino"
          text="Affidarmi a Xenia SRL è stata la decisione migliore per la
                    gestione delle mie proprietà. Hanno curato ogni dettaglio,
                    dall’avviamento alla gestione completa, permettendomi di
                    risparmiare tempo e massimizzare i guadagni. Gli ospiti sono
                    sempre soddisfatti grazie alla loro impeccabile
                    comunicazione e supporto. Consiglio vivamente i loro
                    servizi!"
        />
        <TestimonialComponent
          signature="- Giulia, Host di Piombino"
          text="Prima di collaborare con Xenia SRL, gestire gli affitti
                    brevi era un impegno enorme. Ora posso finalmente rilassarmi
                    mentre loro si occupano di tutto: prenotazioni, pulizie e
                    assistenza agli ospiti. Ho notato un aumento significativo
                    delle recensioni positive e delle prenotazioni. Non potrei
                    essere più soddisfatta!"
        />
      </div>
    </div>
  </section>
</template>
