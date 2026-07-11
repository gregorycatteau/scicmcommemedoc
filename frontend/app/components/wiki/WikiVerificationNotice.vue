<template>
  <section class="WikiVerificationNotice">
    <strong>Donnees de demonstration</strong>
    <p>
      Les ressources actuellement visibles dans l application servent a tester l interface. Une fiche operationnelle devra afficher sa source, sa date de verification et son statut avant d etre presentee comme information locale fiable.
    </p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.WikiVerificationNotice {
  @apply rounded-[1.5rem] border border-clay/25 bg-white/75 p-6;
}
.WikiVerificationNotice strong {
  @apply text-lg font-black text-clay;
}
.WikiVerificationNotice p {
  @apply mt-3 leading-7 text-ink/70;
}
</style>
