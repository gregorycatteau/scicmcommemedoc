<template>
  <div class="p-6">
    <UTable :columns="columns" :rows="colleges">
      <template #row="{ row, index }">
        <tr :class="rowClass(row, index)">
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
  { category: 'Bénéficiaires', college:'Bénéficiaires directs',type: 'Clients internes sans contrepartie d\'implication active', description: '1 part pour individu, 2 parts pour un foyer' },
  { category: 'Bénéficiaires', college:'Consom\'acteurs', type: 'Bénéficiaires avec implication active', description: '2 parts pour participation' },
  { category: 'Acteurs', college:'Partenaires de services',type: 'Partenaires développant l\'offre de service', description: '5 parts pour individus et associations, 10 parts pour entreprises' },
  { category: 'Acteurs', college:'Fournisseurs locaux',type: 'Partenaires fournissant des produits locaux', description: '5 parts pour individus et associations, 10 parts pour entreprises' },
  { category: 'Acteurs', college:'Parten\'acteurs',type: 'Partenaires avec implication active', description: '2 parts sociales pour les individus ou associations, 5 parts/entreprise' },
  { category: 'Acteurs', college:'Salariés', type: 'Futurs salariés de la SCIC', description: 'Pas d\'obligation' },
  { category: 'Autres', college: 'Partenaires Financiers', type:'Personnes souhaitant contribuer à la scic par le biais de parts sociales',description: '20 parts pour individus, 50 parts pour autres' },
  { category: 'Autres', college:'Partenaires Écologiques', type: 'Acteurs travaillant sur l\'aspect écologique avec la SCIC', description: '5 parts pour associations, 20 parts pour entreprises' },
  { category: 'Autres', college:'Partenaires Institutionnels', type: 'Institutions partenaires, comme les mairies', description: '10 parts' },
  { category: 'Autres', college:'Partenaires Sociaux', type: 'Associations d\'usagers et autres collectifs sociaux', description: '1 part pour individus, 10 parts pour collectifs' }
]);

const columns = ref([
  { key: 'category', label: 'Catégorie de Sociétaires', class: 'text-center pl-4 bg-scicgreen text-scicblue text-bold p-4' },
  { key: 'college', label: 'Collège', class: 'text-center pl-4 bg-scicgreen text-scicblue text-bold p-4'},
  { key: 'type', label: 'Description', class: 'text-center pl-4 bg-scicgreen text-scicblue text-bold p-4' },
  { key: 'description', label: 'Parts Sociales Minimales', class: 'pl-4 bg-scicgreen text-scicblue text-bold p-4' },
  
]);
</script>
<style scoped>

tr {
  @apply border-b border-gray-200 bg-scicgreen;
}

tr:hover {
  background-color: #f3f4f6; /* Light gray background on hover */
}

td {
  border-bottom: 1px solid #ddd; /* Adds a bottom border to all cells */
}
</style>
