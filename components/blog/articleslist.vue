<template>
  <div class="articles-list-container">
    <ContentQuery path="/blog" :where="{ published: true }" :sort="{ date: -1 }">
      <template #default="{ data: articles }">
        <div v-if="articles.length === 0" class="no-articles">
          Aucun article disponible pour le moment.
        </div>
        <div v-else v-for="article in articles" :key="article.slug" class="article-preview ">
          
          <div class="secondwrapper">
            <h2 class="article-title">{{ article.title }}</h2>
            <img :src="article.image" alt="Cover image for article" class="article-image">
            <p class="article-summary">{{ article.summary }}</p>
          </div>
          <div class="metadata">
            <span class="date">{{ article.date }}</span>
            <span class="author">{{ article.author }}</span>
            <span class="reading-time">{{ article.readingTime }}</span>
          </div>
          <nuxt-link :to="`/blog/${article.slug}`" class="read-more">Lire plus</nuxt-link>
        </div>
      </template>
      <template #not-found>
        <div class="no-articles">
          Aucun article trouvé.
        </div>
      </template>
    </ContentQuery>
  </div>
</template>

<style scoped>
.articles-list-container {
  @apply flex flex-row flex-wrap justify-center gap-8 p-4;
}

.no-articles {
  @apply text-center text-lg text-gray-600;
}


.article-preview {
  @apply bg-scicgreen p-8 m-10 gap-8 items-center text-center rounded-lg shadow-md w-full md:w-3/4 cursor-pointer transition ease-in-out duration-300;
}
.article-title {
  @apply text-2xl font-bold text-scicyellow  bg-white text-scicgreen rounded-lg p-10 hover:bg-scicorange hover:text-white;
}


.article-image {
  @apply  items-center h-48 object-cover rounded-lg;
}

.metadata {
  @apply flex justify-between mx-4 my-10 text-sm text-scicorange;
}
.date {
  @apply text-scicorange bg-white p-2 rounded-lg;
}
.author {
  @apply text-scicorange bg-white p-2 rounded-lg;
}
.reading-time {
  @apply text-scicorange bg-white p-2 rounded-lg;
}

.read-more {
  @apply mt-4 bg-scicorange p-4 rounded-2xl text-white hover:underline hover:bg-scicblue hover:text-scicgreen;
}
.secondwrapper {
  @apply flex flex-col m-10 gap-8 ;
}
.article-summary {
  @apply text-white text-sm justify-center items-center text-2xl p-10;
}
</style>
