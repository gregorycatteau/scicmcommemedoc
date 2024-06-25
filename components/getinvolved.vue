<template>
  <div class="form-container">
    <div class="formwrapper">
      <div class="titling">
        <h1 class="title">Nous sommes ravis que vous vous intéressiez à <br><span class="titleemphaser">M Comme Médoc</span></h1>
        <h2 class="subtitle">Afin de vous diriger au mieux, veuillez remplir le formulaire ci-dessous pour nous en dire plus sur vous</h2>
      </div>

      <div class="formsubwrapper">
        <form @submit.prevent="handleSubmit" class="form">
          <div class="input-group">
            <label for="userType" class="label-type">Quel est votre profil ?</label>
            <select id="userType" name="userType" v-model="userType" required class="select-style">
              <option disabled value="" class="disabledoption">Choisissez une option</option>
              <option value="individual" class="validoption">Je suis un particulier</option>
              <option value="family" class="validoption">Je représente un foyer familial</option>
              <option value="entrepreneur" class="validoption">Je suis auto entrepreneur</option>
              <option value="association" class="validoption">Je représente une association</option>
              <option value="enterprise" class="validoption">Je représente une entreprise</option>
              <option value="institution" class="validoption">Je représente une collectivité</option>
            </select>

            <!-- Options pour Individual -->
            <label v-if="userType === 'individual'" class="label-type">Que recherchez-vous ?</label>
            <select v-if="userType === 'individual'" v-model="individualChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez votre type d'engagement</option>
              <option value="individualExternalClient" class="validoption">Devenir client externe de la SCIC</option>
              <option value="individualShareholder" class="validoption">Devenir sociétaire de la SCIC</option>
              <option value="individualConsumActor" class="validoption">Devenir consom'acteur de la SCIC</option>
              <option value="financialInvestment" class="validoption">Investir financièrement dans la SCIC</option>
            </select>

            <!-- Options pour Family -->
            <label v-if="userType === 'family'" class="label-type">Que recherchez-vous ?</label>
            <select v-if="userType === 'family'" v-model="familyChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez votre type d'engagement</option>
              <option value="familyExternalClient" class="validoption">Devenir client externe de la SCIC</option>
              <option value="familyShareholder" class="validoption">Devenir sociétaire de la SCIC</option>
              <option value="familyConsumActor" class="validoption">Devenir consom'acteur de la SCIC</option>
              <option value="financialInvestment" class="validoption">Investir financièrement dans la SCIC</option>
            </select>

            <!-- Options pour Entrepreneur -->
            <label v-if="userType === 'entrepreneur'" class="label-type">Pouvez-vous nous en dire plus ?</label>
            <select v-if="userType === 'entrepreneur'" v-model="entrepreneurChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez votre type de profil</option>
              <option value="servicesEntrepreneur" class="validoption">Je suis prestataire de services dans le secteur marchand classique</option>
              <option value="productionEntrepreneur" class="validoption">Je suis producteur dans le secteur marchand classique</option>
              <option value="socialEntrepreneur" class="validoption">Je propose des services ou des produits d'utilité sociale</option>
              <option value="ecologicalEntrepreneur" class="validoption">Je propose des services ou des produits écologiques</option>
            </select>

            <!-- Sous-options pour Entrepreneur -->
            <template v-if="userType === 'entrepreneur'">
              <label v-if="entrepreneurChoice === 'servicesEntrepreneur'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="entrepreneurChoice === 'servicesEntrepreneur'" v-model="servicesEntrepreneurChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="servicesProviderEntrepreneur" class="validoption">Je voudrais proposer mes services à la SCIC en tant que fournisseur</option>
                <option value="servicesActorEntrepreneur" class="validoption">Je voudrais devenir acteur et proposer mes services aux clients de la SCIC</option>
                <option value="servicesPartenActorEntrepreneur" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="financialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="entrepreneurChoice === 'productionEntrepreneur'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="entrepreneurChoice === 'productionEntrepreneur'" v-model="productionEntrepreneurChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="productionProviderEntrepreneur" class="validoption">Je voudrais vendre mes produits à la SCIC</option>
                <option value="productionActorEntrepreneur" class="validoption">Je voudrais devenir acteur et proposer mes produits aux clients de la SCIC</option>
                <option value="productionPartenActorEntrepreneur" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="financialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="entrepreneurChoice === 'socialEntrepreneur'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="entrepreneurChoice === 'socialEntrepreneur'" v-model="socialEntrepreneurChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="socialProviderEntrepreneur" class="validoption">Je voudrais proposer mes compétences à la SCIC</option>
                <option value="socialActorEntrepreneur" class="validoption">Je voudrais devenir acteur et proposer mes services aux clients de la SCIC</option>
                <option value="socialPartenActorEntrepreneur" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="financialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="entrepreneurChoice === 'ecologicalEntrepreneur'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="entrepreneurChoice === 'ecologicalEntrepreneur'" v-model="ecologicalEntrepreneurChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="ecologicalProviderEntrepreneur" class="validoption">Je voudrais proposer mes produits ou services à la SCIC en tant que fournisseur</option>
                <option value="ecologicalActorEntrepreneur" class="validoption">Je voudrais devenir acteur et proposer mes produits ou services aux clients de la SCIC</option>
                <option value="ecologicalPartenActorEntrepreneur" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="financialInvestment" class="validoption">Je voudrais investir dans la SCIC</option>
              </select>
            </template>

            <!-- Options pour Association -->
            <label v-if="userType === 'association'" class="label-type">Pouvez-vous nous en dire plus ?</label>
            <select v-if="userType === 'association'" v-model="associationChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez votre type de profil</option>
              <option value="socialAssociation" class="validoption">Je représente une association du secteur social</option>
              <option value="ecologicalAssociation" class="validoption">Je représente une association du secteur écologique</option>
              <option value="otherAssociation" class="validoption">Je représente une association d'un autre secteur</option>
            </select>

            <!-- Sous-options pour Association -->
            <template v-if="userType === 'association'">
              <label v-if="associationChoice === 'socialAssociation'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="associationChoice === 'socialAssociation'" v-model="socialAssociationChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="socialProviderAssociation" class="validoption">Je voudrais que la SCIC nous aide à développer nos actions</option>
                <option value="socialActorAssociation" class="validoption">Je voudrais que notre association développe des actions pour les bénéficiaires de la SCIC</option>
                <option value="socialPartenActorAssociation" class="validoption">Je voudrais que notre association s'investisse dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="associationFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="associationChoice === 'ecologicalAssociation'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="associationChoice === 'ecologicalAssociation'" v-model="ecologicalAssociationChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="ecologicalProviderAssociation" class="validoption">Je voudrais que la SCIC nous aide à développer nos actions</option>
                <option value="ecologicalActorAssociation" class="validoption">Je voudrais que notre association développe des actions pour les bénéficiaires de la SCIC</option>
                <option value="ecologicalPartenActorAssociation" class="validoption">Je voudrais que notre association s'investisse dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="associationFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="associationChoice === 'otherAssociation'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="associationChoice === 'otherAssociation'" v-model="otherAssociationChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="otherProviderAssociation" class="validoption">Je voudrais que la SCIC nous aide à développer nos actions</option>
                <option value="otherActorAssociation" class="validoption">Je voudrais que notre association développe des actions pour les bénéficiaires de la SCIC</option>
                <option value="otherPartenActorAssociation" class="validoption">Je voudrais que notre association s'investisse dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="associationFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>
            </template>

            <!-- Options pour Entreprise -->
            <label v-if="userType === 'enterprise'" class="label-type">Pouvez-vous nous en dire plus ?</label>
            <select v-if="userType === 'enterprise'" v-model="enterpriseChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez votre type de profil</option>
              <option value="normalServiceEntreprise" class="validoption">Je représente une entreprise prestataire de services</option>
              <option value="normalProductionEntreprise" class="validoption">Je représente une entreprise productrice locale</option>
              <option value="EsusSocialentreprise" class="validoption">Je représente une entreprise ESUS du secteur social</option>
              <option value="EsusEcologicalentreprise" class="validoption">Je représente une entreprise ESUS du secteur écologique</option>
            </select>

            <!-- Sous-options pour Entreprise -->
            <template v-if="userType === 'enterprise'">
              <label v-if="enterpriseChoice === 'normalServiceEntreprise'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="enterpriseChoice === 'normalServiceEntreprise'" v-model="serviceEntrepriseChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="servicesProviderEntreprise" class="validoption">Je voudrais proposer mes services à la SCIC en tant que fournisseur</option>
                <option value="servicesActorEntreprise" class="validoption">Je voudrais devenir acteur et proposer mes services aux clients de la SCIC</option>
                <option value="servicesPartenActorEntreprise" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="entrepriseFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="enterpriseChoice === 'normalProductionEntreprise'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="enterpriseChoice === 'normalProductionEntreprise'" v-model="productionEntrepriseChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="productionProviderEntreprise" class="validoption">Je voudrais vendre mes produits à la SCIC</option>
                <option value="productionActorEntreprise" class="validoption">Je voudrais devenir acteur et proposer mes produits aux clients de la SCIC</option>
                <option value="productionPartenActorEntreprise" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="entrepriseFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="enterpriseChoice === 'EsusSocialentreprise'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="enterpriseChoice === 'EsusSocialentreprise'" v-model="EsusSocialEntrepriseChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="socialProviderEntreprise" class="validoption">Je voudrais proposer nos compétences à la SCIC</option>
                <option value="socialActorEntreprise" class="validoption">Je voudrais devenir acteur et proposer mes services aux clients de la SCIC</option>
                <option value="socialPartenActorEntreprise" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="esusFinancialInvestment" class="validoption">Je voudrais devenir partenaire financier de la SCIC</option>
              </select>

              <label v-if="enterpriseChoice === 'EsusEcologicalentreprise'" class="label-type">Quelle serait votre demande?</label>
              <select v-if="enterpriseChoice === 'EsusEcologicalentreprise'" v-model="EsusEcologicalEntrepriseChoice" required class="select-style">
                <option disabled value="" class="disabledoption">Sélectionnez le type d'interaction qui vous convient</option>
                <option value="ecologicalProviderEntreprise" class="validoption">Je voudrais proposer mes produits ou services à la SCIC en tant que fournisseur</option>
                <option value="ecologicalActorEntreprise" class="validoption">Je voudrais devenir acteur et proposer mes produits ou services aux clients de la SCIC</option>
                <option value="ecologicalPartenActorEntreprise" class="validoption">Je voudrais m'investir dans la SCIC et développer des projets communs (parten'acteur)</option>
                <option value="esusFinancialInvestment" class="validoption">Je voudrais investir dans la SCIC</option>
              </select>
            </template>

            <!-- Options pour Institution -->
            <label v-if="userType === 'institution'" class="label-type">Que recherchez-vous ?</label>
            <select v-if="userType === 'institution'" v-model="institutionChoice" required class="select-style">
              <option disabled value="" class="disabledoption">Sélectionnez le type d'engagement</option>
              <option value="institutionPublicRepresentation" class="validoption">Représenter une collectivité locale</option>
              <option value="institutionCollaborativeProject" class="validoption">Collaborer sur un projet spécifique avec la SCIC</option>
              <option value="institutionActiveParticipationInGovernance" class="validoption">Participer activement à la gouvernance de la SCIC</option>
              <option value="institutionFinancialSupport" class="validoption">Apporter un soutien financier à la SCIC</option>
            </select>
          </div>

          <div class="button-wrapper">
            <button type="submit" class="submit-button">Soumettre</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 ' }">
      <template #header>
        <div class="modaltitlewrapper">
          <p class="sumupmodaltitle">Résumons notre échange</p>
          <p class="modalsummary">D'après votre saisie, l'aventure M Comme Médoc semble vous intéresser</p>
          <h2 class="membershipoption">{{ selectedMembership && selectedMembership.title }}</h2>
          <p class="modalsummary">Vous avez donc pour ambition de prendre votre place au sein de M Comme Médoc.</p>
          <h2 class="membershipoption">{{ selectedMembership && selectedMembership.description }}</h2>
          <p class="modalsummary">Dans votre cas, votre collège d'appartenance serait celui des :</p>
          <div class="membershipoption">{{ selectedMembership && selectedMembership.collegeName }}</div>
        </div>
      </template>
      <div>
        <p class="sumupmodaltitle">Qu'est-ce que cela implique pour vous ?</p>
        <p class="modalsummary">Au titre de membre du collège {{ selectedMembership && selectedMembership.collegeName }}, vous pourriez bénéficier des avantages suivants :</p>
        <ul class="beneficelist">
          <li v-for="benefit in selectedMembership?.benefits" :key="benefit" class="beneficelistitems">{{ benefit }}</li>
        </ul>
        <p class="sumupmodaltitle">Conditions pour devenir membre du collège {{ selectedMembership && selectedMembership.collegeName }}</p>
        <p v-if="selectedMembership && !selectedMembership.isactionnary" class="membershipcondition">
          Vous n'êtes pas tenu de souscrire de part sociale. Vous êtes libre de bénéficier de tous les avantages que nous offrons. En toute liberté et sans le moindre engagement financier ou moral.
        </p>
        <p v-else class="membershipcondition">
          Vous devez devenir sociétaire en faisant l'acquisition de <span class="emphaser">{{ selectedMembership && selectedMembership.minactions }}</span> part(s) sociale(s) d'un montant total de 50 euros.
        </p>
        <p v-if="selectedMembership && selectedMembership.isactionnary" class="membershipcondition">
  Ce qui vous ferait donc, un total de <span class="emphaser">{{ selectedMembership.minactions * 50 }}</span> euros.
