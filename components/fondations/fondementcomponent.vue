<template>

  <div class="mainwrapper">
  
    <h1 class="title">Découvrez les Fondements Innovants de la SCIC M Comme Médoc</h1>
    
    <p class="meta-description">
      Rejoignez-nous pour explorer les fondements uniques de la SCIC M Comme Médoc - une coopérative dédiée à l'innovation sociale, à la durabilité et à l'impact communautaire.
    </p>

    <section class="content">
      <h2 class="subtitle">Introduction</h2>
      <p class="description">
        Bienvenue sur la page dédiée aux fondements de la SCIC M Comme Médoc, une initiative révolutionnaire dans le monde des coopératives d'intérêt collectif. <span><NuxtLink to="/valeurs" class="link">Ici,</NuxtLink></span> nous allons explorer les principes qui rendent notre SCIC unique, durable, et véritablement tournée vers l'avenir.
      </p>

      <h2 class="subtitle">Une Vision pour un Avenir Durable</h2>
      <p class="description">
        La SCIC M Comme Médoc est née d'une vision simple mais puissante : créer une économie plus juste et plus durable. Nos fondements reposent sur le principe de responsabilité sociale, économique et environnementale. Nous croyons fermement que les entreprises peuvent prospérer tout en ayant un impact positif sur la société et la planète.
      </p>
      
      <h2 class="subtitle">La Coopération au Cœur de Notre Structure</h2>
      <p class="description">
        Au cœur de la SCIC M Comme Médoc se trouve l'engagement envers une structure coopérative et démocratique. Chez nous, chaque associé, qu'il soit une personne physique ou morale, a une voix égale dans la prise de décision, reflétant notre engagement envers <span><NuxtLink to="/gouvernance" class="link">la démocratie participative et la gestion inclusive.
      </NuxtLink></span> </p>

      <h2 class="subtitle">Engagement pour la Communauté et l'Environnement</h2>
      <p class="description">
        Nous sommes dédiés à servir notre communauté et à protéger l'environnement. Nos projets et initiatives sont conçus pour soutenir la transition vers un mode de vie durable, encourager les pratiques écologiques, et renforcer les liens communautaires.
      </p>

      <h2 class="subtitle">Nos Valeurs Fondamentales</h2>
      <ul class="listwrapper">
        <li class="listitem">Durabilité : Nous nous engageons à adopter des pratiques qui assurent la durabilité à long terme de notre planète.</li>
        <li class="listitem">Inclusion Sociale : Nous œuvrons pour une société plus inclusive où chaque membre a la possibilité de contribuer et de bénéficier de notre succès collectif.</li>
        <li class="listitem">Innovation : Nous encourageons l'innovation pour résoudre les défis sociaux et environnementaux auxquels nous sommes confrontés.</li>
      </ul>

      <h2 class="subtitle">Rejoignez Notre Mouvement</h2>
      <p class="description">
        La SCIC M Comme Médoc n'est pas seulement une entreprise ; c'est un mouvement vers un avenir plus juste et durable. En savoir plus sur nos programmes, nos partenariats et comment vous pouvez vous impliquer.
      </p>

      <NuxtLink to="/contact">
        <h2 class="subtitle">Contactez-Nous</h2>
      </NuxtLink>
      <p class="description">
        Pour plus d'informations sur la SCIC M Comme Médoc et pour découvrir comment vous pouvez faire partie de notre aventure,envoyez nous un message via le  
        <NuxtLink to="/contact" class="maillink">formulaire de contact</NuxtLink> ou contactez-nous directement via notre adresse mail :</p>
        
      <div class="maillinkwrapper">
          <a href="mailto:direction@mcommemedoc.fr" class="maillinkaddress">direction@mcommemedoc.fr</a>
        </div>
      
    </section>
  </div>
</template>
<script>
export default {
  name: 'FondementsComponent',
};
</script>
<style scoped>
.mainwrapper {
  @apply w-auto mx-10 my-20;
}

.title {
  @apply text-scicgreen text-center mb-20 text-2xl;
}

.meta-description {
  @apply text-justify indent-8 italic mb-20 text-xl;
}
.subtitle {
  @apply text-scicgreen mt-10 text-2xl text-center mb-10;
}

.description {
  @apply  mt-10 text-lg text-justify indent-8 mb-10;
}

.listwrapper {
  @apply list-disc list-inside mt-5;
}

.listitem {
  @apply text-justify;
}
.maillink {
  @apply text-scicorange font-bold;
}
.maillinkwrapper {
  @apply text-center bg-scicgreen rounded-lg p-5 mt-5;
}
.maillink {
  @apply  font-bold text-center justify-center;
}
.maillinkaddress {
  @apply text-center text-white text-xl font-bold;
}
</style>
