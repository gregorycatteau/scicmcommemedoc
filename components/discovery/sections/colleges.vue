<template>
  <div class="table-wrapper">
    <UTable :columns="columns" :rows="colleges">
      <template #row="{ row, index }">
        <tr :class="getRowClass(row, index)">
          <td class="p-4">{{ row.category }}</td>
          <td class="p-4">{{ row.college }}</td>
          <td class="p-4">{{ row.type }}</td>
          <td class="p-4">{{ row.description }}</td>
        </tr>
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colleges = ref([
  { category: 'Salariés ou Producteurs', college:'Salariés ou Producteurs de biens ou services', type: 'Actifs au sein de la coopérative', description: '30% des droits de vote' },
  { category: 'Bénéficiaires Directs et Fournisseurs Locaux', college:'Bénéficiaires directs et Fournisseurs locaux', type: 'Bénéficiaires directs et partenaires locaux', description: '10% des droits de vote' },
  { category: 'Consomm\'acteurs', college:'Consomm\'acteurs impliqués', type: 'Bénéficiaires impliqués activement', description: '30% des droits de vote' },
  { category: 'Partenaires Financiers et Collectivités', college:'Partenaires financiers et Collectivités territoriales', type: 'Financeurs privés et entités publiques', description: '20% des droits de vote' },
  { category: 'Autres Catégories', college:'Autres catégories d\'associés', type: 'Diverses autres catégories', description: '10% des droits de vote' }
]);

const columns = ref([
  { key: 'category', label: 'Catégorie de Sociétaires', class: 'text-center pl-4 text-bold p-4' },
  { key: 'college', label: 'Collège', class: 'text-center pl-4 text-bold p-4'},
  { key: 'type', label: 'Description', class: 'text-center pl-4 text-bold p-4' },
  { key: 'description', label: 'Droits de Vote', class: 'pl-4 text-bold p-4' },
]);

function getRowClass(row: any, index: number) {
  return '';
}
</script>

<style scoped>
.table-wrapper {
  @apply overflow-x-auto p-10;
}

tr {
  @apply border-b border-gray-200;
}

tr:hover {
  @apply bg-gray-100;
}

td {
  @apply border-b border-gray-300 p-4;
}

@media (max-width: 640px) {
  td {
    @apply p-2 text-sm;
  }
  .heading, .footing {
    @apply text-xs;
  }
}
</style>


