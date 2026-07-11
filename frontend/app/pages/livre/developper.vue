<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <ChapterIntro question="Comment choisir le prochain pas sans devoir resoudre tout le projet ?">
        <p>Un projet utile peut se bloquer quand il cherche trop vite son statut final. Explorer, tester, structurer, financer ou cooperer ne demandent pas le meme geste.</p>
      </ChapterIntro>
      <ReadableProse>
        <h2>La trajectoire avant le dossier</h2>
        <p>Developper ne signifie pas grossir. Cela signifie comprendre le besoin suivant : un lieu, un partenaire, une preuve d usage, une ressource materielle, une discussion avec d autres.</p>
        <p>Le bon prochain pas doit etre assez petit pour etre fait, assez clair pour etre partage, assez utile pour apprendre quelque chose.</p>
      </ReadableProse>
      <section class="ToolPassage">
        <div>
          <p>Geste du chapitre</p>
          <h2>Nommer le prochain pas utile.</h2>
          <span>Le parcours donne une orientation generale. Il ne remplace pas un conseil juridique, financier ou administratif.</span>
        </div>
        <NuxtLink to="/developper-projet-medoc">Tracer une trajectoire</NuxtLink>
      </section>
      <EditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="Un chemin lisible vaut mieux qu une promesse de solution totale." />
      <ChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une trajectoire provisoire : explorer, tester, structurer, financer ou cooperer."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('developper')!
const previous = getPreviousBookChapter('developper')
const next = getNextBookChapter('developper')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ToolPassage { @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] bg-ink p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center; }
.ToolPassage p { @apply text-sm font-black uppercase tracking-[0.2em] text-primary; }
.ToolPassage h2 { @apply mt-3 text-3xl font-black leading-tight; }
.ToolPassage span { @apply mt-4 block max-w-2xl leading-7 text-white/72; }
.ToolPassage a { @apply inline-flex rounded-full bg-primary px-6 py-3 text-center font-black text-white transition duration-500 hover:bg-primary-dark; }
</style>
