<template>
  <div class="wrapper">
    <div class="internalwrapper">
      <UCard class="ucarding">
        <template #header class="heading">
          <div class="internalorganizer">
            <div class="textual">
              <h1 class="title1">M Comme Médoc</h1>
              <h2 class="subtitle">
                Une coopérative<br />
                <span class="wordwrapper">{{ currentWord }}</span> <br />engagée
              </h2>
            </div>
            <img
              src="/wallpaper3.png"
              alt="photo d'illustration naturelle"
              class="heroimage"
            />
          </div>
        </template>
        <div class="first">
          <h1 class="title">C'est quoi une SCIC ?</h1>
          <p class="developpement">
            Une Société Coopérative d'Intérêt Collectif (SCIC) est une forme de
            coopérative qui permet à différents acteurs:<br /> <span> <ul class="listing">
              <li class="listitem2">Salariés,</li>
              <li class="listitem2">Bénéficiaires,</li>
              <li class="listitem2">Utilisateurs,</li>
              <li class="listitem2">Volontaires,</li>
              <li class="listitem2">Collectivités locales,</li>
              <li class="listitem2">Ou toute personne physique ou morale</li>
            </ul>
              
          </span>
         De se regrouper autour de <span><nuxt-link to="/projects" class="links">
            projets communs </nuxt-link></span> une finalité d'utilité sociale.
          </p>
          <p class="developpement">
            Caractérisée par sa <span><NuxtLink to="/gouvernance" class="links">gouvernance démocratique</NuxtLink></span>, "un associé, une
            voix", elle favorise une gestion participative où les décisions sont
            prises collectivement, indépendamment des parts de capital détenues
            par chacun.
          </p>
          <p class="developpement">
            Les SCIC doivent consacrer une part significative de leurs bénéfices
            à des réserves impartageables, ce qui renforce leur pérennité et
            leur capacité à poursuivre leurs objectifs sociaux.
          </p>
          <p class="developpement">
            Ce modèle d'entreprise s'adapte particulièrement bien à des projets
            qui conjuguent les enjeux économiques, sociaux et environnementaux
            sur leurs territoires​​.
          </p>
        </div>
        <UDivider />
        <div class="subhero">
          <h2 class="subtitle2">
            Être reconnue comme SCIC est une étape importante, mais s'engager
            pleinement envers les principes coopératifs est essentiel et cela
            englobe les aspects suivants :
          </h2>
          <ul class="listing">
            <li class="listitem">
              La valorisation de l'individu et son développement personnel,
            </li>
            <li class="listitem">
              La solidarité et la coopération entre les membres,
            </li>
            <li class="listitem">
              La responsabilité sociale et environnementale,
            </li>
            <li class="listitem">
              Une gouvernance démocratique basée sur le principe "une personne =
              une voix", modulée par la formation de collèges électoraux,
            </li>
            <li class="listitem">
              Une adhésion diversifiée centrée sur le bénéfice commun et
              l'utilité sociale, allant au-delà des intérêts individuels,
            </li>
            <li class="listitem">
              L'autonomie de l'entreprise, son développement durable et sa
              transmission responsable à travers les générations de
              coopérateurs,
            </li>
            <li class="listitem">
              La solidarité,la résilience et le respect du vivant comme valeurs
              fondamentales,
            </li>
            <li class="listitem">
              L'engagement responsable dans un projet collectif,
            </li>
            <li class="listitem">
              Le droit à l'innovation, à la créativité et à la prise
              d'initiative,
            </li>
            <li class="listitem">
              La valorisation et la dignité du travail de chacun,
            </li>
            <li class="listitem">
              Le droit à l'éducation et à la formation continue,
            </li>
            <li class="listitem">
              Et bien évidemment le droit à la joie et à la bonne humeur.
            </li>
          </ul>
        </div>
        <UDivider />
        <div class="wrapper2">
          
          <div class="first">
            <h1 class="title">
              M Comme Médoc est une
              <span class="emphasing">SCIC SA dualiste</span>
            </h1>
            <p class="developpement">
              Une SCIC SA dualiste, ou Société Coopérative d'Intérêt Collectif
              sous forme de Société Anonyme avec structure dualiste, est une
              forme juridique particulière de coopérative qui se distingue par
              son mode de gouvernance séparé en deux organes principaux : le
              conseil de surveillance et le directoire.
            </p>
            <p class="developpement">
              Dans cette structure, le directoire est chargé de la gestion
              quotidienne de la SCIC. Il est composé de membres nommés par le
              conseil de surveillance pour un mandat déterminé. Ces membres,
              souvent des professionnels de la gestion, ont la responsabilité
              d'implémenter les stratégies et les politiques définies par le
              conseil de surveillance, tout en assurant le bon fonctionnement
              opérationnel de la coopérative.
            </p>
            <p class="developpement">
              Le conseil de surveillance, quant à lui, a pour rôle principal de
              contrôler les actions du directoire. Ses membres sont élus par les
              associés de la SCIC lors de l'assemblée générale. Le conseil a le
              pouvoir de formuler des recommandations, d'effectuer des contrôles
              réguliers de la gestion de la SCIC et d'approuver les grandes
              orientations stratégiques.
            </p>
            <p class="developpement">
              Cette structure dualiste permet une séparation claire entre les
              fonctions exécutives et de surveillance, favorisant ainsi une
              meilleure transparence et un contrôle efficace. Elle s'adapte
              particulièrement bien aux grandes SCIC où la clarté des rôles et
              la rigueur dans la gestion sont primordiales pour assurer à la
              fois le développement économique et la réalisation des objectifs
              d'utilité sociale.
            </p>
          </div>
        </div>
        <div class="subhero2">
          <h2 class="subtitle2">
            L'organisation des collèges
          </h2>
          <p class="developpement2">
            La SCIC M Comme Médoc adopte une structure dualiste sous forme de société anonyme, qui se distingue par une gouvernance participative structurée autour de plusieurs collèges de vote. Ces collèges sont conçus pour refléter la diversité des parties prenantes et assurer une prise de décision équilibrée et démocratique. Voici un aperçu de cette structure organisée.
          </p>
          <Colleges />
          
        </div>
        <UDivider />
        <template #footer class="footing">
          <div class="wrapperbutton">
          <UButton>Revenir à l'accueil</UButton></div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import colleges from "~/components/colleges.vue";

