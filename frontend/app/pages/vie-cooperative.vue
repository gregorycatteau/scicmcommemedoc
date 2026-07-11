<template>
  <MainWrapper>
    <PageHero
      kicker="Vie cooperative"
      title="Malgre les difficultes, nous avons poursuivi notre chemin."
      subtitle="Cette page existe pour dire les choses avec sobriete. L'histoire interne ne definit pas le projet, mais elle fait partie de sa maturite."
      tone="light"
    />

    <section class="CoopSection">
      <article class="CoopPanel">
        <p class="PanelKicker">Dignite</p>
        <h2>Une crise ne doit pas devenir une identite.</h2>
        <p>
          La cooperative a traverse une periode interne difficile et des procedures judiciaires qu'elle a remportees.
          Nous n'en faisons ni un argument, ni une revanche.
        </p>
      </article>
      <article class="CoopPanel">
        <p class="PanelKicker">Responsabilite</p>
        <h2>Ce qui compte maintenant, c'est la suite.</h2>
        <p>
          Nous choisissons de parler du travail a venir : reconstruire de la confiance, clarifier la gouvernance et avancer sur des projets utiles au territoire.
        </p>
      </article>
      <article class="CoopPanel">
        <p class="PanelKicker">Chemin</p>
        <h2>La transparence sert la confiance.</h2>
        <p>
          Les personnes qui souhaitent comprendre la vie de la cooperative peuvent venir en parler lors d'une rencontre.
          Le sujet sera traite avec calme, precision et respect.
        </p>
      </article>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
usePageSeo(
  'Vie cooperative',
  'Une page sobre sur le chemin de M Comme Medoc, ses difficultes traversees et sa volonte de poursuivre.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.CoopSection {
  padding-block: var(--section-padding-soft) var(--section-padding);
  @apply mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 lg:px-8;
}
.CoopPanel {
  @apply rounded-[2rem] border border-ink/10 bg-white/55 p-7 sm:p-10;
}
.PanelKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-clay;
}
.CoopPanel h2 {
  @apply mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl;
}
.CoopPanel p:last-child {
  @apply mt-5 text-lg leading-8 text-ink/70;
}
</style>
