<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <BookChapterIntro question="Comment habiter reellement un territoire, au-dela d y resider ?">
        <p>Habiter le Medoc, ce n est pas seulement choisir un lieu. C est composer avec les distances, les saisons, les couts, les habitudes et les appuis qui rendent le quotidien plus ou moins respirable.</p>
      </BookChapterIntro>
      <SharedEditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="Dans le chapitre Habiter, le territoire apparait par ses trajets, ses marges et ses rythmes ordinaires." />
      <SharedReadableProse>
        <h2>Ce qui pese ne se voit pas toujours</h2>
        <p>Un budget n est pas seulement une addition. C est une carte de contraintes : un trajet repete, une energie mal anticipee, une alimentation dispersee, un imprevu qui arrive trop tot.</p>
        <p>La premiere victoire n est pas de tout optimiser. Elle consiste a voir clairement ce qui pese le plus et a choisir une marge de manoeuvre possible.</p>
        <h2>Le geste interactif</h2>
        <p>L outil budget reste separe du recit pour rester efficace. Il permet d estimer les postes du mois, de lire les proportions et de reperer un premier reglage.</p>
      </SharedReadableProse>
      <section class="ToolPassage" aria-labelledby="budget-tool-title">
        <div>
          <p>Geste du chapitre</p>
          <h2 id="budget-tool-title">Voir ce qui pese le plus ce mois-ci.</h2>
          <span>Le calculateur est indicatif. Il ne collecte pas tes resultats et ne remplace aucun conseil financier.</span>
        </div>
        <NuxtLink to="/vivre-dans-le-medoc-budget">Ouvrir le carnet budget</NuxtLink>
      </section>
      <BookChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une lecture plus nette du mois : non pas une solution magique, mais un endroit ou commencer."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('habiter')!
const previous = getPreviousBookChapter('habiter')
const next = getNextBookChapter('habiter')

onMounted(() => {
  window.localStorage.setItem('mcm:last-book-chapter', chapter.slug)
})

usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ToolPassage { background: #18130f; @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center; }
.ToolPassage p {
  color: #ff6b35;
  @apply text-sm font-black uppercase tracking-[0.2em];
}
.ToolPassage h2 {
  @apply mt-3 text-3xl font-black leading-tight;
}
.ToolPassage span {
  @apply mt-4 block max-w-2xl leading-7 text-white/72;
}
.ToolPassage a {
  background: #ff6b35;
  @apply inline-flex rounded-full px-6 py-3 text-center font-black text-white transition duration-500;
}
.ToolPassage a:hover {
  background: #cf4f22;
}
</style>
