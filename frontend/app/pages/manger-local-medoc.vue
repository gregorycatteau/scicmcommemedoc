<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Manger local' }]" />
    <LongTailHero
      kicker="Panier local"
      title="Composer un panier local selon la saison et les points de retrait."
      description="Choisis des familles de produits, une saison et un mode de distribution. Les ressources restent signalees comme demonstration tant qu elles ne sont pas verifiees."
      promise="Un panier lisible, des ressources reliees et une prochaine etape."
      tone="clay"
    />

    <section class="LocalFoodGrid">
      <RevealOnScroll as="form" class="Chooser BasketChooser" variant="mask" @submit.prevent>
        <fieldset>
          <legend>Produits</legend>
          <label v-for="product in products" :key="product"><input v-model="selectedProducts" type="checkbox" :value="product" />{{ product }}</label>
        </fieldset>
        <label><span>Saison</span><select v-model="season"><option value="">Toute saison</option><option>printemps</option><option>ete</option><option>automne</option><option>hiver</option></select></label>
        <label><span>Mode de distribution</span><select v-model="distribution"><option value="">Tous</option><option value="vente-ferme">vente a la ferme</option><option value="marche">marche</option><option value="point-relais">point relais</option><option value="groupement-achat">groupement d achat</option><option value="magasin-producteurs">magasin de producteurs</option></select></label>
      </RevealOnScroll>
      <ToolResult class="BasketResult">
        <RevealOnScroll variant="right">
          <p class="ResultEyebrow">Panier prepare</p>
          <h2>{{ selectedProducts.length || 0 }} famille{{ selectedProducts.length > 1 ? 's' : '' }}</h2>
          <p>{{ season || 'Toute saison' }} · {{ distribution || 'tous modes' }}</p>
        </RevealOnScroll>
        <ul class="BasketList"><li v-for="item in selectedProducts" :key="item">{{ item }}</li></ul>
        <p class="BasketRoute">Etapes estimees : {{ Math.max(1, matchingResources.length) }}. Itineraire logique indicatif, pas un calcul routier.</p>
        <NuxtLink class="ResultLink" to="/ressources">Verifier ou proposer une ressource</NuxtLink>
      </ToolResult>
    </section>

    <section class="ResourceMatches">
      <RevealOnScroll class="ResourceIntro" variant="left">
        <h2>Ressources correspondantes</h2>
        <p>Les pistes ci-dessous relient le panier aux ressources de demonstration deja presentes dans l outil.</p>
      </RevealOnScroll>
      <RevealOnScroll variant="right">
        <ResourceList :resources="matchingResources" :total="matchingResources.length" @select="selectedSlug = $event" />
      </RevealOnScroll>
      <ResourceDetail :resource="selectedResource" @close="selectedSlug = ''" @report="selectedSlug = $event" />
    </section>

    <section class="EditorialBlock FoodEditorial">
      <h2>Calendrier saisonnier indicatif</h2>
      <p>Les saisons donnent des reperes pratiques pour preparer une recherche. Elles ne garantissent jamais la disponibilite chez un producteur particulier.</p>
      <div class="SeasonGrid"><p v-for="line in seasonalNotes" :key="line"><span>{{ line }}</span></p></div>
      <NuxtLink to="/ressources">Ajouter une adresse utile ou contribuer a verifier les informations</NuxtLink>
    </section>
    <RelatedTools />
  </MainWrapper>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'
import { DEFAULT_RESOURCE_FILTERS, filterResources } from '~/utils/resources'
import { demoResources } from '~/data/demoResources'

const products = ['legumes', 'fruits', 'asperges', 'produits de la mer', 'viande', 'oeufs', 'produits laitiers', 'miel', 'pain', 'boissons non alcoolisees', 'plants et semences', 'produits transformes']
const selectedProducts = ref<string[]>(['legumes'])
const season = ref('')
const distribution = ref('')
const selectedSlug = ref('')
const seasonalNotes = ['Printemps : jeunes legumes, plants, asperges selon les zones.', 'Ete : fruits, legumes, boissons et produits transformes.', 'Automne : conservation, miel, pain, produits de garde.', 'Hiver : paniers plus simples, produits transformes, entraide logistique.']

const matchingResources = computed<Resource[]>(() => filterResources(demoResources, { ...DEFAULT_RESOURCE_FILTERS, product: selectedProducts.value[0] || '', season: season.value, distributionMode: distribution.value }))
const selectedResource = computed(() => matchingResources.value.find((resource) => resource.slug === selectedSlug.value) || null)

usePageSeo('Manger local dans le Medoc', 'Guide interactif pour composer un panier local dans le Medoc et chercher des ressources verifiees progressivement.')
</script>

<style scoped>
@reference "~/assets/css/main.css";
.LocalFoodGrid,.ResourceMatches { padding-block: var(--section-padding-soft); @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8; }
.Chooser { @apply grid gap-5 rounded-[1.5rem] bg-white/70 p-5 sm:p-6; }
.BasketChooser { background-image: radial-gradient(circle at 12% 18%, rgb(255 107 53 / 0.12), transparent 26%), linear-gradient(135deg, rgb(47 107 63 / 0.08), transparent 48%); }
.Chooser fieldset { @apply grid gap-3 md:grid-cols-2; }
.Chooser legend,.Chooser span { @apply mb-2 font-black; }
.Chooser label { @apply flex items-center gap-3 font-semibold; }
.Chooser > label { @apply grid items-start; }
.Chooser input[type="checkbox"] { @apply size-5 accent-orange-600; }
.Chooser select { @apply min-h-12 rounded-xl border border-black/10 bg-white px-4; }
.BasketResult { @apply bg-teal-900; }
.ResultEyebrow { @apply text-sm font-black uppercase tracking-[0.18em] text-orange-600; }
.ToolResult h2,.ResourceMatches h2 { @apply text-3xl font-black; }
.BasketList { @apply mt-6 flex flex-wrap gap-2; }
.BasketList li { @apply rounded-full bg-white px-4 py-2 font-bold text-black; }
.BasketRoute { @apply mt-6 border-t border-white/15 pt-5 text-white/75; }
.ResultLink { @apply mt-6 inline-flex rounded-full bg-orange-600 px-5 py-3 font-bold text-white; }
.ResourceIntro { @apply self-start; }
.ResourceIntro p { @apply mt-4 text-lg leading-8 text-black/70; }
.EditorialBlock { padding-block: var(--section-padding-soft); @apply mx-auto max-w-5xl px-4 sm:px-6 lg:px-8; }
.EditorialBlock h2 { @apply text-4xl font-black; }
.EditorialBlock p { @apply mt-5 text-lg leading-8 text-black/70; }
.SeasonGrid { @apply mt-6 grid gap-3 md:grid-cols-2; }
.SeasonGrid p { border: 1px solid rgb(47 107 63 / 0.1); @apply rounded-2xl bg-white/60 p-5; }
.SeasonGrid p:nth-child(odd) { @apply translate-y-0 md:translate-y-4; }
.EditorialBlock a { @apply mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 font-bold text-white; }
.FoodEditorial { @apply relative; }
@media (min-width: 640px) {
  .Chooser > label { @apply flex items-center; }
}
@media (max-width: 640px) {
  .BasketResult :deep(.RevealOnScroll--right),
  .ResourceMatches :deep(.RevealOnScroll--left),
  .ResourceMatches :deep(.RevealOnScroll--right) { transform: none; }
}
</style>
