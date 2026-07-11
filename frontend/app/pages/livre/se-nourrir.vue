<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <ChapterIntro question="Comment retrouver la saison, la proximite et les producteurs dans ses choix alimentaires ?">
        <p>Se nourrir localement ne commence pas par une liste parfaite d adresses. Cela commence souvent par un produit, une habitude, une saison que l on decide de regarder de plus pres.</p>
      </ChapterIntro>
      <EditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="La proximite alimentaire doit rester concrete : saison, disponibilite, source et verification." />
      <ReadableProse>
        <h2>La saison change la question</h2>
        <p>Un panier local n est pas un catalogue. Il depend d un moment de l annee, d un lieu de retrait, d une relation de confiance et d informations qui doivent rester verifiees.</p>
        <p>Le plaisir compte aussi. Retrouver la saison dans ses courses, c est rendre un choix plus vivant, moins abstrait, plus proche d une table que d une recherche interminable.</p>
      </ReadableProse>
      <section class="ToolPassage">
        <div>
          <p>Geste du chapitre</p>
          <h2>Composer un panier de depart.</h2>
          <span>Les ressources visibles dans cette version restent des donnees de demonstration tant qu elles ne sont pas verifiees.</span>
        </div>
        <NuxtLink to="/manger-local-medoc">Preparer un panier local</NuxtLink>
      </section>
      <ChapterQuote quote="Un bon panier ne dit pas seulement quoi manger. Il indique avec qui le territoire peut reprendre contact." />
      <ChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec un produit, une saison ou une habitude a chercher vraiment pres de chez toi."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('se-nourrir')!
const previous = getPreviousBookChapter('se-nourrir')
const next = getNextBookChapter('se-nourrir')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ToolPassage { @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] bg-secondary p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center; }
.ToolPassage p { @apply text-sm font-black uppercase tracking-[0.2em] text-primary; }
.ToolPassage h2 { @apply mt-3 text-3xl font-black leading-tight; }
.ToolPassage span { @apply mt-4 block max-w-2xl leading-7 text-white/72; }
.ToolPassage a { @apply inline-flex rounded-full bg-primary px-6 py-3 text-center font-black text-white transition duration-500 hover:bg-primary-dark; }
</style>
