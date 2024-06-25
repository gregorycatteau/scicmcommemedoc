<template>
  <div class="layout-wrapper">
    <h3 class="ucardsubtitle">Les problématiques et freins rencontrés</h3>
    <div class="content-wrapper">
      <img src="/Josiane.png" alt="Josiane" class="image"/>
      
        <p class="ucardtext">
          Vous êtes nombreux à vouloir privilégier les circuits courts,
          ultra locaux et de grande qualité. Vous avez globalement pour
          ambition de vous inscrire dans une logique de consommation qui
          soutient l'agro-écologie, les producteurs locaux et les pratiques
          vertueuses.<br />
          Nous avons également pu constater que les producteurs locaux sont
          nombreux à vouloir s'inscrire dans une démarche de qualité, de
          respect de l'environnement et de valorisation de leur travail.
          Cependant, ils sont confrontés à des problématiques qui les
          empêchent de se développer pleinement et de répondre à vos
          attentes.<br />
          L'ambition de la scic M Comme Médoc est de répondre à ces
          problématiques et de vous permettre de consommer local, de qualité
          et en toute confiance.<br />
          Nous savons que ce défi passe avant tout par la mise en place d'une
          organisation respectueuse du vivant , toujours plus solidaire et résiliente. 
          Mais nous savons que nous réussirons ensemble. 
        </p>
      
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.ucardsubtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center mb-4;
  font-family: "Lora", serif;
}



.image {
  
  @apply w-64 mx-6 rounded-lg shadow-lg float-left object-cover object-center mb-0 [clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] [shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)];
 
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @apply flex-grow;
}

.ucardtext {
  @apply text-white  text-lg ;
}
</style>
