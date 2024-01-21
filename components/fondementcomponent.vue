<template>
  <div class="fondements-container">
    <h1 class="title">Découvrez les Fondements Innovants de la SCIC M Comme Médoc</h1>

    <p class="meta-description">
      Rejoignez-nous pour explorer les fondements uniques de la SCIC M Comme Médoc - une coopérative dédiée à l'innovation sociale, à la durabilité et à l'impact communautaire.
    </p>

    <section class="content">
      <h2>Introduction</h2>
      <p>
        Bienvenue sur la page dédiée aux fondements de la SCIC M Comme Médoc, une initiative révolutionnaire dans le monde des coopératives d'intérêt collectif. <span><NuxtLink to="/valeurs" class="link">Ici,</NuxtLink></span> nous allons explorer les principes qui rendent notre SCIC unique, durable, et véritablement tournée vers l'avenir.
      </p>

      <h2>Une Vision pour un Avenir Durable</h2>
      <p>
        La SCIC M Comme Médoc est née d'une vision simple mais puissante : créer une économie plus juste et plus durable. Nos fondements reposent sur le principe de responsabilité sociale, économique et environnementale. Nous croyons fermement que les entreprises peuvent prospérer tout en ayant un impact positif sur la société et la planète.
      </p>

      <h2>La Coopération au Cœur de Notre Structure</h2>
      <p>
        Au cœur de la SCIC M Comme Médoc se trouve l'engagement envers une structure coopérative et démocratique. Chez nous, chaque associé, qu'il soit une personne physique ou morale, a une voix égale dans la prise de décision, reflétant notre engagement envers <span><NuxtLink to="/gouvernance" class="link">la démocratie participative et la gestion inclusive.
      </NuxtLink></span> </p>

      <h2>Engagement pour la Communauté et l'Environnement</h2>
      <p>
        Nous sommes dédiés à servir notre communauté et à protéger l'environnement. Nos projets et initiatives sont conçus pour soutenir la transition vers un mode de vie durable, encourager les pratiques écologiques, et renforcer les liens communautaires.
      </p>

      <h2>Nos Valeurs Fondamentales</h2>
      <ul>
        <li>Durabilité : Nous nous engageons à adopter des pratiques qui assurent la durabilité à long terme de notre planète.</li>
        <li>Inclusion Sociale : Nous œuvrons pour une société plus inclusive où chaque membre a la possibilité de contribuer et de bénéficier de notre succès collectif.</li>
        <li>Innovation : Nous encourageons l'innovation pour résoudre les défis sociaux et environnementaux auxquels nous sommes confrontés.</li>
      </ul>

      <h2>Rejoignez Notre Mouvement</h2>
      <p>
        La SCIC M Comme Médoc n'est pas seulement une entreprise ; c'est un mouvement vers un avenir plus juste et durable. En savoir plus sur nos programmes, nos partenariats et comment vous pouvez vous impliquer.
      </p>

      <NuxtLink to="/contact">
        <h2>Contactez-Nous</h2>
      </NuxtLink>
      <p>
        Pour plus d'informations sur la SCIC M Comme Médoc et pour découvrir comment vous pouvez faire partie de notre aventure, <span><NuxtLink to="/contact">contactez-nous</NuxtLink></span> à tout moment via notre adresse mail : <span class="maillink"><a href="mailto:direction@mcommemedoc.fr" class="maillink">direction@mcommemedoc.fr</a></span>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'FondementsComponent',
};
</script>
<style scoped>
.fondements-container {
  @apply w-10/12 mx-auto p-20 rounded-lg shadow-md;
}

.title {
  @apply text-green-600 text-center mb-20 text-5xl;
}

.meta-description {
  @apply text-center italic mb-20 text-2xl;
}

.content h2 {
  @apply text-blue-600 mt-20 text-3xl;
}

ul {
  @apply list-disc ml-40;
}

p, li {
  @apply leading-6;
}
.link {
  @apply text-blue-600 font-bold;
}
.maillink {
  @apply text-blue-600 font-bold text-center justify-center;
}
</style>