</p>
        <p v-if="selectedMembership && selectedMembership.isactivemember" class="membershipcondition">
          En tant que membre actif du collège des {{ selectedMembership && selectedMembership.collegeName }}, vous avez également la possibilité de vous inscrire dans le programme de réciprocité de services.</p>  
      </div>

      <template #footer>
        <div class="h-8"></div>
      </template>
      <div class="buttonwrapper">
      <NuxtLink to="/test" class="validationbutton">Poursuivre la demande d'adhésion</NuxtLink>
      <button class="cancelbutton">Revenir</button>
    </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import processFormSchema from '@/schema/processFormSchemaDeep';
import membership from "@/data/membership";

const isOpen = ref(false);
const userType = ref('');
const individualChoice = ref('');
const familyChoice = ref('');
const entrepreneurChoice = ref('');
const associationChoice = ref('');
const enterpriseChoice = ref('');
const institutionChoice = ref('');
const servicesEntrepreneurChoice = ref('');
const productionEntrepreneurChoice = ref('');
const socialEntrepreneurChoice = ref('');
const ecologicalEntrepreneurChoice = ref('');
const socialAssociationChoice = ref('');
const ecologicalAssociationChoice = ref('');
const otherAssociationChoice = ref('');
const serviceEntrepriseChoice = ref('');
const productionEntrepriseChoice = ref('');
const EsusSocialEntrepriseChoice = ref('');
const EsusEcologicalEntrepriseChoice = ref('');

