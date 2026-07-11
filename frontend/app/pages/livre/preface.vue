<template>
  <MainWrapper>
    <BookLayout>
      <BookChapterHeader :chapter="chapter" />
      <SharedEditorialImage :src="chapter.image.src" :alt="chapter.image.alt" caption="La preface ouvre le Livre avant les outils : elle donne une voix, pas une promesse marketing." loading="eager" />
      <BookChapterIntro question="Pourquoi commencer par un recit personnel ?">
        <p>Parce qu un mouvement local ne nait pas d abord d un formulaire, d une carte ou d une structure. Il nait d une maniere de regarder le territoire et de ne plus accepter que les liens utiles restent invisibles.</p>
      </BookChapterIntro>
      <SharedReadableProse>
        <p>Je suis ici parce que le Medoc ne peut pas etre seulement un paysage que l on traverse, une adresse que l on habite ou une destination que l on raconte de loin.</p>
        <p>Je suis ici parce que des gestes existent deja : produire, reparer, transmettre, accueillir, cuisiner, aider, organiser. Beaucoup sont fragiles. Beaucoup sont disperses. Beaucoup meritent d etre relies sans etre recuperes.</p>
        <p>M Comme Medoc commence la : dans l envie de rendre les prises plus visibles, sans promettre de solution totale, sans transformer l engagement en obligation, sans demander a chacun de porter plus qu il ne peut.</p>
        <p>Ce Livre n est pas la vitrine d une organisation. C est une invitation a regarder autrement ce qui tient deja, ce qui manque, ce qui peut commencer petit.</p>
        <p>Le Wiki, lui, gardera les informations pratiques : les ressources, les procedures, les corrections, les dates, les statuts de verification. Le Livre donne le sens. Le Wiki donne prise.</p>
      </SharedReadableProse>
      <BookChapterQuote quote="On arrive rarement pret. On commence souvent parce qu une question ne nous laisse plus tranquille." cite="Gregory Catteau" />
      <BookChapterEnding
        :transformation="chapter.transformation"
        closing="Tu n as pas encore besoin de tout comprendre. Il suffit d ouvrir le premier chapitre et de regarder ce que veut dire habiter ici."
        :next="next"
        :wiki-links="chapter.wikiLinks"
      />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { getBookChapter, getNextBookChapter } from '~/data/book/chapters'

const chapter = getBookChapter('preface')!
const next = getNextBookChapter('preface')

onMounted(() => {
  window.localStorage.setItem('mcm:last-book-chapter', chapter.slug)
})

usePageSeo(chapter.seo.title, chapter.seo.description)
</script>
