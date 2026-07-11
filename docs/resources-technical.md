# Ressources du Medoc - documentation technique

## Source de donnees

Les composants consomment `ResourceRepository`.

Implementation actuelle :

- `LocalResourceRepository` ;
- donnees de demonstration dans `demoResources.ts`.

Implementation future :

- `GraphQLResourceRepository` ;
- pagination cote serveur ;
- filtres cote serveur ;
- moderation des contributions.

## Carte

La carte actuelle est schematique et sans dependance externe.
Elle n utilise pas de cle API, ne demande pas la geolocalisation et ne bloque pas la liste.

Une future carte Leaflet peut etre ajoutee si :

- elle est chargee cote client ;
- aucune cle payante n est requise ;
- la liste reste l alternative complete ;
- les popups n utilisent jamais de HTML non controle.

## SEO

Les pages outils et `/ressources` sont indexables.
Les filtres de `/ressources` servent l usage, mais ne doivent pas creer une explosion de pages indexables.
Les futures pages categorie ou commune ne doivent etre creees que si elles contiennent un contenu reel et verifie.

## Confidentialite

Pas de geolocalisation automatique.
Pas de compte obligatoire.
Pas de collecte silencieuse des resultats des calculateurs ou diagnostics.
