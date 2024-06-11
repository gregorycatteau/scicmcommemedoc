<template>
  <div class="wrapper">
    <div class="internalorganizer">
      <div class="textual">
        <h1 class="title1">M Comme Médoc</h1>
        <h2 class="subtitle">
          Une coopérative<br />
          <span class="wordwrapper">{{ currentWord }}</span> <br />engagée
        </h2>
        <Icon name="i-ic-baseline-arrow-downward" class="icons" dynamic />
      </div>
    </div>
    <main class="main">
      <section class="section">
        <figure class="image-container reveal">
          <img v-if="imagesLoaded" src="/Myriam.png" alt="Myriam" />
        </figure>
        <article class="content">
          <h2 class="section-title">C'est quoi une SCIC ?</h2>
          <p class="developpement">
            Une Société Coopérative d'Intérêt Collectif (SCIC) est une forme de coopérative qui permet à différents acteurs:<br />
            <ul class="listing2">
              <li class="listitem2">Salariés,</li>
              <li class="listitem2">Bénéficiaires,</li>
              <li class="listitem2">Utilisateurs,</li>
              <li class="listitem2">Volontaires,</li>
              <li class="listitem2">Collectivités locales,</li>
              <li class="listitem2">Ou toute personne physique ou morale</li>
            </ul>
            De se regrouper autour de <nuxt-link to="/projects" class="links">projets communs</nuxt-link> une finalité d'utilité sociale.
          </p>
          <p class="developpement">
            Caractérisée par sa <NuxtLink to="/gouvernance" class="links">gouvernance démocratique</NuxtLink>, "un associé, une voix", elle favorise une gestion participative où les décisions sont prises collectivement, indépendamment des parts de capital détenues par chacun.
          </p>
        </article>
      </section>
      <section class="section">
        <figure class="image-container">
          <img src="/Olivier.png" alt="Olivier" />
        </figure>
        <article class="content">
          <h2 class="section-title">Les principes coopératifs</h2>
          <p class="developpement">
            Être reconnue comme SCIC est une étape importante, mais s'engager pleinement envers les principes coopératifs est essentiel et cela englobe les aspects suivants :
          
          <ul class="listing2">
            <li class="listitem2">La valorisation de l'individu et son développement personnel,</li>
            <li class="listitem2">La solidarité et la coopération entre les membres,</li>
            <li class="listitem2">La responsabilité sociale et environnementale,</li>
            <li class="listitem2">Une gouvernance démocratique basée sur le principe "une personne = une voix", modulée par la formation de collèges électoraux,</li>
            <li class="listitem2">Une adhésion diversifiée centrée sur le bénéfice commun et l'utilité sociale, allant au-delà des intérêts individuels,</li>
            <li class="listitem2">L'autonomie de l'entreprise, son développement durable et sa transmission responsable à travers les générations de coopérateurs,</li>
            <li class="listitem2">La solidarité, la résilience et le respect du vivant comme valeurs fondamentales,</li>
            <li class="listitem2">L'engagement responsable dans un projet collectif,</li>
            <li class="listitem2">Le droit à l'innovation, à la créativité et à la prise d'initiative,</li>
            <li class="listitem2">La valorisation et la dignité du travail de chacun,</li>
            <li class="listitem2">Le droit à l'éducation et à la formation continue,</li>
            <li class="listitem2">Et bien évidemment le droit à la joie et à la bonne humeur.</li>
          </ul></p>
        </article>
      </section>
      <section class="section">
        <figure class="image-container">
          <img src="/Marc.png" alt="Marc" />
        </figure>
        <article class="content">
          <h2 class="section-title">M Comme Médoc est une SCIC SA dualiste</h2>
          <p class="developpement">
            Une SCIC SA dualiste, ou Société Coopérative d'Intérêt Collectif sous forme de Société Anonyme avec structure dualiste, est une forme juridique particulière de coopérative qui se distingue par son mode de gouvernance séparé en deux organes principaux : le conseil de surveillance et le directoire.
          </p>
          <p class="developpement">
            Dans cette structure, le directoire est chargé de la gestion quotidienne de la SCIC. Il est composé de membres nommés par le conseil de surveillance pour un mandat déterminé. Ces membres, souvent des professionnels de la gestion, ont la responsabilité d'implémenter les stratégies et les politiques définies par le conseil de surveillance, tout en assurant le bon fonctionnement opérationnel de la coopérative.
          </p>
        </article>
      </section>
      <section class="section">
        <figure class="image-container">
          <img src="/wallpaper3.png" alt="Wallpaper" />
        </figure>
        <article class="content">
          <h2 class="section-title">L'organisation des collèges</h2>
          <p class="developpement">
            La SCIC M Comme Médoc adopte une structure dualiste sous forme de société anonyme, qui se distingue par une gouvernance participative structurée autour de plusieurs collèges de vote. Ces collèges sont conçus pour refléter la diversité des parties prenantes et assurer une prise de décision équilibrée et démocratique. Voici un aperçu de cette structure organisée.
          </p>
          <Colleges v-if="imagesLoaded" />
        </article>
      </section>
    </main>
    <footer class="footer">Fin.</footer>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Colleges from '~/components/colleges.vue';

const words = ['socialement', 'solidairement', 'écologiquement', 'respectueusement'];
const currentWord = ref(words[0]);
let index = 0;
const imagesLoaded = ref(false);

function rotateWords() {
  index = (index + 1) % words.length;
  currentWord.value = words[index];
}

