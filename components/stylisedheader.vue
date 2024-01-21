<template>
  <div>
    
    <div class="toggle" @click="toggleOpen">
      <UIcon name="i-fa6-solid:angles-down" dynamic />
</div>
    <div id="nav-bar" :class="{ 'is-open': isOpen }">
      <NuxtLink to="/" class="nav" :class="{ active: activeNav === 'home' }" @click="setActiveNav('home')">Accueil</NuxtLink>
      <NuxtLink to="/fondements" class="nav" :class="{ active: activeNav === 'search' }" @click="setActiveNav('search')">Nos fondements</NuxtLink>
      <NuxtLink to="/timeline" class="nav" :class="{ active: activeNav === 'following' }" @click="setActiveNav('following')">Historique du projet</NuxtLink>
      <NuxtLink to="/team" class="nav" :class="{ active: activeNav === 'settings' }" @click="setActiveNav('settings')">Notre équipe</NuxtLink>
      <NuxtLink to="/clientsProfiles" class="nav" :class="{ active: activeNav === 'settings' }" @click="setActiveNav('settings')">Nos usagers</NuxtLink>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      activeNav: 'home',
    };
  },
  computed: {
    iconName() {
      return this.isOpen ? 'i-fa6-solid:angles-up' : 'i-fa6-solid:angles-down';
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    setActiveNav(nav) {
      this.activeNav = nav;
    }
  }
}
  
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
}

.toggle {
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  margin-top: 0;
  width: 100px; /* Augmentation de la largeur */
  height: 50px; /* Réduction de la hauteur */
  align-items: center;
  border-radius:  0 0 50px 50px; /* Demi-rond arrondi vers le bas */
  background-color: #79f009;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}


#nav-bar {
  display: flex;
  justify-content: center;
  background-color: #79f009;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
}

#nav-bar.is-open {
  max-height: 200px; /* Adjust this value based on the total height of your menu items */
}

.nav {
  padding: 10px 15px;
  margin: 5px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.nav:hover, .nav.active {
  background-color: #12e647;
  color: rgb(20, 4, 241);
  font-weight: bold;
}

.content {
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 680px) {
  #nav-bar {
    flex-direction: column;
  }

  .nav {
    text-align: center;
    width: 100%;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}


</style>
    
