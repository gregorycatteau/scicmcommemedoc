<template>
  <div class="home">
    <WelcomingHeroSection />
    <MissionSection />
    <InitiativesSection />
    <Polesection />
    <JoinSection />
    <SoutenirSection />
  </div>
</template>

<script>
import WelcomingHeroSection from '~/components/welcomingherosection.vue'
import MissionSection from '@/components/mission.vue'
import InitiativesSection from '@/components/initiatives.vue'
import Polesection from '@/components/poles.vue'
import JoinSection from '@/components/join.vue'
import SoutenirSection from '@/components/soutenir.vue'

export default {
  name: 'HomePage',
  components: {
    WelcomingHeroSection,
    MissionSection,
    InitiativesSection,
    Polesection,
    JoinSection,
    SoutenirSection
  }
}
</script>

<style>

</style>
