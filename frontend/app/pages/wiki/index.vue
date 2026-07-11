<template>
  <MainWrapper>
    <WikiLanding :categories="wikiCategories" />
    <section class="WikiMethod" aria-labelledby="wiki-method-title">
      <div>
        <p>Regle de confiance</p>
        <h2 id="wiki-method-title">Une fiche utile doit dire ce qu elle sait, ce qu elle ne sait pas encore, et comment le corriger.</h2>
      </div>
      <ReadableProse>
        <p>Le Wiki ne remplace pas le Livre. Il porte les informations pratiques : fiches, horaires, sources, statuts de verification, procedures et signalements.</p>
        <p>Aujourd hui, les ressources visibles dans l application sont des donnees de demonstration. Elles permettent de tester la recherche et les filtres, mais ne doivent pas etre utilisees comme repertoire local reel.</p>
      </ReadableProse>
      <div class="WikiActions">
        <ExplicitLink to="/ressources" label="Consulter les ressources de demonstration" description="Voir la recherche actuelle et les statuts visibles." />
        <ExplicitLink to="/vie-cooperative" label="Comprendre le fonctionnement de la cooperative" description="Lire les principes d organisation existants." />
        <ExplicitLink to="/ressources" label="Signaler une information a corriger" description="Utiliser le formulaire de signalement disponible sur la route ressources." />
      </div>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
import { wikiCategories } from '~/data/wiki/categories'

usePageSeo(
  'Wiki operationnel - M Comme Medoc',
  'Wiki M Comme Medoc : ressources, fonctionnement, signalements et informations pratiques avec statut de verification.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.WikiMethod {
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl gap-8 border-t border-ink/10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8;
}
.WikiMethod > div:first-child p {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.WikiMethod h2 {
  @apply mt-5 text-4xl font-black leading-tight;
}
.WikiActions {
  @apply col-span-full flex flex-wrap gap-3;
}
</style>
