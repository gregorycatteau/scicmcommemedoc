<template>
  <div class="hero-section">
    <ContentQuery :path="'/blog'" :where="queryFilters" v-slot="{ data: articles }">
      <div class="carousel-container">
        <div v-for="article in articles" :key="article.slug" class="wrappercard">
          <div class="card" :style="{ backgroundImage: `url(${article.image})` }">
            <div class="card-overlay">
              <h2 class="card-title">{{ article.title }}</h2>
              <p class="articlesummary">{{ article.summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </ContentQuery>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFiltersStore } from '@/stores/filters';

const filtersStore = useFiltersStore();

const queryFilters = computed(() => {
  const { category, author, tags } = filtersStore.filters;
  let where = { published: true };

  if (category) {
    where.category = category;
  }
  if (author) {
    where.author = author;
  }
  if (tags && tags.length > 0) {
    where.tags = { $contains: tags };
  }

  return where;
});
</script>

<style scoped>
.hero-section {
  @apply overflow-hidden relative flex justify-center items-center h-[400px] mt-10;
}

.carousel-container {
  @apply flex overflow-x-scroll scroll-smooth snap-x snap-mandatory space-x-4;
}

.wrappercard {
  @apply snap-center flex-none;
}

.card {
  @apply h-72 w-[540px] bg-cover bg-center relative flex items-center justify-self-start rounded-2xl hover:-hue-rotate-60 hover:scale-90 transition-transform duration-300;
}

.card-overlay {
  @apply  backdrop-grayscale bg-scicgreen/60 p-2 mx-2 my-2 rounded-2xl gap-4;
}

.card-title {
  @apply text-white text-lg text-center font-bold bg-scicorange/60 p-2 rounded-2xl;
}
.articlesummary {
  @apply text-white text-sm text-center;
}
</style>
