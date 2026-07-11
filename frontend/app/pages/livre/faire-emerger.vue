<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <SharedEditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="Une idee locale commence souvent comme une note incomplete, pas comme un dossier parfait." />
      <BookChapterIntro question="Comment une idee encore fragile peut-elle devenir un premier projet ?">
        <p>Une idee reste seule tant qu elle n a pas trouve une forme partageable. La premiere etape n est pas de tout verrouiller : elle consiste a nommer le besoin, les personnes concernees et le premier test possible.</p>
      </BookChapterIntro>
      <SharedReadableProse>
        <h2>Le brouillon est une preuve de vie</h2>
        <p>Les initiatives locales meurent souvent trop tot parce qu elles veulent paraitre completes avant d etre discutees. M Comme Medoc doit proteger le droit de commencer petit.</p>
        <p>Une fiche projet n est pas une promesse. C est une invitation a comprendre ce qu il faut apprendre, demander ou verifier.</p>
      </SharedReadableProse>
      <section class="ToolPassage">
        <div>
          <p>Geste du chapitre</p>
          <h2>Faire sortir l idee de l isolement.</h2>
          <span>La fiche reste locale a ton navigateur jusqu a une action explicite de copie ou d export.</span>
        </div>
        <NuxtLink to="/creer-projet-citoyen-medoc">Structurer une fiche projet</NuxtLink>
      </section>
      <BookChapterQuote quote="Une idee n a pas besoin d etre parfaite pour meriter une premiere conversation." />
      <BookChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une forme partageable : assez claire pour etre discutee, assez ouverte pour evoluer."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('faire-emerger')!
const previous = getPreviousBookChapter('faire-emerger')
const next = getNextBookChapter('faire-emerger')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ToolPassage { background: #73583a; @apply mx-auto my-16 grid max-w-5xl gap-6 rounded-[1.5rem] p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center; }
.ToolPassage p { color: #ff6b35; @apply text-sm font-black uppercase tracking-[0.2em]; }
.ToolPassage h2 { @apply mt-3 text-3xl font-black leading-tight; }
.ToolPassage span { @apply mt-4 block max-w-2xl leading-7 text-white/72; }
.ToolPassage a { background: #ff6b35; @apply inline-flex rounded-full px-6 py-3 text-center font-black text-white transition duration-500; }
.ToolPassage a:hover { background: #cf4f22; }
</style>
