<template>
  <UCard class="ucardwrapper">
    <template #header>
      <h2 class="ucardtitle">Rassembler, coordonner et simplifier</h2>
    </template>
    <div class="ucardtextwrapper">
      <p class="ucardtext">
        M Comme Médoc est une SCIC, un organe collectif ayant pour objet
        social l'amélioration du cadre de vie de ses sociétaires et plus
        largement des habitants du territoire médocain. Notre objectif est de
        rassembler, coordonner et simplifier les initiatives locales pour
        créer une dynamique vertueuse et durable sur notre territoire. Dans un
        premier temps, nous allons tout mettre en oeuvre pour réunir les
        acteurs locaux, les institutions et les citoyens autour de projets
        concrets et fédérateurs. Nous allons également travailler à la mise en
        place d'outils et de services qui permettront de soutenir et de
        valoriser les initiatives locales.
      </p>
      <div class="wrappercontentdev">
        <div class="wrapperimagecontainer3"></div>
        <div class="wrappercontenttext">
          <h3 class="ucardsubtitle">Plantons les graines</h3>
          <p class="ucardtext">
            Nous voulons perpétrer la tradition de respect du vivant inhérente
            à notre ADN médocain. Nous savons que nous pouvons sereinement
            développer des mécanismes de solidarité et de partage qui
            permettront à chacun de trouver sa place et de s'épanouir. Nous
            voulons également nous appuyer sur les forces vives de notre
            territoire pour créer une dynamique vertueuse et durable. Nous
            savons que nous pouvons compter sur la richesse de notre
            patrimoine naturel et culturel pour construire un avenir commun et
            solidaire.
          </p>
          <p class="ucardtext">
            Tout le monde a un rôle à jouer dans cette dynamique. Les
            producteurs locaux, les artisans, les commerçants, les
            associations, les citoyens, les institutions... Chacun peut
            apporter sa pierre à l'édifice et contribuer à la construction
            d'un territoire plus solidaire et plus durable. Nous voulons créer
            un écosystème vertueux où chacun peut trouver sa place et
            s'épanouir.
          </p>

          <h3 class="ucardsubtitle">Développons les racines</h3>
          <h4 class="ucardsubtitle">Rendre les produits visibles en ligne</h4>
          <p class="ucardtext">
            La mise en avant des produits et leur visibilité est l'une des
            premières étapes. Pour ce faire nous allons créer une application
            internet qui permettra aux utilisateurs, à la fois de connaitre
            les produits locaux disponibles mais également de commander en
            ligne. Pour les producteurs, ce site leur permettra de disposer
            d'une plateforme commune et donc de gérer plus facilement leurs
            produits.
          </p>
          <div class="relative">
            <p class="ucardtext">
              Le développement de ce site sera intégralement financé par la
              scic M Comme Médoc en échange d'une
              <span
                class="emphazer2 cursor-pointer text-blue-500 hover:text-blue-700"
                @click="isOpen = true"
              >
                réciprocité solidaire de services
              </span>
              qui sera proposée aux producteurs locaux. Les frais fixes
              (maintenance, hébergement) seront assumés par les producteurs
              selon une logique de mutualisation solidaire.
            </p>
          </div>
        </div>
        
        </div>
        <UPopover v-if="isOpen" :popper="{ placement: 'top' }">
          <template #activator="{ props, isOpen }">
            <span v-bind="props"></span>
          </template>
          <div class="p-10 bg-scicblue bg-opacity-40 shadow-lg rounded-lg">
            <h3 class="ucardtitle2">
              Principe de Réciprocité de Services pour la Plateforme de
              E-commerce de la SCIC
            </h3>
            <h4 class="ucardsubtitle2">
              Introduction au Modèle de Réciprocité
            </h4>
            <p class="ucardtext2">
              La Société Coopérative d’Intérêt Collectif (SCIC) M Comme Médoc
              développe une plateforme de e-commerce innovante, conçue pour
              renforcer les liens entre les producteurs locaux et les
              consommateurs. Le modèle économique de cette plateforme repose
              sur un principe de réciprocité de services, offrant ainsi une
              solution créative pour éviter les complications liées à la
              gestion des flux financiers traditionnels.
            </p>
            <h4 class="ucardsubtitle2">
              Fonctionnement de la Réciprocité de Services
            </h4>
            <p class="ucardtext2">
              Dans le cadre de ce modèle, la SCIC prend en charge
              l'intégralité des coûts associés à la création et à
              l'opérationnalisation de la plateforme de e-commerce. En retour,
              les producteurs locaux s'engagent à fournir à la SCIC des biens
              ou des services équivalents à la valeur du temps investi pour
              leur mise en place sur la plateforme. Cette approche permet de
              construire un système d'échange équitable et soutenable pour
              toutes les parties prenantes.
            </p>
            <h4 class="ucardsubtitle2">Équivalence de la Contribution</h4>
            <p class="ucardtext2">
              Le principe repose sur une équivalence où chaque heure de
              service fourni par la SCIC est valorisée à 15 euros. De la même
              manière, les contributions des producteurs, qu'elles soient sous
              forme de biens ou de services, sont évaluées selon le même tarif
              horaire. Par exemple, 15 euros de produits fournis par un
              producteur sont considérés comme équivalant à une heure de
              service rendu par la SCIC.
            </p>
            <h4 class="ucardsubtitle2">
              Avantages de la Réciprocité de Services
            </h4>
            <p class="ucardtext2">
              Ce modèle de réciprocité de services présente plusieurs
              avantages :
            </p>
            <ul class="ucardlist">
              <li class="ucardlistitem">
                <span class="emphazer"
                  >Minimisation des Transactions Financières :</span
                >
                Il réduit la nécessité de gérer des transactions financières
                complexes, simplifiant la comptabilité et les démarches
                administratives pour tous les participants.
              </li>
              <li class="ucardlistitem">
                <span class="emphazer"
                  >Renforcement des Relations Communautaires :
                </span>
                Ce système encourage la coopération et le renforcement des
                liens entre les membres de la SCIC et les producteurs locaux,
                créant une communauté plus soudée et résiliente.
              </li>
              <li class="ucardlistitem">
                <span class="emphazer"
                  >Accès Équitable aux Ressources :
                </span>
                En éliminant les barrières financières à l'entrée, ce modèle
                permet à un plus grand nombre de producteurs de bénéficier de
                la plateforme, favorisant une diversité et une richesse accrue
                de l'offre locale.
              </li>
              <div class="popoverbutton">
                <button class="button" @click="isOpen = false">Fermer</button>
              </div>
            </ul>
          </div>
        </UPopover>
      

      <p class="ucardtext">
        La mise en ligne des produits sera, selon les cas, effectuée
        directement par les producteurs ou par un administrateur de M Comme
        Médoc.
      </p>
    </div>
    <template #footer>
      <div class="footerwrapper">
        <button class="button" @click="openExampleEcole">Exemples</button>
        <button class="button" @click="openBesoinsEcole">Nos besoins</button>
        <button class="button" @click="openRecrutementEcole">
          Recrutement
        </button>
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.ucardwrapper {
  @apply bg-transparent shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 mb-4;
}
.ucardtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ring ring-white text-center p-6 text-white rounded-2xl shadow-lg;
  font-family: "Playfair Display", serif;
}
.ucardtextwrapper {
  @apply flex flex-col gap-2 sm:gap-4 md:gap-6;
}
.ucardtext {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8 text-white;
  font-family: "Lora", serif;
}
.ucardsubtitle {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-scicyellow text-center p-2 sm:p-4;
  font-family: "Lora", serif;
}
.footerwrapper {
  @apply flex justify-center items-center gap-2 sm:gap-4 md:gap-6;
}
.button {
  @apply bg-scicgreen text-white font-bold mb-4 sm:mb-6 md:mb-10 py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded hover:bg-scicorange transition-colors;
  font-family: Montserrat;
}
.wrappercontentdev {
  @apply grid grid-rows-1 gap-2 sm:gap-4 md:gap-6;
  @apply sm:grid-cols-2 md:grid-cols-2;
}
.wrapperimagecontainer3 {
  @apply p-2 sm:p-4 md:p-6 rounded-lg shadow-2xl shadow-inner hover:scale-105;
  background-image: url("/tree.png");
  background-position: center;
  background-size: cover;
}
.emphazer2 {
  @apply font-bold text-scicorange;
}
.ucardtitle2 {
  @apply text-xl sm:text-2xl md:text-3xl font-semibold text-scicgreen text-center ring-2 ring-scicgreen p-2 sm:p-4 rounded-lg;
  font-family: "Lora", serif;
}
.ucardsubtitle2 {
  @apply text-xl sm:text-2xl md:text-3xl font-semibold text-scicgreen text-center ring-2 ring-scicgreen p-2 sm:p-4 rounded-lg;
  font-family: "Lora", serif;
}
.ucardtext2 {
  @apply text-base sm:text-lg md:text-xl text-justify indent-4 sm:indent-8 p-2 sm:p-4;
  font-family: "Lora", serif;
}
.popoverbutton {
  @apply flex items-center justify-center mt-4 sm:mt-6 md:mt-10;
  font-family: Montserrat;
}
</style>
