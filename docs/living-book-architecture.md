# Architecture Livre vivant / Wiki

## Etat de reference

- Branche socle : `feat/immersive-tools-and-medoc-resources`
- Commit socle : `44dfc56b93ca004eee033a6272e2c234bd2db058`
- Branche de travail : `feat/mcm-living-book-architecture`
- Remote : `git@github.com:gregorycatteau/scicmcommemedoc.git`
- Contrainte Git : l historique distant `main` est independant. Aucun merge, rebase, force push ou remplacement de `main`.

## Architecture actuelle

L application est une application Nuxt avec pages dans `frontend/app/pages`, composants dans `frontend/app/components`, types dans `frontend/app/types`, utilitaires dans `frontend/app/utils` et donnees locales de demonstration dans `frontend/app/data/demoResources.ts`.

Les routes actuelles combinent trois intentions :

- recit principal : `/` ;
- outils longue traine : `/vivre-dans-le-medoc-budget`, `/manger-local-medoc`, `/diagnostic-resilience-foyer`, `/creer-projet-citoyen-medoc`, `/developper-projet-medoc` ;
- operationnel : `/ressources`, `/activites`, `/evenements`, `/devenir-membre`, `/vie-cooperative`, `/faq`, `/contact`.

Les ressources passent deja par `ResourceRepository`. La source frontend actuelle est locale et fictive. Le backend Django possede des modeles de ressources, produits, categories, horaires, verifications, suggestions et signalements, mais le frontend ne consomme pas encore ces donnees.

## Probleme

Le projet est utile mais encore percu comme un ensemble de pages et d outils. Le recit, les outils et les informations operationnelles partagent la meme surface. Cette confusion affaiblit la promesse : le visiteur doit comprendre qu il entre dans un Livre qui donne du sens, puis qu il peut consulter un Wiki pour agir avec des informations fiables.

## Architecture cible

Deux univers sont separes sans etre isoles :

- le Livre : experience narrative, emotionnelle, fluide, lisible dans l ordre mais jamais obligatoire ;
- le Wiki : memoire operationnelle, recherche, fiches, procedures, verification, correction.

Arborescence cible :

```txt
frontend/app/
  pages/
    index.vue
    livre/
      index.vue
      preface.vue
      habiter.vue
      se-nourrir.vue
      tenir.vue
      faire-emerger.vue
      developper.vue
      relier.vue
      faire-ensemble.vue
      epilogue.vue
    wiki/
      index.vue
    routes historiques conservees
  components/
    book/
    wiki/
    shared/
  data/
    book/
    wiki/
  types/
```

Les anciennes routes ne sont ni supprimees ni redirigees de maniere irreversible. Elles restent indexables et deviennent des portes compatibles vers les chapitres ou les gestes interactifs.

## Structure du Livre

Le Livre suit une progression :

1. Couverture
2. Sommaire vivant
3. Preface
4. Habiter
5. Se nourrir
6. Tenir
7. Faire emerger
8. Developper
9. Relier
10. Faire ensemble
11. Epilogue

Chaque chapitre doit contenir :

- une question humaine ;
- une tension concrete ;
- une lecture courte et agreable ;
- un geste ou un lien vers un outil existant ;
- une micro-victoire ;
- une fin ouverte vers le chapitre suivant ;
- un pont explicite vers le Wiki.

Le registre central `frontend/app/data/book/chapters.ts` sert au sommaire, aux navigations precedent/suivant, aux metadonnees SEO, aux ponts Wiki et a la progression locale.

## Structure du Wiki

Le Wiki est le portail operationnel. Sa premiere version centralise :

- acces aux ressources existantes ;
- categories operationnelles ;
- etat des donnees ;
- statut de demonstration des donnees locales ;
- liens vers signalement, correction, fonctionnement et procedures ;
- distinction entre donnees verifiees, demonstration, methodes et informations a venir.

Aucune fausse fiche producteur, adresse, horaire ou partenaire n est creee.

## Mapping des routes

| Route historique | Role cible |
| --- | --- |
| `/` | Couverture du Livre |
| `/livre` | Sommaire vivant |
| `/livre/preface` | Texte fondateur |
| `/livre/habiter` | Chapitre 1, relie a `/vivre-dans-le-medoc-budget` |
| `/livre/se-nourrir` | Chapitre 2, relie a `/manger-local-medoc` |
| `/livre/tenir` | Chapitre 3, relie a `/diagnostic-resilience-foyer` |
| `/livre/faire-emerger` | Chapitre 4, relie a `/creer-projet-citoyen-medoc` |
| `/livre/developper` | Chapitre 5, relie a `/developper-projet-medoc` |
| `/livre/relier` | Chapitre 6, relie a `/wiki` et `/ressources` |
| `/livre/faire-ensemble` | Chapitre 7, relie a `/devenir-membre`, `/evenements`, `/vie-cooperative`, `/activites` |
| `/livre/epilogue` | Ouverture vers contribution, rencontre, correction |
| `/wiki` | Portail operationnel |
| `/ressources` | Route historique conservee, future section Wiki ressources |

## Composants partages

Livre :

- `BookLayout`
- `BookCover`
- `LivingTableOfContents`
- `BookChapterHeader`
- `ChapterIntro`
- `ChapterQuote`
- `ChapterEnding`
- `BookWikiBridge`
- `BookProgress`

Wiki :

- `WikiLanding`
- `WikiCategoryLink`
- `WikiVerificationNotice`

Partage :

- `ReadableProse`
- `EditorialImage`
- `ExplicitLink`
- `SectionDivider`

Ces composants doivent rester concrets. Aucune abstraction generique ne doit etre creee sans usage direct.

## Strategie SEO

- conserver toutes les routes historiques ;
- donner aux chapitres une valeur editoriale propre pour eviter la duplication ;
- utiliser le registre des chapitres pour les titles et descriptions ;
- mettre a jour le sitemap avec `/livre`, les chapitres et `/wiki` ;
- garder des liens internes explicites entre Livre, Wiki et routes historiques ;
- ne pas generer de milliers d URLs de filtres Wiki.

## Strategie accessibilite

- H1 unique par page ;
- landmarks natifs ;
- liens explicites ;
- navigation clavier ;
- focus visible existant conserve ;
- acces direct au Wiki et aux outils ;
- lecture non imposee ;
- pas de contenu masque sans JavaScript ;
- `prefers-reduced-motion` respecte via les composants existants et styles globaux.

## Strategie performance

- pas de dependance ajoutee ;
- pas de flipbook ;
- pas de bibliotheque d animation ;
- images existantes avec dimensions explicites ;
- chargement lazy hors couverture ;
- pas de carte globale chargee dans les chapitres ;
- decoupage par route Nuxt.

## Risques

- Confusion Livre/Wiki si les ponts sont vagues.
- Donnees fictives prises pour des ressources reelles si les avertissements sont insuffisants.
- Duplication SEO entre chapitres et routes outils.
- Experience trop immersive qui reduirait l acces direct aux informations.
- Trop grande densite editoriale sur mobile.

## Rollback

Le rollback doit rester simple :

- les routes historiques ne sont pas supprimees ;
- le Livre et le Wiki sont ajoutes en parallele ;
- chaque lot est commite separement ;
- la branche `feat/mcm-living-book-architecture` est poussee sans toucher `main` ;
- un retour arriere peut se faire par revert des commits de cette branche.
