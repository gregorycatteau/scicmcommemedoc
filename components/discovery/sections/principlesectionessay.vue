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


<script setup lang="ts">
</script>


<script setup lang="ts">
</script>

<style scoped>
* {
  box-sizing: border-box;
}

:root {
  color-scheme: light dark;
  --h: 330;
  --s: 88%;
  --l: 66%;
  --brand-color-bg: hsl(var(--h) var(--s) var(--l));
  --brand-color-fg: hsl(0 0% 99%);
  --border: 1px solid var(--brand-color-bg);
  --shadow-blur: 1.5rem;
  --shadow-color: hsla(var(--h) var(--s) var(--l) / 0.6);
  --shadow-y: 1rem;
  --space: clamp(1.125rem, 0.8rem + 1.3cqi, 1.875rem);
  --gradient: linear-gradient(
    165deg,
    transparent 50%,
    hsla(var(--h) var(--s) var(--l) / 0.15) 125%
  );
}

@media (prefers-color-scheme: dark) {
  :root {
    --l: 46%;
  }
}

html {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-family: 'Lora', serif;
  font-size: clamp(1rem, 0.6rem + 1.125cqi, 1.125rem);
  line-height: 1.5;
  padding: 2rem;
  min-height: 100%;
  background: #f0f0f0; /* Slightly lighter background for better contrast */
}

h2 {
  font-size: 2.5em; /* Slightly larger for better emphasis */
  font-weight: 700;
  line-height: 1.1;
  text-wrap: balance;
  color: #2b2b2b; /* Darker color for better contrast */
}

.flow > * + * {
  margin-block-start: var(--space);
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  border: var(--border);
  border-radius: 1rem;
  inline-size: min(55rem, 100%);
  height: auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8); /* Slightly opaque background for better readability */
}

.intro {
  padding: var(--space);
  background-image: var(--gradient);
  border-bottom: var(--border);
}

.details {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-left: 2rem; /* Added padding for better separation */
}

.imageplacer {
  border-bottom: var(--border);
  padding: var(--space);
}

.scroll-container {
  @apply bg-scicgreen bg-opacity-65 rounded-2xl border-spacing-1 border-solid border-x-2 border-scicorange;
  flex-grow: 1;
  border: 2px;
  border: #2b2b2b;
  
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scrollbar-color: var(--brand-color-bg) transparent;
  padding: var(--space);
  border-bottom: var(--border);
  max-height: 600px;
  animation: scroll-shadow-inset linear;
  animation-timeline: scroll(self);
}

.listing2 {
  @apply list-disc list-outside p-8; /* Darker color for better contrast */
}

.listitem2 {
  @apply mb-1 text-xl text-justify indent-2 text-scicblue font-extrabold ;/* Slightly larger for better readability */
}

footer {
  padding: var(--space);
  text-align: center;
  background-image: var(--gradient);
  border-top: var(--border);
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
    grid-template-columns: 1fr 1fr;
  }

  .intro {
    border-bottom: unset;
    border-right: var(--border);
  }

  .details {
    border-left: var(--border);
  }
}

/* Effet de verre */
.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.imgplace {
  @apply mt-5 prose mx-auto lg:max-w-none; /* Align the items at the start */
}

.headerimage {
  @apply w-64 float-left  rounded-lg shadow-lg object-cover object-center mb-0 mr-6 [clip-path:circle(70%_at_20%_30%)] [shape-outside:circle(70%_at_20%_30%)];
}
.maintitle {
  @apply text-zinc-700 hover:text-white font-light skew-x-6;
  font-family: 'Permanent marker', cursive;
}
.subtitle {
  @apply text-2xl text-zinc-800;
}

.cta-button {
  font: inherit;
  line-height: normal;
  padding: 0.5rem 1.5rem 0.6rem;
  background: var(--brand-color-bg);
  color: var(--brand-color-fg);
  border: unset;
  border-radius: 0.25rem;
  cursor: pointer;
}

.cta-button:active {
  translate: 0 1px;
}

</style>
