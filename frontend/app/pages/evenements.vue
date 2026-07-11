<template>
  <MainWrapper>
    <PageHero
      kicker="Nous rencontrer"
      title="La confiance commence rarement par un formulaire."
      subtitle="Viens voir le projet, poser tes questions et sentir si cette aventure a quelque chose a voir avec toi."
      tone="clay"
    />

    <ContentSection>
      <div class="MeetGrid">
        <div class="EventList">
          <article v-for="event in events" :key="event.title" class="EventCard">
            <p class="EventDate">{{ event.date }}</p>
            <h2>{{ event.title }}</h2>
            <p>{{ event.place }}</p>
            <p>{{ event.text }}</p>
            <NuxtLink to="/devenir-membre" class="EventButton">Signaler ma presence</NuxtLink>
          </article>
        </div>
        <aside class="PlacePanel">
          <img class="PlaceImage" src="/images/medoc-hero.webp" alt="Paysage du Medoc au lever du soleil" width="1680" height="960" loading="lazy" />
          <div class="PlaceCopy">
            <p class="PageKicker">Le lieu</p>
            <h2>Le Medoc n'est pas un decor. C'est le point de depart.</h2>
            <p>Les rencontres alternent entre lieux physiques et visio pour laisser une porte ouverte a chacun.</p>
          </div>
        </aside>
      </div>
    </ContentSection>
  </MainWrapper>
</template>

<script setup lang="ts">
const events = [
  {
    date: 'Tous les jeudis, de 19 h a 20 h 30',
    title: 'Permanence telephonique et rencontre autour d un cafe',
    place: 'Par telephone + permanence physique, lieu a definir',
    text: 'Un bon moyen de faire connaissance, de poser tes questions et de partager de belles discussions simplement.',
  },
  {
    date: 'Samedi 31 janvier 2026, 10h00',
    title: 'Atelier premiers projets',
    place: 'Medoc, lieu a confirmer',
    text: 'Prioriser les actions 2026 : producteurs, reemploi, ateliers, transmission et autonomie locale.',
  },
]

usePageSeo(
  'Nous rencontrer',
  'Rencontrer M Comme Medoc lors d une reunion ou d un atelier local.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.PageKicker {
  @apply text-sm font-black uppercase tracking-[0.22em] text-orange-600;
}
.MeetGrid {
  @apply grid gap-8 lg:grid-cols-[0.95fr_1.05fr];
}
.EventList {
  @apply grid gap-5;
}
.EventCard {
  @apply rounded-[2rem] border border-black/10 bg-white/55 p-7;
}
.EventDate {
  @apply text-sm font-black uppercase tracking-[0.18em] text-orange-800;
}
.EventCard h2 {
  @apply mt-5 text-3xl font-black leading-tight text-black;
}
.EventCard p {
  @apply mt-4 text-lg leading-8 text-black/70;
}
.EventButton {
  @apply mt-7 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition duration-500 hover:bg-orange-700;
}
.PlacePanel {
  @apply overflow-hidden rounded-[2rem] bg-black text-white shadow-2xl shadow-black/20;
}
.PlaceImage {
  @apply aspect-[16/10] w-full object-cover opacity-85;
}
.PlaceCopy {
  @apply p-7 sm:p-10;
}
.PlaceCopy h2 {
  @apply mt-5 text-3xl font-black leading-tight;
}
.PlaceCopy p:last-child {
  @apply mt-5 text-lg leading-8 text-white/72;
}
</style>
