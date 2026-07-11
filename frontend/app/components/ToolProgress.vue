<template>
  <div class="ToolProgress" :aria-label="`Progression ${current} sur ${total}`">
    <span>{{ current }} / {{ total }}</span>
    <div><i :style="{ width: `${Math.round((current / total) * 100)}%` }"></i></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ current: number; total: number }>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.ToolProgress {
  @apply grid gap-2;
}
.ToolProgress span {
  @apply text-sm font-bold text-ink/70;
}
.ToolProgress div {
  @apply h-2 overflow-hidden rounded-full bg-ink/10;
}
.ToolProgress i {
  @apply block h-full rounded-full bg-primary transition-all duration-300;
}
</style>
