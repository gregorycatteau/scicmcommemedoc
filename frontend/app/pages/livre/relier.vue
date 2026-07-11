<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <SharedEditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="Relier n est pas accumuler des fiches : c est rendre un premier appui trouvable." />
      <BookChapterIntro question="Comment rendre visibles les forces deja presentes sans les transformer en catalogue ?">
        <p>Un territoire tient aussi par ce que l on ne voit plus : un atelier, un service, un producteur, une association, une personne qui sait orienter. Le Wiki doit rendre ces appuis cherchables sans confondre piste et information verifiee.</p>
      </BookChapterIntro>
      <SharedReadableProse>
        <h2>La mise en relation demande de la prudence</h2>
        <p>Une ressource referencee n est pas automatiquement un partenaire. Une fiche non verifiee n est pas une recommandation. La confiance vient de cette distinction.</p>
        <p>Le Livre peut raconter pourquoi les ressources comptent. Le Wiki doit porter les sources, les dates, les statuts, les corrections et les retraits.</p>
      </SharedReadableProse>
      <section class="ToolPassage">
        <div>
          <p>Geste du chapitre</p>
          <h2>Trouver un premier appui proche.</h2>
          <span>La recherche actuelle utilise des donnees de demonstration clairement signalees. Elle prepare la methode de verification.</span>
        </div>
        <NuxtLink to="/wiki">Ouvrir le Wiki operationnel</NuxtLink>
      </section>
      <BookChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une idee simple : une ressource utile doit etre visible, mais aussi verifiable."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('relier')!
const previous = getPreviousBookChapter('relier')
const next = getNextBookChapter('relier')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ToolPassage { background: #2e4f4f; @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center; }
.ToolPassage p { color: #ff6b35; @apply text-sm font-black uppercase tracking-[0.2em]; }
.ToolPassage h2 { @apply mt-3 text-3xl font-black leading-tight; }
.ToolPassage span { @apply mt-4 block max-w-2xl leading-7 text-white/72; }
.ToolPassage a { background: #ff6b35; @apply inline-flex rounded-full px-6 py-3 text-center font-black text-white transition duration-500; }
.ToolPassage a:hover { background: #cf4f22; }
</style>