const words = [
  "socialement",
  "solidairement",
  "écologiquement",
  "respectueusement",
];
const currentWord = ref(words[0]);
let index = 0;

function rotateWords() {
  index = (index + 1) % words.length;
  currentWord.value = words[index];
}

onMounted(() => {
  setInterval(rotateWords, 2000);
});
</script>

<style scoped>
.wrapper {
  @apply  mt-20 p-4 gap-10;
}
.internalwrapper {
  @apply gap-10;
}
.internalorganizer {
  @apply flex flex-row justify-between gap-4;
}
.first {
  @apply p-10 bg-scicblue rounded-2xl shadow-lg;
}
.textual {
  @apply flex flex-col gap-4 items-center justify-center m-auto;
}
.heroimage {
  @apply w-1/2 rounded-lg shadow-lg;
}
.ucarding {
  @apply w-10/12 mx-auto relative; /* Ensure the card is positioned relatively */
}
.heading {
  @apply flex flex-col items-center gap-4 p-4;
}
.footing {
  @apply bg-gray-400;
}
.title {
  @apply text-4xl font-bold text-scicgreen text-center bg-white p-4 rounded-lg shadow-lg;
  font-family: "Playfair Display", serif;
}
.title1 {
  @apply text-4xl font-bold text-scicgreen text-center;
  font-family: "Playfair Display", serif;
}
.subtitle {
  @apply text-2xl font-semibold text-center;
  font-family: "Lora", serif;
}
.developpement {
  @apply mt-10 text-justify text-lg indent-8 bg-white p-4 rounded-lg shadow-lg text-scicgreen;
  font-family: "Lora", serif;
}
.developpement2 {
  @apply mt-10 text-justify text-lg indent-8 bg-white p-4  text-scicgreen;
  font-family: "Lora", serif;
}
.wordwrapper {
  @apply text-3xl text-scicgreen font-bold;
  font-family: "Lora", serif;
}
.subhero {
  @apply mt-10;
}
.subhero2 {
  @apply mt-5;
}
.subtitle2 {
  @apply text-2xl font-semibold text-center p-4 text-scicgreen;
  font-family: "Playfair Display", serif;
}
.listing {
  @apply grid grid-cols-2 mt-10 list-disc p-4 gap-4;
}
.listitem {
  @apply text-sm text-start;
  font-family: "Lora", serif;
}
.emphasing {
  @apply text-scicpurple font-extrabold;
  font-family: "Playfair Display", serif;
}
.wrappper2 {
  @apply gap-10;
}
.wrapperbutton {
  @apply flex justify-center items-center;
}
.links {
  @apply text-scicorange ;
  font-family: "Lora", serif;
}
@media (max-width: 640px) {
  .wrapper, .internalwrapper {
    @apply flex flex-col gap-4 overflow-x-hidden;
  }
  .internalorganizer {
    @apply flex-col gap-4;
  }
  .wordwrapper {
    @apply text-xl; /* Taille de texte réduite pour les mots */
  }
  .heroimage {
    @apply w-full; /* Pleine largeur pour les images sur mobile */
  }
  .ucarding {
    @apply w-full; /* Carte pleine largeur sur petits écrans */
  }
  .title1, .subtitle {
    @apply text-2xl; /* Taille de texte réduite pour les titres */
  }
  .developpement {
    @apply text-sm p-2; /* Texte plus petit et padding ajusté */
  }
}
</style>
