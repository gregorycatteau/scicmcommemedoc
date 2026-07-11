<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <BookChapterIntro question="Comment passer d une intention individuelle a une dynamique collective ?">
        <p>Faire ensemble ne veut pas dire se fondre dans une organisation. Cela veut dire trouver une place utile : venir a une rencontre, signaler une ressource, proposer un test, aider a verifier, transmettre un savoir-faire.</p>
      </BookChapterIntro>
      <SharedReadableProse>
        <h2>Rejoindre sans se perdre</h2>
        <p>Un mouvement local doit rester lisible pour celles et ceux qui arrivent. Les statuts, la gouvernance et les procedures existent pour soutenir l action, pas pour remplacer la rencontre.</p>
        <p>La bonne entree peut etre tres simple : poser une question, venir voir, presenter une idee, corriger une information.</p>
      </SharedReadableProse>
      <section class="ActionGrid" aria-label="Actions pour faire ensemble">
        <SharedExplicitLink to="/evenements" label="Trouver une rencontre" description="Voir les prochaines occasions de parler du projet." />
        <SharedExplicitLink to="/devenir-membre" label="Faire connaitre son envie" description="Partager ce qui t amene et choisir un premier contact." />
        <SharedExplicitLink to="/vie-cooperative" label="Comprendre la vie cooperative" description="Lire le fonctionnement sans jargon trop tot." />
        <SharedExplicitLink to="/activites" label="Voir les projets" description="Situer les actions deja racontees dans l application." />
      </section>
      <SharedEditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="La cooperation commence souvent par une place simple a prendre." />
      <BookChapterEnding
        :transformation="chapter.transformation"
        closing="Tu repars avec une entree possible : rencontrer, proposer, verifier, contribuer ou simplement poser une question."
        :previous="previous"
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter, getPreviousBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('faire-ensemble')!
const previous = getPreviousBookChapter('faire-ensemble')
const next = getNextBookChapter('faire-ensemble')

onMounted(() => window.localStorage.setItem('mcm:last-book-chapter', chapter.slug))
usePageSeo(chapter.seo.title, chapter.seo.description)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.ActionGrid { @apply mx-auto my-16 grid max-w-5xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:px-8; }
</style>