const errorMessage = ref('');

const store = useUserStore();

const selectedMembership = computed(() => {
  const userSelection = {
    individual: individualChoice,
    family: familyChoice,
    entrepreneur: entrepreneurChoice,
    association: associationChoice,
    institution: institutionChoice,
    servicesEntrepreneur: servicesEntrepreneurChoice,
    productionEntrepreneur: productionEntrepreneurChoice,
    socialEntrepreneur: socialEntrepreneurChoice,
    ecologicalEntrepreneur: ecologicalEntrepreneurChoice,
    socialAssociation: socialAssociationChoice,
    ecologicalAssociation: ecologicalAssociationChoice,
    otherAssociation: otherAssociationChoice,
    serviceEntreprise: serviceEntrepriseChoice,
    productionEntreprise: productionEntrepriseChoice,
    EsusSocialEntreprise: EsusSocialEntrepriseChoice,
    EsusEcologicalEntreprise: EsusEcologicalEntrepriseChoice
  };

  const userTypeValue = userType.value as keyof typeof userSelection;
  const choiceId = userSelection[userTypeValue]?.value;
  const membershipOptions = membership[userTypeValue];
  if (!membershipOptions) {
    console.error("No membership options found for type:", userTypeValue);
    return null;
  }

  const selectedOption = membershipOptions.find(option => option.id === choiceId);
  if (!selectedOption) {
    console.error("No matching membership option found for ID:", choiceId);
    return null;
  }

  return selectedOption;
});

