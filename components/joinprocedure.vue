<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-center mb-8">Comment Rejoindre la SCIC M Comme Médoc</h1>
    <p class="text-lg text-gray-700 mb-6">
      Nous sommes ravis que vous envisagiez de rejoindre notre coopérative et de participer activement à nos projets de développement durable et solidaire. Voici les étapes simples pour devenir membre :
    </p>

    <div class="space-y-4">
      <div class="step">
        <h2 class="step-title">Inscription en ligne</h2>
        <p>
          Remplissez le formulaire d'inscription disponible sur notre site. Vous devrez fournir vos informations personnelles et exprimer votre intérêt pour l'un des types de membres : consommateur, bénévole ou investisseur.
        </p>
      </div>
      <div class="step">
        <h2 class="step-title">Réception du Dossier</h2>
        <p>
          Une fois votre formulaire soumis, vous recevrez un dossier d'adhésion à compléter, incluant la charte des valeurs de la SCIC et des informations détaillées sur les droits et responsabilités des membres.
        </p>
      </div>
      <div class="step">
        <h2 class="step-title">Paiement de la Cotisation</h2>
        <p>
          Validez votre adhésion par le paiement de la cotisation annuelle. Le montant varie selon le type de membre que vous souhaitez devenir. Ce paiement peut se faire en ligne ou par chèque.
        </p>
      </div>
      <div class="step">
        <h2 class="step-title">Confirmation et Intégration</h2>
        <p>
          Après réception de votre cotisation, votre adhésion sera confirmée par email. Vous serez ensuite invité à participer à une session d'orientation pour nouveaux membres où vous rencontrerez notre équipe et en apprendrez davantage sur vos futures contributions et engagements.
        </p>
      </div>
      <div class="step">
        <h2 class="step-title">Engagement Actif</h2>
        <p>
          Engagez-vous dans les activités de la SCIC selon votre disponibilité et vos intérêts. Nous encourageons tous nos membres à participer activement à nos projets et à nos décisions collectives.
        </p>
      </div>

      <div class="text-center mt-8">
        <a href="#" class="join-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Rejoignez-nous aujourd'hui
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TypeScript script setup if needed for additional logic
</script>

<style scoped>
.container {
  max-width: 800px;
}

.step-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.step {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.join-link {
  transition: background-color 0.3s ease;
}
</style>
