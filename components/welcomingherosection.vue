<template>
  <UContainer :class="['maincontainer']" :style="containerStyle">
  
    <div v-if="!isMethodologyOpen">
      <div :class="{ 'blur-content': isContentBlurred }">
    <div class="hero">
      <h1 class="title">Bienvenue sur le Site communautaire <br> <span class="spanner"><UTooltip text="Société Coopérative d'Intérêt Collectif">SCIC</UTooltip></span> <span class="pusher">M Comme Médoc</span></h1>
      <h2 class="subtitle">Pionnier de la Durabilité et de l'Innovation Sociale</h2>
      <p class="paragraphe">Bienvenue sur le site dédié au projet innovant de la SCIC M Comme Médoc. <br>Ici, nous vous invitons à explorer notre vision ambitieuse d'une coopérative d'intérêt collectif axée sur la durabilité, <br>l'innovation sociale et le développement communautaire. <br>Ce site est conçu pour vous guider à travers les différentes facettes de notre initiative <br> et vous encourager à participer activement à sa réalisation.</p>
      </div>
      
  </div>
  <div class="buttonalign">
      <UButton class="button" color="white" variant="ghost" @click="openMethodology" @mouseover="hoverButton" @mouseleave="leaveButton">En savoir plus sur la méthodologie retenue pour la présentation du projet</UButton>
    </div>
  </div>
<div v-else class="hero2">
  <h1 class="title">Notre Méthodologie : <br>Une Approche Rigoureuse pour <br>le Projet SCIC M Comme Médoc</h1>
      <h2 class="subtitle">Introduction :</h2>
      <p class="paragraphe">Lors de la conception et du développement du projet SCIC M Comme Médoc, nous avons adopté une méthodologie rigoureuse et méthodique. 
        <br> Cette approche garantit que chaque aspect du projet est soigneusement planifié et mis en œuvre, <br>reflétant nos valeurs centrales de durabilité, d'inclusion et d'innovation.</p>
      <h2 class="subtitle">Analyse des Besoins du Territoire :</h2>
      <p class="paragraphe">Au cœur de notre méthodologie se trouve une analyse détaillée des besoins spécifiques de notre territoire. 
        <br> Cette étape cruciale nous a permis de comprendre les défis locaux, tant au niveau social qu'environnemental, et d'identifier les opportunités uniques pour notre coopérative. 
        <br> En nous appuyant sur des données réelles et des études de terrain, nous avons pu cartographier les besoins essentiels de notre communauté <br> et les intégrer dans la conception de notre projet.</p>
      <h2 class="subtitle">Utilisation des Personas :</h2>
      <p class="paragraphe">Pour mieux comprendre les besoins de notre communauté, nous avons créé des personas. 
        <br> Ces profils fictifs représentent les différents types de personnes qui pourraient bénéficier de notre projet. 
        <br> En nous mettant à la place de ces personas, nous avons pu identifier les services et les produits qui répondent le mieux à leurs besoins. 
        <br> Cette approche nous a permis de concevoir un projet qui répond aux besoins de notre communauté et qui est adapté à ses besoins.</p>
       <h2 class="subtitle">Intégration dans le Business Plan :</h2>
       <p class="paragraphe">Cette méthodologie n'est pas seulement un outil de planification ; elle est intégrée dans le business plan global de la SCIC M Comme Médoc. 
        <br>En alignant nos analyses et nos personas avec nos objectifs stratégiques, nous garantissons que notre coopérative <br> est non seulement viable économiquement, mais aussi profondément ancrée dans les besoins réels de notre communauté.</p> 
        <h2 class="subtitle">Présentation sur le Site :</h2>
        <p class="paragraphe">Pour partager cette méthodologie avec nos visiteurs, nous avons conçu notre site web pour refléter cette approche. 
          <br>Chaque section du site présente différents aspects du projet SCIC M Comme Médoc, illustrant comment nos analyses et nos personas ont façonné notre vision et nos actions. 
          <br> Nous invitons nos visiteurs à explorer ces sections pour comprendre en profondeur comment le projet a été conçu et comment il évoluera.</p>
          <UButton class="button-back" @click="closeMethodology">Revenir au sommaire</UButton>
</div>


</UContainer >
</template>

