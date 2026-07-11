<template>
  <MainWrapper>
    <Breadcrumbs :items="[{ label: 'Ressources' }]" />
    <LongTailHero
      kicker="Wiki ressources"
      title="Chercher, verifier et corriger les ressources utiles du territoire."
      description="Cette route historique devient l entree ressources du Wiki. Les donnees visibles restent des exemples fictifs tant qu elles ne sont pas remplacees par des informations verifiees."
      promise="Une recherche locale utilisable, avec statuts de verification visibles."
      tone="clay"
    />

    <section class="DemoNotice">
      <strong>Données de démonstration</strong>
      <p>Aucune fiche ci-dessous ne represente une adresse reelle. Les donnees verifiees remplaceront ce fichier local progressivement.</p>
      <NuxtLink to="/wiki">Comprendre le role du Wiki operationnel</NuxtLink>
    </section>

    <section class="ResourcesWorkspace">
      <div class="SearchColumn">
        <ResourceSearchBar v-model="filters.query" />
        <ResourceFilters :filters="filters" :facets="facets" @update="updateFilters" @reset="resetFilters" />
        <ResourceList :resources="result.items" :total="result.total" @select="selectResource" @reset="resetFilters" />
      </div>

      <aside class="SideColumn">
        <ResourceMap :resources="result.items" @select="selectResource" />
        <ResourceDetail :resource="selectedResource" @close="selectedSlug = ''" @report="openReport" />
      </aside>
    </section>

    <section class="ContributionGrid">
      <ResourceSubmitForm />
      <ResourceReportForm :resource-slug="reportSlug" />
    </section>

    <section class="EditorialSection">
      <h2>Comment utiliser cette plateforme sans se tromper</h2>
      <div>
        <article>
          <h3>Verifier avant de se deplacer</h3>
          <p>Les horaires, prix et disponibilites changent vite. Une fiche non verifiee doit servir de piste, pas de certitude.</p>
        </article>
        <article>
          <h3>Proposer une ressource utile</h3>
          <p>Une bonne contribution indique une source, une date de verification et ce qui rend la ressource utile localement.</p>
        </article>
        <article>
          <h3>Construire sans favoritisme</h3>
          <p>Etre reference ne signifie pas etre partenaire. Le statut de verification doit rester distinct de la relation avec M Comme Medoc.</p>
        </article>
      </div>
    </section>
  </MainWrapper>
</template>

<script setup lang="ts">
import type { Resource, ResourceFilters, ResourceSearchResult } from '~/types/resources'
import { DEFAULT_RESOURCE_FILTERS } from '~/utils/resources'

const repository = useResourceRepository()
const route = useRoute()
const router = useRouter()

const filters = reactive<ResourceFilters>({
  ...DEFAULT_RESOURCE_FILTERS,
  query: String(route.query.q || ''),
  resourceType: String(route.query.type || ''),
  category: String(route.query.categorie || ''),
  product: String(route.query.produit || ''),
  locality: String(route.query.commune || ''),
  distributionMode: String(route.query.distribution || ''),
})

const facets = await repository.facets()
const result = ref<ResourceSearchResult>(await repository.search(filters))
const selectedSlug = ref('')
const reportSlug = ref('')

const selectedResource = computed<Resource | null>(() => result.value.items.find((resource) => resource.slug === selectedSlug.value) || null)

async function refresh() {
  result.value = await repository.search(filters)
  const query: Record<string, string> = {}
  if (filters.query) query.q = filters.query
  if (filters.resourceType) query.type = filters.resourceType
  if (filters.category) query.categorie = filters.category
  if (filters.product) query.produit = filters.product
  if (filters.locality) query.commune = filters.locality
  if (filters.distributionMode) query.distribution = filters.distributionMode
  await router.replace({ query })
}

function updateFilters(partial: Partial<ResourceFilters>) {
  Object.assign(filters, partial)
  void refresh()
}

function resetFilters() {
  Object.assign(filters, DEFAULT_RESOURCE_FILTERS)
  selectedSlug.value = ''
  void refresh()
}

function selectResource(slug: string) {
  selectedSlug.value = slug
}

function openReport(slug: string) {
  reportSlug.value = slug
}

watch(() => filters.query, () => refresh())

usePageSeo(
  'Ressources utiles du Medoc',
  'Rechercher des ressources locales du Medoc avec filtres, statuts de verification, signalement et proposition de nouvelles fiches.',
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.DemoNotice {
  @apply mx-auto max-w-7xl rounded-[2rem] border border-clay/20 bg-white/70 px-6 py-5 sm:px-8;
}
.DemoNotice strong {
  @apply text-lg font-black text-clay;
}
.DemoNotice p {
  @apply mt-2 leading-7 text-ink/70;
}
.DemoNotice a {
  @apply mt-4 inline-flex rounded-full border border-clay/25 px-5 py-2.5 font-bold text-ink transition duration-500 hover:bg-ink hover:text-white;
}
.ResourcesWorkspace {
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.48fr] lg:px-8;
}
.SearchColumn,
.SideColumn {
  @apply grid content-start gap-5;
}
.ContributionGrid {
  padding-block: var(--section-padding-soft);
  @apply mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8;
}
.EditorialSection {
  padding-block: var(--section-padding-soft);
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}
.EditorialSection h2 {
  @apply text-4xl font-black leading-tight;
}
.EditorialSection > div {
  @apply mt-8 grid gap-4 md:grid-cols-3;
}
.EditorialSection article {
  @apply rounded-[2rem] bg-white/60 p-6;
}
.EditorialSection h3 {
  @apply text-2xl font-black;
}
.EditorialSection p {
  @apply mt-4 leading-7 text-ink/70;
}
</style>
