<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'info'
  }
})

const formattedDate = computed(() => {
  return new Date(props.date).toDateString()
})
</script>

<template>
  <div class="flex items-center">
    <span class="rounded-2xl" :class="`is-${color}`">{{ author }}</span>
    <span class="rounded-2xl">{{ formattedDate }}</span>
  </div>
</template>

<style scoped>

</style>