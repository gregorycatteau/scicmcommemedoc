<template>
  <MainWrapper>
    <PageHero
      kicker="Questions"
      title="Ce qui doit etre clair avant de faire un pas."
      subtitle="Des reponses simples, sans jargon cooperatif inutile."
      tone="light"
    />

    <ContentSection>
      <div class="FaqList">
        <details v-for="item in faq" :key="item.question" class="FaqItem">
          <summary class="FaqQuestion">{{ item.question }}</summary>
          <p class="FaqAnswer">{{ item.answer }}</p>
        </details>
        <div class="FaqCta">
          <h2>La meilleure reponse reste souvent une rencontre.</h2>
          <CtaButton to="/evenements">Voir la prochaine date</CtaButton>
        </div>
      </div>
    </ContentSection>
  </MainWrapper>
</template>

<script setup lang="ts">
const faq = [
  { question: 'Est-ce payant ?', answer: 'Oui, une cotisation annuelle est prevue. Le montant exact doit etre confirme avant le lancement public.' },
  { question: "Je ne suis pas du coin, puis-je quand meme m'engager ?", answer: 'Oui. Certaines contributions peuvent se faire a distance, et les temps forts permettent de garder le lien avec le territoire.' },
  { question: 'Faut-il connaitre les cooperatives ?', answer: 'Non. Le principe utile tient en une phrase : chaque membre peut proposer, voter et contribuer.' },
  { question: 'Combien de temps faut-il donner ?', answer: 'Il n y a pas de modele unique. Tu peux commencer par une rencontre, puis choisir une contribution realiste.' },
  { question: 'Est-ce militant ?', answer: 'Le projet est engage, mais il reste concret. On parle de produire, reparer, transmettre, acheter autrement et reconstruire de la confiance.' },
]

usePageSeo('FAQ', 'Questions frequentes sur la participation a M Comme Medoc.')
</script>

<style scoped>
@reference "~/assets/css/main.css";

.FaqList {
  @apply mx-auto grid max-w-4xl gap-4;
}
.FaqItem {
  @apply rounded-[2rem] border border-black/10 bg-white/55 p-6;
}
.FaqQuestion {
  @apply cursor-pointer text-xl font-black leading-tight text-black;
}
.FaqAnswer {
  @apply mt-4 text-lg leading-8 text-black/70;
}
.FaqCta {
  @apply mt-6 grid gap-6 rounded-[2rem] bg-black p-8 text-white sm:grid-cols-[1fr_auto] sm:items-center;
}
.FaqCta h2 {
  @apply text-3xl font-black leading-tight;
}
</style>
