<template>
  <section class="mainwrapper">
    <article class="container glass">
      <section class="intro flow">
        <h2 class="maintitle">Les principes coopératifs</h2>
        <div class="imageplacer imgplace">
          <img src="/Olivier.png" alt="Olivier" class="headerimage" />
          <p class="subtitle">
            Être reconnue comme SCIC est une étape importante, mais s'engager
            pleinement envers les principes coopératifs est essentiel et cela
            englobe les aspects listés à droite :
          </p>
        </div>
      </section>
      <section class="details">
        <div class="scroll-container">
          <ul class="listing2">
            <li class="listitem2">La valorisation de l'individu et son développement personnel,</li>
            <li class="listitem2">La solidarité et la coopération entre les membres,</li>
            <li class="listitem2">La responsabilité sociale et environnementale,</li>
            <li class="listitem2">Une gouvernance démocratique basée sur le principe "une personne = une voix", modulée par la formation de collèges électoraux,</li>
            <li class="listitem2">Une adhésion diversifiée centrée sur le bénéfice commun et l'utilité sociale, allant au-delà des intérêts individuels,</li>
            <li class="listitem2">L'autonomie de l'entreprise, son développement durable et sa transmission responsable à travers les générations de coopérateurs,</li>
            <li class="listitem2">La solidarité, la résilience et le respect du vivant comme valeurs fondamentales,</li>
            <li class="listitem2">L'engagement responsable dans un projet collectif,</li>
            <li class="listitem2">Le droit à l'innovation, à la créativité et à la prise d'initiative,</li>
            <li class="listitem2">La valorisation et la dignité du travail de chacun,</li>
            <li class="listitem2">Le droit à l'éducation et à la formation continue,</li>
            <li class="listitem2">Et bien évidemment le droit à la joie et à la bonne humeur.</li>
          </ul>
        </div>
      </section>
    </article>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>




.mainwrapper {
  @apply w-11/12 m-auto;
}

body {
  @apply grid place-items-center font-serif text-base leading-relaxed p-8 bg-gray-200;
}

h2 {
  @apply text-4xl font-bold leading-snug text-gray-800;
}

.flow > * + * {
  @apply mt-[var(--space)];
}

.container {
  @apply grid grid-cols-1 border rounded-xl w-full h-auto p-8 bg-white/80;
}

.intro {
  @apply p-[var(--space)] bg-[var(--gradient)] border-b-[var(--border)];
}

.details {
  @apply flex flex-col overflow-y-auto pl-8;
}

.imageplacer {
  @apply border-b-[var(--border)] p-[var(--space)];
}



.listing2 {
  @apply list-disc list-outside p-8;
}

.listitem2 {
  @apply mb-1 text-xl text-justify indent-2 text-black font-extrabold;
}

footer {
  @apply p-[var(--space)] text-center bg-[var(--gradient)] border-t-[var(--border)];
}

@keyframes scroll-shadow-inset {
  from {
    box-shadow: inset 0 calc(var(--shadow-y) * -1) var(--shadow-blur) calc(var(--shadow-y) * -1) var(--shadow-color);
  }
  to {
    box-shadow: inset 0 var(--shadow-y) var(--shadow-blur) calc(var(--shadow-y) * -1) var(--shadow-color);
  }
}

@media (min-width: 40rem) {
  .container {
    @apply grid-cols-2;
  }

  .intro {
    @apply border-b-0 border-r-[var(--border)];
  }

  .details {
    @apply border-l-[var(--border)];
  }
}

/* Effet de verre */
.glass {
  @apply backdrop-blur-lg bg-white/30 border bg-white/30 shadow-lg;
}

.imgplace {
  @apply mt-5 prose mx-auto lg:max-w-none;
}

.headerimage {
  @apply w-64 float-left rounded-lg shadow-lg object-cover object-center mb-0 mr-6 [clip-path:circle(70%_at_20%_30%)] [shape-outside:circle(70%_at_20%_30%)];
}

.maintitle {
  @apply text-zinc-700 hover:text-white font-light skew-x-6;
  font-family: 'Permanent Marker', cursive;
}

.subtitle {
  @apply text-3xl text-zinc-800;
}


</style>
