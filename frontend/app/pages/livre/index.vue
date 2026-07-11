<template>
  <MainWrapper>
    <BookLayout>
      <BookLivingTableOfContents :chapters="bookChapters" />
      <BookProgress />
    </BookLayout>
  </MainWrapper>
</template>

<script setup lang="ts">
import { bookChapters } from '~/data/book/chapters'

usePageSeo(
  'Sommaire du Livre vivant - M Comme Medoc',
  'Sommaire vivant du Livre M Comme Medoc : preface, habiter, se nourrir, tenir, faire emerger, developper, relier, faire ensemble et ecrire la suite.',
)
</script>