function handleSubmit() {
  let choiceDetails;

  switch (userType.value) {
    case 'individual':
      choiceDetails = individualChoice.value;
      break;
    case 'family':
      choiceDetails = familyChoice.value;
      break;
    case 'institution':
      choiceDetails = institutionChoice.value;
      break;
    case 'entrepreneur':
      choiceDetails = {
        entrepreneurChoice: entrepreneurChoice.value,
        servicesEntrepreneurChoice: servicesEntrepreneurChoice.value || undefined,
        productionEntrepreneurChoice: productionEntrepreneurChoice.value || undefined,
        socialEntrepreneurChoice: socialEntrepreneurChoice.value || undefined,
        ecologicalEntrepreneurChoice: ecologicalEntrepreneurChoice.value || undefined,
      };
      break;
    case 'association':
      choiceDetails = {
        associationChoice: associationChoice.value,
        socialAssociationChoice: socialAssociationChoice.value || undefined,
        ecologicalAssociationChoice: ecologicalAssociationChoice.value || undefined,
        otherAssociationChoice: otherAssociationChoice.value || undefined,
      };
      break;
    case 'enterprise':
      choiceDetails = {
        enterpriseChoice: enterpriseChoice.value,
        serviceEntrepriseChoice: serviceEntrepriseChoice.value || undefined,
        productionEntrepriseChoice: productionEntrepriseChoice.value || undefined,
        EsusSocialEntrepriseChoice: EsusSocialEntrepriseChoice.value || undefined,
        EsusEcologicalEntrepriseChoice: EsusEcologicalEntrepriseChoice.value || undefined,
      };
      break;
    default:
      isOpen.value = false;
      console.error("Type d'utilisateur non géré");
      return;
  }

  const formData = {
    userType: userType.value,
    choiceDetails: choiceDetails
  };

  const result = processFormSchema.safeParse(formData);
  if (result.success) {
    store.setUserType(userType.value);
    store.setIndividualChoice(individualChoice.value);
    store.setFamilyChoice(familyChoice.value);
    store.setEntrepreneurChoice(entrepreneurChoice.value);
    store.setServicesEntrepreneurChoice(servicesEntrepreneurChoice.value);
    store.setProductionEntrepreneurChoice(productionEntrepreneurChoice.value);
    store.setSocialEntrepreneurChoice(socialEntrepreneurChoice.value);
    store.setEcologicalEntrepreneurChoice(ecologicalEntrepreneurChoice.value);
    store.setAssociationChoice(associationChoice.value);
    store.setSocialAssociationChoice(socialAssociationChoice.value);
    store.setEcologicalAssociationChoice(ecologicalAssociationChoice.value);
    store.setOtherAssociationChoice(otherAssociationChoice.value);
    store.setEnterpriseChoice(enterpriseChoice.value);
    store.setServiceEntrepriseChoice(serviceEntrepriseChoice.value);
    store.setProductionEntrepriseChoice(productionEntrepriseChoice.value);
    store.setEsusSocialEntrepriseChoice(EsusSocialEntrepriseChoice.value);
    store.setEsusEcologicalEntrepriseChoice(EsusEcologicalEntrepriseChoice.value);
    store.setInstitutionChoice(institutionChoice.value);
    isOpen.value = true;
    console.log("Données validées avec succès et traitées");
    errorMessage.value = '';
  } else {
    isOpen.value = false;
    console.error("Erreurs de validation:", result.error.flatten());
    errorMessage.value = "Erreur de validation: " + JSON.stringify(result.error.flatten().fieldErrors, null, 2);
  }
}
</script>

