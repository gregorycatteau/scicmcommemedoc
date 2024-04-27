<template>
  <div class="mainwrapper">
    <h1 class="maintitle">Membres Fondateurs</h1>
    <div class="cardwrapper">
      <div v-for="member in members" :key="member.name" class="team-member-card">
        <div class="overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
          <img :src="member.photo" alt="Photo de profil" class="w-full h-64 object-cover">
          <div class="p-4 bg-white">
            <h2 class="text-xl font-semibold">{{ member.name }}</h2>
            <p class="text-gray-500">{{ member.role }}</p>
            <p class="text-gray-700 mt-2">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Member {
  name: string;
  role: string;
  photo: string;
  description: string;
}

const members = ref<Member[]>([
  {
    name: 'Grégory Catteau',
    role: 'CEO',
    photo: '/images/gregory.jpg',
    description: 'Passionné par l\'innovation et le développement.'
  },
  {
    name: 'Catherine Durand',
    role: 'CTO',
    photo: '/members/Catherine.png',
    description: 'Dirige la technologie et les opérations.'
  },
  {
    name: 'François Moreau',
    role: 'CFO',
    photo: '/images/francois.jpg',
    description: 'Expert en finance et en gestion des risques.'
  },
  // Ajoutez les autres membres ici
]);

</script>

<style scoped>
.mainwrapper {
  @apply container mx-auto mt-20 px-6 py-12;
}
.maintitle {
  @apply text-3xl font-semibold text-center;
}
.cardwrapper {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.team-member-card:hover {
  cursor: pointer;
}
</style>
