<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <ChapterIntro question="Que reste-t-il quand le Livre se referme ?">
        <p>Une lecture ne suffit pas. Le Livre a du sens seulement s il aide a poser un geste : verifier une information, proposer une ressource, rencontrer quelqu un, presenter une idee, ou simplement reprendre la discussion.</p>
      </ChapterIntro>
      <ChapterQuote quote="Le sujet du Livre n est pas M Comme Medoc. Le sujet, c est ce que tu deviens capable de faire ici." />
      <section class="EpilogueActions" aria-label="Ecrire la suite">
        <ExplicitLink to="/creer-projet-citoyen-medoc" label="Proposer une idee" description="Transformer une intuition en premiere fiche partageable." />
        <ExplicitLink to="/ressources" label="Signaler une information a corriger" description="Aider les donnees operationnelles a rester prudentes et utiles." />
        <ExplicitLink to="/evenements" label="Participer a une rencontre" description="Passer du recit a une conversation." />
        <ExplicitLink to="/devenir-membre" label="Devenir membre" description="Faire connaitre son envie de contribuer a sa mesure." />
      </section>
      <EditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="L epilogue n est pas une fin : c est une page blanche laissee au lecteur." />
      <ChapterEnding
        :transformation="chapter.transformation"
        closing="Tu peux refermer la page. Ou choisir une premiere action assez petite pour commencer vraiment."
        :previous="previous"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('epilogue')!
const previous = getPreviousBookChapter('epilogue')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.EpilogueActions { @apply mx-auto my-16 grid max-w-5xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:px-8; }
</style>
