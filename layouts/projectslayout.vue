<template>
  <div>
    <header class="heading">
      <ProjectsNavbar />
    </header>

    <main class="main">
      <slot />
    </main>

    <footer>
      <FooterComponent />
    </footer>

    <button @click="scrollToTop" class="scroll-to-top fixed bottom-4 right-4 bg-scicgreen text-scicblue shadow p-4 rounded-full hover:bg-scicorange hover:text-scicblue transition-colors">
      ↑
    </button>
  </div>
</template>

<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import ProjectsNavbar from '~/components/projects/navigation/projectsnavbar.vue';
import FooterComponent from '~/components/footercomponent.vue';
import anime from 'animejs/lib/anime.es.js';

const isHidden = ref(false);
let lastScrollTop = 0;
let scrollTimeout = null;

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
          targets: '.navigation-container',
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
            targets: '.navigation-container',
            translateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
          });
        }, 1500);
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style scoped>
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
