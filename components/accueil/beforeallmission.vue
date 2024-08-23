

<template>

  <UCard class="before-all-mission">
    <template #header>
      <h1 class="maintitle">M Comme Médoc est pour que vous ne soyez plus seuls pour faire face à :</h1>
    </template>
    <div class="separator">
    <section class="sectionpair bg-scicgreen p-4 bg-opacity-35 rounded-2xl shadow-2xl">
      <div class="text-section">
        <h2 class="section-title">Un monde devenu volatile</h2>
        <h3 class="section-subtitle">Quand préparer un budget devient un défi</h3>
        <p class="section-description">Dans un monde où les prix fluctuent inopinément et plutôt spontanément vers le haut, caractérisé par l'angoisse d'une ménagère face à son budget, et où les entrepreneurs voient leurs plans bouleversés par des crises imprévues, nous pensons qu'il devient utile de raisonner différemment.</p>
        <div class="buttoncentring">
          <button @click="govolatility" class="button">En savoir plus</button>
        </div>
      </div>
      <img src="/volatilite.png" alt="Illustration of volatility and uncertainty" class="image-section">
    </section>

    <section class="sectionunpair flex flex-col md:flex-row-reverse bg-scicorange p-4 bg-opacity-35 rounded-2xl shadow-2xl ">
      <div class="text-section">
        <h2 class="section-title">Un monde devenu complexe</h2>
        <h3 class="section-subtitle">Et si on y réfléchissait ensemble ?</h3>
        <p class="section-description">Vivre ne devrait pas être un parcours du combattant ! Pour quelles raisons devrions nous choisir de subir la complexité du monde alors que nous pouvons au contraire nous unir pour simplifier nos quotidiens ? </p>
        <div class="buttoncentring">
          <button @click="gocomplexity" class="button">En savoir plus</button>
        </div>
      </div>
      <img src="/complexite.png" alt="Illustration of administrative complexity" class="image-section">
      
    </section>

    <section class="sectionpair flex flex-col md:flex-row bg-scicgreen p-4 bg-opacity-35 rounded-2xl shadow-2xl">
      <div class="text-section">
        <h2 class="section-title">Un monde devenu ambigu</h2>
        <h3 class="section-subtitle">Ecologie ou Egologie ? </h3>
        <p class="section-description">Et si la solution aux problèmes de cohérence écologique venaient d'un cohésion entre chacun d'entre nous ? Et si nous reprenions collectivement notre destinée en main ? Et si nous honorions ensemble nos responsabilités pour faire de notre territoire une terre de paix et de prospérité vivante et harmonieuse ? </p>
        <div class="buttoncentring">
          <button @click="goambiguity" class="button">En savoir plus</button>
        </div>
      </div>
      <img src="/ambiguite.png" alt="Illustration of ecological ambiguity" class="image-section">
    </section>

    <section class="sectionunpair flex flex-col md:flex-row-reverse bg-scicorange p-4 bg-opacity-35 rounded-2xl shadow-2xl">
      <div class="text-section">
        <h2 class="section-title">Un besoin urgent de Résilience</h2>
        <h3 class="section-subtitle">Développer des Stratégies Adaptatives</h3>
        <p class="section-description">Qui construit une forteresse défensive mourra seul. Qui développe une communauté fermée s'exclut. Qui pense au bien commun comme la valeur ajoutée de son épanouissement personne vit en harmonie. Ensemble nous pouvons trouver des solutions adaptatives et repenser notre vivre ensemble. </p>
        <div class="buttoncentring">
          <button @click="goresilience" class="button">En savoir plus</button>
        </div>
      </div>
      <img src="/resilience2.png" alt="Illustration of resilience" class="image-section">
    </section>

    <section class="mission-section">
    
      <div class="mission-content">
        <h2 class="mission-section-title">Notre Mission chez M Comme Médoc</h2>
        <h3 class="mission-section-subtitle">Identifier et Développer des Réponses Innovantes</h3>
        <p class="mission-section-description">« La mission de M Comme Médoc consiste à identifier et développer des réponses innovantes aux défis écologiques, économiques et sociaux de notre territoire. </p>
        <p class="mission-section-description">En tant que laboratoire vivant, nous nous engageons à expérimenter et appliquer de manière collaborative des stratégies fondées sur la résilience et la solidarité, visant à construire un environnement plus durable et harmonieux. » </p>
      </div>
    </section>
    </div>
  <template #footer>
      <button @click="goBack" class="button">Revenir en arrière</button>
    </template>
    </UCard>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function govolatility() {
  router.push('/blog/volatility');
}

function gocomplexity() {
  router.push('/blog/complexity');
}

function goambiguity() {
  router.push('/blog/ambiguity');
}

function goresilience() {
  router.push('/blog/sustainability');
}

function goBack() {
  router.push('/');
}
</script>

<style scoped>
.before-all-mission {
  @apply text-scicgreen bg-white bg-opacity-50 flex flex-col items-center py-20 px-4 gap-8 w-screen m-auto rounded-xl shadow-lg;
}
.maintitle {
  @apply text-2xl font-bold text-scicgreen mb-4 font-bold;
  font-family: 'Playfair Display', serif;
}
.separator {
  @apply w-full flex flex-col items-center gap-8;
}
.section {
  @apply flex flex-col md:flex-row items-center gap-8 max-w-7xl;
}
.sectionpair {
  @apply flex flex-col md:flex-row items-center gap-8 max-w-7xl;
}
.sectionunpair {
  @apply flex flex-col md:flex-row-reverse items-center gap-8 max-w-7xl;
}
.text-section {
  @apply flex-1 p-4 text-slate-800;
}

.image-section {
  @apply w-full md:w-1/2 lg:w-1/3 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105;
}

.mission-section {
  @apply relative mt-10 p-10 flex flex-col items-center text-center text-white bg-gradient-to-r from-scicgreen to-scicblue rounded-xl;
}

.mission-background {
  @apply absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-60;
}

.mission-content {
  @apply relative z-10 p-4;
}

.section-title, .mission-section .section-title {
  @apply text-4xl mb-6 font-bold text-center;
  font-family: 'Playfair Display', serif;
}

.section-subtitle {
  @apply text-2xl mb-4 font-semibold text-center;
  font-family: 'Lora', serif;
}

.section-description {
  @apply mb-4 text-justify indent-8 text-slate-900;
  font-family: 'Montserrat', sans-serif;
  @apply text-lg text-opacity-90;
}

.section-description {
  @apply text-slate-800;
  font-family: 'Lora', serif;
}
.buttoncentring {
  @apply flex justify-center items-center;
}
.button {
  @apply bg-scicgreen text-scicblue rounded-lg p-4 hover:bg-scicorange hover:text-white mb-10;
  font-family: 'Lora', serif;
}
.mission-section {
  @apply w-[95%] m-auto rounded-3xl shadow-md ;
  background-image: url('/mission2.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.mission-content {
  @apply bg-scicgreen bg-opacity-70 p-8 rounded-xl shadow-lg z-10;
}
.mission-section-title {
  @apply text-4xl font-bold text-scicyellow mb-4;
  font-family: 'Playfair Display', serif;
}
.mission-section-subtitle {
  @apply text-2xl font-semibold text-scicblue mb-4;
  font-family: 'Lora', serif;
}
.mission-section-description {
  @apply text-scicgreen text-justify indent-8 text-xl bg-scicblue bg-opacity-70 p-4 rounded-lg font-extrabold;
  font-family: 'Montserrat', sans-serif;
  
}

</style>