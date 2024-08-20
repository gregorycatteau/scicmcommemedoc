<template>
  <main>
    <section
      v-for="(pole, index) in poles"
      :key="index"
      :id="poleId(pole)"
      :ref="(el) => (sections[pole] = el)"
      class="section"
    >
      <figure class="image-container" :class="getHeroClass(pole)">
        <img
          :src="getHeroImage(pole)"
          :alt="pole"
          class="image-container-image"
        />
      </figure>
      <article class="content">
        <h2 class="section-title">{{ getHeroTitle(pole) }}</h2>
        <component :is="getComponentName(pole)" />
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePoleStore } from "~/stores/querypoles";
import Family from "~/components/projects/familly/family.vue";
import Knowledge from "~/components/projects/knowing/knowledge.vue";
import Economy from "~/components/projects/economy/economy.vue";
import Health from "~/components/projects/health/health.vue";
import Building from "~/components/projects/building/building.vue";
definePageMeta({
  layout: "projectslayout",
});
const store = usePoleStore();
const poles = [
  "famille",
  "(ré)appropriation du savoir",
  "économie locale et circulaire",
  "santé bien être",
  "habitat solidaire",
];
const sections = ref({});
const selectedPole = ref(store.selectedPole || poles[0]);

function poleId(pole) {
  return pole.replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase();
}

function getHeroImage(pole) {
  const images = {
    famille: "/Amandine.png",
    "(ré)appropriation du savoir": "/Alexandre.png",
    "économie locale et circulaire": "/Caroline.png",
    "santé bien être": "/David.png",
    "habitat solidaire": "/Eric.png",
  };
  return images[pole];
}

function getHeroTitle(pole) {
  const titles = {
    famille: "La famille est un atout",
    "(ré)appropriation du savoir": "(Ré)apprendre pour mieux vivre",
    "économie locale et circulaire": "Mieux consommer, moins gaspiller",
    "santé bien être": "Se maintenir en santé",
    "habitat solidaire": "Repenser l'habitat",
  };
  return titles[pole];
}

function getComponentName(pole) {
  const components = {
    famille: Family,
    "(ré)appropriation du savoir": Knowledge,
    "économie locale et circulaire": Economy,
    "santé bien être": Health,
    "habitat solidaire": Building,
  };
  return components[pole];
}

function getHeroClass(pole) {
  const classes = {
    famille: "hero-amandine",
    "(ré)appropriation du savoir": "hero-alexandre",
    "économie locale et circulaire": "hero-caroline",
    "santé bien être": "hero-david",
    "habitat solidaire": "hero-eric",
  };
  return classes[pole];
}

onMounted(() => {
  store.$subscribe(() => {
    if (store.selectedPole) {
      selectedPole.value = store.selectedPole;
    }
  });
});
</script>

<script>
export default {
  layout: "projectslayout",
};
</script>

<style scoped>
.section {
  margin-top: 140px;
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
  display: flex;
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

.section-title {
  font-family: "Playfair Display", serif;
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
  border-radius: 2rem;
  max-width: 135ch;
  width: calc(100% - var(--space));
  background: hsla(128, 87%, 30%, 0.8);
  transform-origin: center top;
  transform: scaleY(calc(1 - var(--scale)));
}

.content > * + * {
  margin-top: 2rem;
}

.hero-amandine::before {
  --bg: url("/Amandine.png") 50% 50% / cover;
  background: var(--bg);
}

.hero-alexandre::before {
  --bg: url("/Alexandre.png") 50% 50% / cover;
  background: var(--bg);
}

.hero-caroline::before {
  --bg: url("/Caroline.png") 50% 50% / cover;
  background: var(--bg);
}

.hero-david::before {
  --bg: url("/David.png") 50% 50% / cover;
  background: var(--bg);
}

.hero-eric::before {
  --bg: url("/Eric.png") 50% 50% / cover;
  background: var(--bg);
}

/* Add necessary styles for hero classes */
.hero-amandine,
.hero-alexandre,
.hero-caroline,
.hero-david,
.hero-eric {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
