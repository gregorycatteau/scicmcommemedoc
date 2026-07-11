<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <ChapterIntro question="Qu est-ce qui permet a un foyer ou a un voisinage de tenir lorsque quelque chose se deregle ?">
        <p>Tenir ne veut pas dire vivre dans la peur. Cela veut dire connaitre quelques appuis simples : une personne a appeler, une reserve raisonnable, une information fiable, un voisinage qui n est pas totalement invisible.</p>
      </ChapterIntro>
      <ReadableProse>
        <h2>Commencer par ce qui existe deja</h2>
        <p>La preparation utile n a pas besoin d une esthetique de crise. Elle commence par une lecture calme du quotidien : eau, energie, alimentation, communication, entraide, habitudes familiales.</p>
        <p>Le diagnostic ne classe pas les personnes. Il aide a voir les points d appui et les gestes possibles dans les prochains jours.</p>
      </ReadableProse>
      <section class="ToolPassage">
        <div>
          <p>Geste du chapitre</p>
          <h2>Voir ce qui tient deja.</h2>
          <span>Le diagnostic est pedagogique. Il ne promet aucune securite et ne collecte aucune donnee personnelle.</span>
        </div>
        <NuxtLink to="/diagnostic-resilience-foyer">Faire le diagnostic doux</NuxtLink>
      </section>
      <EditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="Tenir, c est souvent rendre visibles des appuis ordinaires avant d en manquer." />
      <ChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une priorite calme : une chose a verifier, simplifier ou partager."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('tenir')!
const previous = getPreviousBookChapter('tenir')
const next = getNextBookChapter('tenir')

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
