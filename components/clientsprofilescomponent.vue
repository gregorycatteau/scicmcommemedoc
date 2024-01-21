<template>
  <div class="hero">
    <div class="flipcard" :class="{ 'is-flipped': isFlipped }">
      <div class="flipcard-inner">
        <div class="flipcard-front">
          <img :src="currentCard.image" alt="Image" class="card-image" />
        </div>
        <div class="flipcard-back">
          <h3 class="title">{{ currentCard.title }}</h3>
          <ul>
            <li v-for="(item, i) in currentCard.list" :key="i" class="attributelist">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clientsprofilescomponent",
  data() {
    return {
      cards: [
        {
          image: "/Amandine.png",
          title: "Amandine - La Consommatrice Éco-Responsable",
          list: [
            "Âge :",
            " 30 ans, professionnelle en RSE.",
            "Intérêts :",
            " Produits durables, investissements éthiques.",
            "Attentes :",
            " Recherche des produits et services qui reflètent ses valeurs d'économie circulaire et de responsabilité sociale.",
          ],
        },
        { 
          image: "/David.png",
          title: "David - L'Innovateur Social",
          list: [
            "Âge :",
            " 40 ans, entrepreneur social.",
            "Intérêts :",
            " Innovation sociale, projets à impact positif.",
            "Attentes :",
            " Souhaite utiliser des services de la SCIC qui favorisent l'économie collaborative et soutiennent des initiatives locales.",
          ],
          isFlipped: false,
        },
        {
          image: "/Fatima.png",
          title: "Fatima - L'Ambassadrice du Développement Durable",
          list: [
            "Âge :",
            " 28 ans, chargée de projets en développement durable.",
            "Intérêts :",
            " Solutions de transition énergétique, initiatives locales.",
            "Attentes :",
            " Cherche à participer à des projets de la SCIC liés à l'énergie renouvelable et aux initiatives durables.",
          ],
          isFlipped: false,
        },
        {
          image: "/Julien.png",
          title: "Julien - Le Défenseur des Circuits Courts",
          list: [
            "Âge :",
            " 35 ans, gérant de coopérative d'achat solidaire.",
            "Intérêts :",
            "Consommation responsable, économie locale.",
            "Attentes :",
            " Intéressé par les produits de la SCIC qui renforcent les circuits courts et soutiennent les producteurs locaux.",
          ],
          isFlipped: false,
        },
        {
          image: "/Marie.png",
          title: "Marie - La Productrice Locale",
          list: [
            "Âge :",
            " 35 ans, productrice de vin.",
            "Intérêts :",
            " Produits locaux, tourisme viticole.",
            "Attentes :",
            " Recherche des services de la SCIC pour promouvoir ses produits et développer son activité.",
          ],
          isFlipped: false,
        },
        {
          image: "/Sophie.png",
          title: "Sophie - La Mère de Famille Écolo",
          list: [
            "Âge :",
            " 38 ans, mère au foyer.",
            "Intérêts :",
            " Produits écologiques pour la maison, éducation durable pour ses enfants.",
            "Attentes :",
            "Achète des produits de la SCIC pour un mode de vie familial plus durable.",
          ],
          isFlipped: false,
        },
        {
          image: "/Marc.png",
          title: "Marc - Le Jeune Urbain Éco-Conscient",
          list: [
            "Âge :",
            " 25 ans, jeune professionnel.",
            "Intérêts :",
            "Mobilité durable, modes de vie écoresponsables.",
            "Attentes :",
            "Utilise les services de mobilité et d'énergie renouvelable de la SCIC.",
          ],
          isFlipped: false,
        },
        {
          image: "/Elise_et_Thomas.png",
          title:
            "Élise et Thomas - Couple Investi dans la Transition Énergétique",
          list: [
            "Âge :",
            " 40 et 42 ans, tous deux employés.",
            "Intérêts :",
            "Autonomie énergétique, réduction de l'empreinte carbone.",
            "Attentes :",
            "Souhaitent installer des solutions d'énergie renouvelable de la SCIC chez eux.",
          ],
          isFlipped: false,
        },
        {
          image: "/Nadia.png",
          title: "Nadia - L'Étudiante Militante",
          list: [
            "Âge :",
            "22 ans, étudiante en sciences environnementales.",
            "Intérêts :",
            "Activisme climatique, consommation éthique.",
            "Attentes :",
            "Participe aux programmes de sensibilisation et utilise des produits durables de la SCIC.",
          ],
          isFlipped: false,
        },
        {
          image: "/Olivier.png",
          title: "Olivier - Le Retraité Actif dans sa Communauté",
          list: [
            "Âge :",
            "65 ans, retraité.",
            "Intérêts :",
            "Jardinage communautaire, projets de quartier.",
            "Attentes :",
            "Engagé dans des projets locaux soutenus par la SCIC, notamment dans le domaine de l'alimentation durable.",
          ],
          isFlipped: false,
        },
        {
          image: "/Léa.png",
          title: "Léa - La Jeune Professionnelle Soucieuse de Bien-Être",
          list: [
            "Âge :",
            " 29 ans, travaille dans le secteur de la santé.",
            "Intérêts :",
            "Bien-être holistique, thérapies naturelles.",
            "Attentes :",
            "Fréquente le centre de soins holistiques de la SCIC et s'intéresse aux produits de santé naturels.",
          ],
          isFlipped: false,
        },
        {
          image: "/Marc.png",
          title: "Marc - Le Jeune Urbain Éco-Conscient",
          list: [
            "Âge :",
            " 25 ans, jeune professionnel.",
            "Intérêts :",
            "Mobilité durable, modes de vie écoresponsables.",
            "Attentes :",
            "Utilise les services de mobilité et d'énergie renouvelable de la SCIC.",
          ],
          isFlipped: false,
        },
        {
          image: "/Elise_et_Thomas.png",
          title:
            "Élise et Thomas - Couple Investi dans la Transition Énergétique",
          list: [
            "Âge :",
            " 40 et 42 ans, tous deux employés.",
            "Intérêts :",
            "Autonomie énergétique, réduction de l'empreinte carbone.",
            "Attentes :",
            "Souhaitent installer des solutions d'énergie renouvelable de la SCIC chez eux.",
          ],
          isFlipped: false,
        },
      ],
      currentCardIndex: 0,
      isFlipped: false,
    };
  },
  mounted() {
    setInterval(this.rotateCard, 5000);
  },
  computed: {
    currentCard() {
      return this.cards[this.currentCardIndex];
    },
  },
  methods: {
    rotateCard() {
      this.isFlipped = !this.isFlipped;
      setTimeout(() => {
        this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
        this.isFlipped = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.flipcard {
  width: 500px;
  height: 600px;
  perspective: 1500px;
  transition: transform 0.7s;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
.flipcard:hover {
  transform: scale(1.05);
}

.flipcard.is-flipped .flipcard-inner {
  transform: rotateY(180deg);
}

.flipcard-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipcard-front,
.flipcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
}

.flipcard-front {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flipcard-back {
  background-color: #028482;
  color: #fff;
  transform: rotateY(180deg);
  padding: 5px;
  text-align: center;
}

.card-image {
  border-radius: 15px;
}

.title {
  font-size: 24px;
  text-align: center;
  color: #f9f871;
  font-weight: bold;
  padding: 4;
  margin: 10;
}

.attributelist {
  font-size: xl;
  text-align: center;
  color: green-400;
  font-weight: bold;
  gap: 4;
}
</style>
