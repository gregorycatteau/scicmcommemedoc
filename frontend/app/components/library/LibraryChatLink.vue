<template>
  <a
    class="LibraryChatLink"
    href="https://chat.mcommemedoc.fr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Ouvrir le Chat M Comme Medoc dans un nouvel onglet"
  >
    <span aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M4.5 6.5A4.5 4.5 0 0 1 9 2h6a4.5 4.5 0 0 1 4.5 4.5v4A4.5 4.5 0 0 1 15 15H9.4L5 19.2V15A4.5 4.5 0 0 1 4.5 10.5v-4Z" />
      </svg>
    </span>
    <strong>Chat</strong>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference "~/assets/css/main.css";

.LibraryChatLink {
  right: max(0.75rem, env(safe-area-inset-right));
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  @apply fixed z-[70] hidden items-center gap-2 rounded-full border border-black/10 bg-white/88 px-2.5 py-4 text-xs font-black uppercase tracking-[0.18em] text-black shadow-xl shadow-black/10 backdrop-blur md:flex;
}
.LibraryChatLink span {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-black text-white;
}
.LibraryChatLink svg {
  @apply h-5 w-5 fill-current;
}
.LibraryChatLink:focus-visible {
  @apply outline outline-4 outline-offset-4 outline-orange-600;
}
@media (max-width: 767px) {
  .LibraryChatLink {
    writing-mode: horizontal-tb;
    top: auto;
    bottom: 1rem;
    transform: none;
    @apply flex px-3 py-2;
  }
}
</style>
