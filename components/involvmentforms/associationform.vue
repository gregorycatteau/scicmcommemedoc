<template>
  <div class="mainwrapper">
    <h2 class="title">Formulaire de contact</h2>
    <div class="containered">
      <img src="/contact.png" alt="Logo" class="image" />
      <UForm :schema="schema" :state="state" class="schema">
        <UFormGroup
          label="Nom de l'association"
          name="enterprisename"
          eager-validation
        >
          <UInput
            v-model="state.enterprisename"
            placeholder="Par exemple : Les amis de la forêt"
          />
        </UFormGroup>
        <UFormGroup label="Représentant légal" name="username" eager-validation>
          <UInput
            v-model="state.username"
            placeholder="Par exemple : Jean Dupont"
          />
        </UFormGroup>

        <UFormGroup
          label="Domaine d'activité"
          name="activityname"
          eager-validation
        >
          <UInput
            v-model="state.activityname"
            placeholder="Par exemple : randonnées dans les bois"
          />
        </UFormGroup>
        <UFormGroup label="Adresse" name="adressname" eager-validation>
          <UInput
            v-model="state.adressname"
            placeholder="Par exemple : 12 rue des Minguets ou Lieu dit Le chemin rouge"
          />
        </UFormGroup>
        <UFormGroup label="Code postal" name="postalcode" eager-validation>
          <UInput
            v-model="state.postalcode"
            placeholder="Par exemple : 33590"
          />
        </UFormGroup>
        <UFormGroup label="Ville" name="cityname" eager-validation>
          <UInput v-model="state.cityname" placeholder="Par exemple : Talais" />
        </UFormGroup>
        <UFormGroup label="Email" name="email" eager-validation>
          <UInput
            v-model="state.email"
            placeholder="Par exemple : jean.dupont@example.com"
          />
        </UFormGroup>
        <UFormGroup label="Numéro de téléphone" name="phone" eager-validation>
          <UInput
            v-model="state.phone"
            placeholder="Par exemple : 0123456789"
          />
        </UFormGroup>
        <UFormGroup label="Message" name="message" eager-validation>
          <UTextarea v-model="state.message" placeholder="Votre message..." />
        </UFormGroup>
      </UForm>
    </div>
    <MailSender v-if="mounted" :formData="state" :onSuccess="onEmailSent" />
    <gratefulMessage v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { z } from "zod";
import { reactive, ref, onMounted } from "vue";
import MailSender from "~/components/contact/mailsender.vue";
import GratefulMessage from "~/components/contact/gratefulmessage.vue";

const schema = z.object({
  username: z.string().min(2, "Doit contenir au moins 2 caractères") .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Le nom ne peut contenir que des lettres, des espaces, et des traits d'union"),
  enterprisename: z.string().min(2, "Doit contenir au moins 2 caractères") .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Le nom de l'association ne peut contenir que des lettres, des espaces, et des traits d'union"),
  activityname: z.string().min(2, "Doit contenir au moins 2 caractères"),
  adressname: z
    .string()
    .min(2, "Doit contenir au moins 2 caractères")
    .regex(
      /^\d+\s[A-Za-z\s]+|Lieu dit\s[A-Za-z\s]+|BP\s\d+|[A-Za-z\s]+$/,
      "Adresse invalide"
    ),
  postalcode: z
    .string()
    .length(5, "Le code postal doit contenir exactement 5 chiffres")
    .regex(/^\d{5}$/, "Code postal invalide"),
  cityname: z.string().min(2, "Doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().regex(/^\d{10}$/, "Numéro de téléphone invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

const state = reactive({
  username: "",
  enterprisename: "",
  activityname: "",
  adressname: "",
  postalcode: "",
  cityname: "",
  email: "",
  phone: "",
  message: "",
});

const mounted = ref(false);
const showModal = ref(false);

const onEmailSent = () => {
  // Réinitialise le formulaire
  state.username = "";
  state.enterprisename = "";
  state.activityname = "";
  state.adressname = "";
  state.postalcode = "";
  state.cityname = "";
  state.email = "";
  state.phone = "";
  state.message = "";

  // Affiche le modal de remerciement
  showModal.value = true;
};

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped>
.mainwrapper {
  @apply flex flex-col justify-center items-center h-full;
}
.title {
  @apply text-2xl text-scicgreen font-bold;
}
.containered {
  @apply flex flex-row gap-4 justify-center items-center w-10/12 my-3 p-3 border border-solid border-scicgreen rounded-lg shadow-lg bg-transparent;
}
.image {
  @apply w-44 rounded-2xl;
}
.schema {
  @apply bg-white opacity-85 p-4 rounded-lg shadow-lg w-9/12 mx-auto;
}
</style>