<script>
export default {
  name: 'WelcomingHeroSection',
  data() {
    return {
      isMethodologyOpen: false,
      isContentBlurred: false,
    };
  },
  computed: {
    containerStyle() {
      // Changez ces valeurs en fonction de vos besoins spécifiques
      return this.isMethodologyOpen ? { minHeight: '1600px' } : { minHeight: '850px' };
    }
  },
  methods: {
    openMethodology() {
      this.isMethodologyOpen = true;
      this.isContentBlurred = false;
    },
    closeMethodology() {
      this.isMethodologyOpen = false;
    },
    hoverButton() {
      if (!this.isMethodologyOpen) {
        this.isContentBlurred = true;
      }
    },
    leaveButton() {
      if (!this.isMethodologyOpen) {
        this.isContentBlurred = false;
      }
    }
  }
}
</script>



<style scoped>
.hero {
  @apply flex flex-col items-center justify-center h-full w-full relative p-10;
  
  z-index: 1;
  overflow: hidden;
  animation: fadeInUp 1s ease;
}

.maincontainer {
  @apply flex flex-col items-center justify-center rounded-3xl h-[650px] max-w-full m-5;
  background-image: url('/wallpaper12.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.maincontainer:hover .blur-content {
  filter: blur(22px) brightness(1.5);
}

.title {
  @apply text-6xl text-center text-slate-700 font-bold m-5;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  animation-delay: 1s;
}

.subtitle {
  @apply text-4xl text-center text-gray-900 font-bold m-5;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  animation-delay: 1.2s;
}

.paragraphe {
  @apply text-xl text-center text-gray-900 font-bold m-5;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  animation-delay: 1.4s;
}

.spanner {
  @apply text-8xl text-center text-[#1e6429] font-extrabold italic m-5;
}

.pusher {
  @apply text-6xl text-center text-lime-800 font-bold m-5;
}
.buttonalign {
  @apply flex w-full items-center justify-center;
}
.button {
  @apply text-xl items-center justify-center  text-lime-300 font-bold m-5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 1s ease forwards;
  animation-delay: 5s; 
  opacity: 0;

  /* Effet Glass */
  background: rgba(255, 255, 255, 0.2); /* Arrière-plan semi-transparent */
  backdrop-filter: blur(10px); /* Flou de l'arrière-plan */
  border-radius: 10px; /* Bords arrondis */
  padding: 10px 20px; /* Ajustez selon vos besoins */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordure légère */
}
.button-back {
  @apply text-xl items-center justify-center  text-lime-300 font-bold m-5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 1s ease forwards;
  animation-delay: 5s; 
  opacity: 0;

  /* Effet Glass */
  background: rgba(255, 255, 255, 0.2); /* Arrière-plan semi-transparent */
  backdrop-filter: blur(10px); /* Flou de l'arrière-plan */
  border-radius: 10px; /* Bords arrondis */
  padding: 10px 20px; /* Ajustez selon vos besoins */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordure légère */
}

.content { 
  transition: filter 0.3s ease;
}

.button:hover {
  transform: scale(1.8);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.button-back:hover {
  transform: scale(1.8);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Parallax effect */
.maincontainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/wallpaper12.png');
  background-size: cover;
  background-position: center;
  transform: translateZ(-1px) scale(1.1);
  z-index: -1;
}

/* Glass effect */
.hero::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background-color: rgba(201, 190, 190, 0.5);
  border-radius: 20px;
  z-index: -1;
}

.methodology {
  @apply text-4xl text-center text-gray-900 font-bold m-5;
}

.maincontainer2 {
  @apply flex flex-col items-center justify-center rounded-3xl h-[1250px] max-w-full m-5;
  background-image:
  url('/wallpaper12.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
}

.hero2 {
  @apply flex flex-col items-center justify-center h-full w-full relative;
  background-image: url('/wallpaper12.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
  overflow: hidden;
}

.maincontainer2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/wallpaper12.png');
  background-size: cover;
  background-position: center;
  transform: translateZ(-1px) scale(1.1);
  z-index: -1;
}

/* Glass effect */
.hero2::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 98%;
  background-color: rgba(201, 190, 190, 0.5);
  border-radius: 20px;
  z-index: -1;
}
.blur-content {
  filter: blur(5px);
  transition: filter 0.3s ease;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
