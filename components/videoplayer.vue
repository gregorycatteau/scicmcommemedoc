<template>
  <div class="wrapper">
    <iframe 
      class="video"
      width="560" 
      height="315" 
      :src="source" 
      title="YouTube video player" 
      frameborder="0" 
      allow=
        "accelerometer; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
      allowfullscreen
    >     
    </iframe>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { type PropType } from 'vue';

export default {
  name: 'videoplayer',
  props: {
    source: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      required: true
    }
  }
}
</script>


<style scoped>
.wrapper {
  @apply 
    mt-10
    flex 
    bg-indigo-200 
    rounded-3xl
    relative 
    mb-10 
    w-11/12 
    m-auto 
    items-center 
    p-10 
    justify-between
    gap-10;
}
.title {
  @apply text-3xl text-indigo-800 font-bold mb-8 ;
}

</style>