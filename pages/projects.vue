<template>
  <div class="wrapper" ref="el">
    <div class="sticky-buttons" :class="{ 'hidden-buttons': isHidden }">
      <div class="flex justify-center space-x-4 my-4 bg-white bg-opacity-20">
        <button v-for="pole in poles" :key="pole" @click="scrollToPole(pole)" :class="{ 'bg-scicpurple text-scicgreen': selectedPole === pole }" class="bg-scicgreen text-scicblue shadow px-6 py-2 rounded hover:bg-scicorange hover:text-scicblue transition-colors">
          {{ pole }}
        </button>
      </div>
    </div>

    <main class="main">
      <section v-for="(pole, index) in poles" :key="index" :id="poleId(pole)" :ref="el => (sections[pole] = el)" class="section">
        <figure class="image-container" :class="getHeroClass(pole)">
          <img :src="getHeroImage(pole)" :alt="pole" />
        </figure>
        <article class="content">
          <h2 class="section-title">{{ getHeroTitle(pole) }}</h2>
          <component :is="getComponentName(pole)" />
        </article>
      </section>
    </main>
    
    <button @click="scrollToTop" class="scroll-to-top fixed bottom-4 right-4 bg-scicgreen text-scicblue shadow p-4 rounded-full hover:bg-scicorange hover:text-scicblue transition-colors">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { usePoleStore } from '~/stores/querypoles';
import anime from 'animejs/lib/anime.es.js';
import Family from '@/components/family.vue';
import Knowledge from '@/components/knowledge.vue';
import Economy from '@/components/economy.vue';
import Health from '@/components/health.vue';
import Building from '@/components/building.vue';


const store = usePoleStore();
const poles = [
  'famille',
  '(ré)appropriation du savoir',
  'économie locale et circulaire',
  'santé bien être',
  'habitat solidaire'
];
const selectedPole = ref(store.selectedPole || poles[0]);
const sections = ref({});
const isHidden = ref(false);
let lastScrollTop = 0;
let scrollTimeout = null;

function poleId(pole) {
  return escape(pole.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase());
}

function getHeroImage(pole) {
  const images = {
    'famille': '/Amandine.png',
    '(ré)appropriation du savoir': '/Alexandre.png',
    'économie locale et circulaire': '/Caroline.png',
    'santé bien être': '/David.png',
    'habitat solidaire': '/Eric.png'
  };
  return images[pole];
}

function getHeroTitle(pole) {
  const titles = {
    'famille': 'La famille est un atout',
    '(ré)appropriation du savoir': '(Ré)apprendre pour mieux vivre',
    'économie locale et circulaire': 'Mieux consommer, moins gaspiller',
    'santé bien être': 'Se maintenir en santé',
    'habitat solidaire': 'Repenser l\'habitat'
  };
  return titles[pole];
}

function getComponentName(pole) {
  const components = {
    'famille': Family,
    '(ré)appropriation du savoir': Knowledge,
    'économie locale et circulaire': Economy,
    'santé bien être': Health,
    'habitat solidaire': Building
  };
  return components[pole];
}

function getHeroClass(pole) {
  const classes = {
    'famille': 'hero-amandine',
    '(ré)appropriation du savoir': 'hero-alexandre',
    'économie locale et circulaire': 'hero-caroline',
    'santé bien être': 'hero-david',
    'habitat solidaire': 'hero-eric'
  };
  return classes[pole];
}

function scrollToPole(pole) {
  const target = sections.value[pole];
  if (target) {
    anime({
      targets: 'html, body',
      scrollTop: target.offsetTop,
      duration: 800,
      easing: 'easeInOutQuad'
    });
    selectedPole.value = pole;
    store.setSelectedPole(pole);
  }
}

function scrollToTop() {
  anime({
    targets: 'html, body',
    scrollTop: 0,
    duration: 800,
    easing: 'easeInOutQuad'
  });
}

onMounted(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      if (!isHidden.value) {
        isHidden.value = true;
        anime({
          targets: '.sticky-buttons',
          translateY: -100,
          duration: 300,
          easing: 'easeInQuad'
        });
      }
    } else {
      if (isHidden.value) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isHidden.value = false;
          anime({
            targets: '.sticky-buttons',
            translateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
          });
        }, 2000);
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  store.$subscribe(() => {
    if (store.selectedPole) {
      selectedPole.value = store.selectedPole;
      scrollToPole(store.selectedPole);
    }
  });
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

.wrapper {
  margin-top: 140px;
}

.sticky-buttons {
  position: sticky;
  top: 60px;
  z-index: 1000;
  background: var(--main-color);
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.hidden-buttons {
  transform: translateY(-100%);
}

.page-title {
  text-align: center;
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

.content {
  position: relative;
  margin: -50vh auto 0;
  padding: var(--space);
  max-width: 90ch;
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
  box-shadow: 0 20px 40px -10px #000;
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

.image-container::before {
  filter: saturate(0);
  background: radial-gradient(closest-side, #222, #fff) 0px 0px / 0.75vmin 0.75vmin;
  background-blend-mode: multiply;
  filter: saturate(0) brightness(1.25) blur(0.5px) contrast(30);
}

.image-container::after {
  background: linear-gradient(45deg, #2b8c00, #f26612, #ffbf08, #bf87cc, #b0d9ff);
  mix-blend-mode: screen;
}

.image-container:hover::before,
.image-container:hover::after {
  opacity: 0;
}

.hero-amandine::before {
  --bg: url('/Amandine.png') 50% 50% / cover;
  background: var(--bg);
}

.hero-alexandre::before {
  --bg: url('/Alexandre.png') 50% 50% / cover;
  background: var(--bg);
}

.hero-caroline::before {
  --bg: url('/Caroline.png') 50% 50% / cover;
  background: var(--bg);
}

.hero-david::before {
  --bg: url('/David.png') 50% 50% / cover;
  background: var(--bg);
}

.hero-eric::before {
  --bg: url('/Eric.png') 50% 50% / cover;
  background: var(--bg);
}

.hero-alexandre::before {
  background: repeating-radial-gradient(circle at 75% 40%, #333 1px, #fff 1px, #fff 5px, #333 5px, #333 6px), var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(30);
}

.hero-alexandre::after {
  background: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
}

.hero-caroline::before {
  background: repeating-linear-gradient(to bottom, #000 1px, #fff 1px, #fff 5px, #000 5px, #000 6px), var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(40);
}

.hero-caroline::after {
  background: linear-gradient(45deg, #40e0d0 -25%, #ff8c00, #ff0080 125%);
}

.hero-david::before {
  background: repeating-linear-gradient(to bottom, #333 1px, #fff 1px, #fff 6px, #333 6px, #333 7px), repeating-linear-gradient(to right, #333 1px, #fff 1px, #fff 6px, #333 6px, #333 7px), var(--bg);
  filter: saturate(0) brightness(1.25) blur(0.75px) contrast(30);
}

.hero-david::after {
  background: linear-gradient(-45deg, #2bc0e4, #eaecc6);
}

.title1 {
  font-size: 1.5rem;
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
  font-size: 1.5rem;
  color: #f26612;
  font-weight: bold;
  font-style: italic;
  font-family: "Lora", serif;
}

.icons {
  font-size: 3.75rem;
  color: #2b8c00;
}

/* Styles pour le bouton de retour en haut de page */
.scroll-to-top {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: var(--main-color);
  color: #2b8c00;
  border: none;
  padding: 10px 20px;
  border-radius: 50%;
  font-size: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.scroll-to-top:hover {
  background-color: #f26612;
  color: #2b8c00;
}
</style>