function checkImagesLoaded() {
  const images = document.querySelectorAll('img');
  let loadedCount = 0;
  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          imagesLoaded.value = true;
        }
      };
    }
  });
  if (loadedCount === images.length) {
    imagesLoaded.value = true;
  }
}

onMounted(() => {
  setInterval(rotateWords, 2000);
  checkImagesLoaded();
});
</script>



<style scoped>
:root {
  --scale: 0.1;
  --space: 8vmin;
  --font-primary: 'Lato', sans-serif;
  --font-heading: 'Playfair Display', serif;
  --main-color: #2b8c00;
}

@media (prefers-reduced-motion) {
  :root {
    --scale: 0;
  }
}

* {
  box-sizing: border-box;
}

body {
  color: hsl(0, 0%, 95%);
  background-color: hsl(5, 15%, 5%);
  font-size: clamp(1.2rem, 5vw, 1.5rem);
  font-family: var(--font-primary);
  line-height: 1.6;
}

a {
  color: hsl(65, 80%, 60%);
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

.wrapper {
  margin-top: 60px;
}

.page-title {
  text-align: center;
}

.page-title::after {
  content: '↓';
  display: block;
  font-size: 2em;
  opacity: 0;
  transform: translateY(-24px);
  animation: fadein 800ms 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.header,
.footer {
  display: grid;
  place-items: center;
  height: 100vh;
}

.section {
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}

.section > * {
  transform-origin: center top;
  transform: scaleY(calc(1 / (1 - var(--scale))));
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: bold;
  line-height: 1.125;
  background-color: var(--main-color);
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
}

.byline {
  display: block;
  font-size: 0.6em;
  margin: calc(var(--space) / 1.35) 0;
}

.content {
  @apply rounded-2xl;
  position: relative;
  margin: -50vh auto 0;
  padding: var(--space);
  max-width: 95ch;
  width: calc(100% - var(--space));
  background: hsla(5, 15%, 5%, 0.9);
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}

.content > * + * {
  margin-top: 2rem;
}

.image-container {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
  transition: opacity 0.25s ease-in-out;
}

.image-container img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container::before,
.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.25s ease-in-out;
}

.image-container:nth-of-type(1) {
  --bg: url("/Myriam.png") 50% 50% / cover;
}

.image-container:nth-of-type(2) {
  --bg: url("/Olivier.png") 50% 50% / cover;
}

.image-container:nth-of-type(3) {
  --bg: url("/Marc.png") 50% 50% / cover;
}

.image-container:nth-of-type(4) {
  --bg: url("/wallpaper3.png") 50% 50% / cover;
}

.image-container::before {
  background: var(--bg),
    radial-gradient(closest-side, #222, #fff) 0px 0px / 0.75vmin 0.75vmin;
  background-blend-mode: multiply;
  filter: saturate(0) brightness(1.25) blur(0.5px) contrast(30);
}

.image-container:nth-of-type(2)::before {
  background: repeating-radial-gradient(
      circle at 75% 40%,
      #333 1px,
      #fff 1px,
      #fff 5px,
      #333 5px,
      #333 6px
    ),
    var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(30);
}

.image-container:nth-of-type(3)::before {
  background: repeating-linear-gradient(
      to bottom,
      #000 1px,
      #fff 1px,
      #fff 5px,
      #000 5px,
      #000 6px
    ),
    var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(40);
}

.image-container:nth-of-type(4)::before {
  background: repeating-linear-gradient(
      to bottom,
      #333 1px,
      #fff 1px,
      #fff 6px,
      #333 6px,
      #333 7px
    ),
    repeating-linear-gradient(
      to right,
      #333 1px,
      #fff 1px,
      #fff 6px,
      #333 6px,
      #333 7px
    ),
    var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(30);
}

.image-container::after {
  background: linear-gradient(43deg, #2b8c00 0%, #f26612 46%, #ffbf08 100%);
  mix-blend-mode: screen;
}

.image-container:nth-of-type(2)::after {
  background: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
}

.image-container:nth-of-type(3)::after {
  background: linear-gradient(45deg, #40e0d0 -25%, #ff8c00, #ff0080 125%);
}

.image-container:nth-of-type(4)::after {
  background: linear-gradient(-45deg, #2bc0e4, #eaecc6);
}

.image-container:hover::before,
.image-container:hover::after {
  opacity: 0;
}

@keyframes fadein {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.listing2 {
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  padding: 16px;
}

.listitem2 {
  font-size: 0.875rem;
  text-align: start;
  color: #fafcfa;
  margin-left: 16px;
  font-family: "Lora", serif;
}

.developpement {
  
  margin-top: 16px;
  margin-left: 10px;
  margin-right: 10px;

  text-align: justify;
  font-size: 1.125rem;
  text-indent: 2rem;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  color: #2b8c00;
  font-family: "Lora", serif;
}

.links {
  color: #f26612;
  font-family: "Lora", serif;
}

.internalorganizer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 8rem;
  gap: 16px;
  padding: 16px;
  text-align: center;
  background-color: var(--main-color);
  color: #fff;
}

.textual {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.heroimage {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
}

.title1 {
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  color: #2b8c00;
  font-family: "Permanent Marker", cursive;
}

.subtitle {
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
  color: #2b8c00;
  font-family: "Playfair Display", serif;
}

.wordwrapper {
  font-size: 4.5rem;
  color: #f26612;
  font-weight: bold;
  font-style: italic;
  font-family: "Lora", serif;
}

.icons {
  font-size: 3.75rem;
  color: #2b8c00;
}
</style>

