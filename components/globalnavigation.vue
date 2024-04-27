<template>
  <nav class="mainwrapper">
    <div class="secondwrapper">
      <!-- Logo à gauche -->
      <NuxtLink to="/" class="logo">
        <span class="lettering">M</span> Comme Médoc
      </NuxtLink>

      <!-- Menu horizontal pour ordinateur -->
      <div class="menuwrapper">
        <div class="nav-links">
          <div v-for="link in links.slice(0, 5)" :key="link.label" class="nav-link">
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
      <button @click="toggleMenu" class="right-4 button toggler md:hidden">
        <UIcon name="i-ic:baseline-menu" class="icons" dynamic/>
      </button>
      <div v-if="isMenuOpen" class="mobile-nav">
        <div v-for="link in links" :key="link.label" class="mobile-link">
          <NuxtLink :to="link.to" class="link" @click="closeMenu">
            {{ link.label }}
            <UIcon :name="link.icon" class="icon" dynamic/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>






<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

// Utilisation de 'ref' pour le contrôle de l'état du menu mobile
const isMenuOpen = ref(false);

// Obtention de l'objet 'route' pour éventuellement utiliser des propriétés de la route dans les conditions ou la logique du menu
const route = useRoute();

// Définition des liens à utiliser dans les menus horizontal et vertical
const links = [
  {
    label: 'Découvrir',
    to: '/discovery',
    icon: 'i-material-symbols-add-location-alt'
  },
  {
    label: 'Fondations',
    to: '/fondements',
    icon: 'i-gravity-ui-house'
  },
  {
    label: 'Historique',
    to: '/timeline',
    icon: 'i-material-symbols-timer'
  },
  {
    label: 'Projets',
    to: '/projects',
    icon: 'i-material-symbols-360'
  },
  {
    label: 'Blog',
    to: '/listing',
    icon: 'i-lucide-newspaper'
  },
  {
    label: 'S\'impliquer',
    to: '/implication',
    icon: 'i-material-symbols-groups-2-outline'
  }
];

// Fonction pour basculer l'état ouvert/fermé du menu mobile

</script>


<style scoped>
.mainwrapper {
  @apply bg-scicgreen fixed top-0 left-0 right-0 z-50 shadow-md;
  height: 4rem; /* Hauteur fixe pour un look plus épuré */
}

.secondwrapper {
  @apply max-w-7xl mx-auto flex items-center justify-between px-4 h-full;
  @apply md:flex-row flex-col;
}

.logo {
  @apply fixed text-white text-3xl font-semibold flex items-center gap-2;
  font-family: 'Permanent Marker', cursive;
}

.lettering {
  @apply text-scicorange;
}

.menuwrapper {
  @apply hidden md:flex md:flex-1 md:items-center md:justify-between;
}

.nav-links {
  @apply flex justify-center flex-1;
}

.nav-link {
  @apply mx-2;
}

.link {
  @apply text-scicblue hover:text-scicyellow transition-colors duration-300;
}

.implication-link {
  @apply bg-scicorange text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300;
  @apply hover:bg-scicpurple hover:shadow-xl text-lg;
}

.button {
  @apply fixed text-white bg-scicorange hover:bg-scicblue hover:text-scicgreen focus:ring-4 focus:outline-none focus:ring-scicblue font-medium rounded-lg text-sm px-4 py-2 text-center;
}

.toggler {
  @apply md:hidden;
}

.icons {
  @apply w-6 h-6 fill-current;
}

.icon {
  @apply ml-2 w-4 h-4 text-scicblue;
}

.mobile-nav {
  @apply flex flex-col items-center w-full bg-scicgreen top-16 left-0 ;
  @apply pt-16; /* Ajoute un padding en haut pour ne pas chevaucher l'en-tête */
}

.mobile-link {
  @apply p-2 w-full text-center; /* Ajoute une largeur pleine et centre le texte pour les liens mobiles */
}
.logo {
  @apply fixed left-4 text-white text-3xl font-semibold flex items-center gap-2;
  font-family: 'Permanent Marker', cursive;
}
</style>
