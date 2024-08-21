<template>
  <nav :class="['mainwrapper', { 'hidden-nav': isHidden }]">
    <div class="secondwrapper">
      <!-- Logo à gauche -->
      <NuxtLink to="/" class="logo">
        <span class="lettering">M</span> Comme Médoc
      </NuxtLink>

      <!-- Menu horizontal pour ordinateur -->
      <div class="menuwrapper">
        <div class="nav-links">
          <div v-for="(link, index) in links.slice(0, 5)" :key="link.label" class="nav-link" :class="`link-${index}`">
            <NuxtLink :to="link.to" class="link">
              {{ link.label }}
              <UIcon :name="link.icon" class="icon" dynamic/>
            </NuxtLink>
          </div>
        </div>
        <!-- Call to action à droite -->
        <NuxtLink :to="links[5].to" class="implication-link">
          {{ links[5].label }}
        </NuxtLink>
      </div>

      <!-- Toggle button and vertical menu for mobile -->
      <button @click="toggleMenu" class="buttontoggler">
        <UIcon name="i-ic:baseline-menu" class="icons" dynamic/>
      </button>
      <div v-if="isMenuOpen" class="mobile-nav">
        <div v-for="link in links" :key="link.label" class="mobile-link">
          <NuxtLink :to="link.to" class="link" @click="closeMenu">
            {{ link.label }}
            <UIcon :name="link.icon" class="hamburgericon" dynamic/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const isHidden = ref(false);
let lastScrollTop = 0;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

const route = useRoute();
const { $anime } = useNuxtApp();

const links = [
  { label: 'Découvrir', to: '/discovery', icon: 'i-material-symbols-add-location-alt' },
  { label: 'Fondations', to: '/fondements', icon: 'i-gravity-ui-house' },
  { label: 'Historique', to: '/timeline', icon: 'i-material-symbols-timer' },
  { label: 'Projets', to: '/projects', icon: 'i-material-symbols-360' },
  { label: 'Blog', to: '/listing', icon: 'i-lucide-newspaper' },
  { label: 'S\'impliquer', to: '/implication', icon: 'i-material-symbols-groups-2-outline' }
];

onMounted(() => {
  links.slice(0, 5).forEach((link, index) => {
    $anime({
      targets: `.link-${index} .link`,
      translateY: [-50, 0],
      opacity: [0, 1],
      delay: index * 100,
      duration: 500,
      easing: 'easeOutExpo'
    });
  });
  $anime({
    targets: '.implication-link',
    translateX: [50, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'easeOutExpo'
  });

  // Ajouter l'événement de scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      if (!isHidden.value) {
        isHidden.value = true;
        $anime({
          targets: '.mainwrapper',
          translateY: -100,
          duration: 300,
          easing: 'easeInQuad'
        });
      }
    } else {
      if (isHidden.value) {
        isHidden.value = false;
        $anime({
          targets: '.mainwrapper',
          translateY: 0,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style scoped>
.mainwrapper {
  @apply bg-scicgreen bg-opacity-40 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out;
  height: 4rem; /* Hauteur fixe pour un look plus épuré */
}

.hidden-nav {
  transform: translateY(-100%);
}

.secondwrapper {
  @apply flex justify-between items-center h-full max-w-7xl mx-auto px-4;
}

.logo {
  @apply text-white text-3xl font-semibold flex items-center gap-2;
  font-family: 'Permanent Marker', cursive;
}

.lettering {
  @apply text-scicorange hover:text-white;
}

.menuwrapper {
  @apply hidden md:flex md:items-center;
}

.nav-links {
  @apply flex space-x-6;
}

.nav-link {
  @apply relative;
}

.link {
  @apply bg-scicgreen p-4 rounded-2xl text-scicblue hover:text-scicyellow transition-colors duration-300;
}

.icon {
  @apply ml-2 w-6 h-6 text-scicblue bg-scicorange p-1 rounded-full;
}

.implication-link {
  @apply bg-scicorange text-white py-2 ml-2 px-4 rounded-full shadow-lg transition-all duration-300;
  @apply hover:bg-scicpurple hover:shadow-xl text-lg;
}

.buttontoggler {
  @apply md:hidden flex items-center justify-center p-2 rounded-md bg-scicorange;
}

.icons {
  @apply w-10 h-10 fill-current;
}

.mobile-nav {
  @apply flex flex-col items-center w-screen bg-scicgreen pt-16;
}

.mobile-link {
  @apply w-10/12 text-center text-3xl ring-1 ring-scicblue hover:bg-scicpurple hover:text-scicgreen my-4 p-4 rounded-xl shadow-xl;
  font-family: 'Playfair Display', serif;
}
</style>