<style scoped>
.form-container {
  @apply flex flex-col items-center justify-center min-h-screen p-4;
  background-image: url('/agreement.png');
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
}
.formwrapper {
  @apply bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-70 flex flex-col;
}
.titling {
  @apply mb-8;
}
.title {
  @apply text-4xl text-scicgreen font-semibold text-center;
}
.subtitle {
  @apply text-lg text-scicgreen font-semibold text-center;
}
.form {
  @apply w-full max-w-md flex flex-col items-center justify-center gap-4;
}
.formsubwrapper {
  @apply flex flex-col items-center justify-center gap-4;
}
.input-group {
  @apply mb-4 w-full max-w-md;
}

.label-type {
  @apply block text-sm font-medium text-scicgreen mb-1 text-center;
}

.select-input {
  @apply mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-scicgreen focus:border-scicgreen sm:text-sm rounded-md;
}
.select-style {
  @apply mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-scicgreen focus:border-scicgreen sm:text-sm rounded-md;
}

.button-wrapper {
  @apply flex justify-center w-full mt-4;
}

.submit-button {
  @apply bg-scicgreen text-white font-semibold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50;
}
.titleemphaser
{
  font-family: 'Permanent Marker', cursive;
color: #F26612;
}
.modaltitlewrapper {
  @apply p-4 bg-slate-50 shadow-lg shadow-[scicgreen] rounded-2xl;
}
.beneficelist {
  @apply text-justify text-scicorange my-4 p-4 indent-2 list-disc list-outside;
}
.sumupmodaltitle {
  @apply text-center text-scicgreen bg-slate-100 p-4 rounded-2xl text-balance text-2xl font-semibold shadow-lg;
}
.modalsummary {
  @apply text-justify text-scicorange my-4 p-4 indent-2;
}
.membershipoption {
  @apply text-center text-scicgreen bg-slate-100 p-4 rounded-2xl text-balance text-2xl font-semibold shadow-lg;
}
.membershipcondition {
  @apply text-justify text-scicorange my-4 p-4 indent-2;
}
.buttonwrapper {
  @apply flex justify-between w-full  gap-4;
}
.validationbutton {
  @apply bg-scicgreen text-white font-semibold py-2 px-4 rounded hover:bg-scicorange focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50;
}
.cancelbutton {
  @apply bg-scicorange text-white font-semibold py-2 px-4 rounded hover:bg-scicpurple focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50;
}
</style>

