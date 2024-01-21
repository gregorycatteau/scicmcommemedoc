<template>
  <footer>
    <div class="logo">
      <!-- Insérer le logo ici -->
    </div>
    <div class="links">
      <router-link to="/contact">Contact</router-link>
      <router-link to="/privacy-policy">Politique de confidentialité</router-link>
    </div>
    <p>SCIC M Comme Médoc, tous droits réservés</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  // Logique du composant
}
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
