# Instructions frontend

## Stack

- Nuxt 3
- Vue 3
- TypeScript
- `<script setup lang="ts">`
- Tailwind CSS
- styles composants dans `<style scoped>`
- regroupement des styles avec `@apply` lorsque pertinent

## Contraintes

- Ne pas utiliser `v-html` sans justification et assainissement explicite.
- Ne jamais incorporer de secret dans une variable `NUXT_PUBLIC_*`.
- Les endpoints publics doivent venir de la configuration runtime.
- Les formulaires doivent empêcher les doubles soumissions.
- Les erreurs techniques ne doivent pas être affichées au visiteur.
- Les animations doivent respecter `prefers-reduced-motion`.
- Les images doivent avoir dimensions, texte alternatif et stratégie de chargement adaptées.
- Aucun texte essentiel ne doit exister uniquement dans une image.

## Composants

Avant de créer un composant :

1. rechercher un composant existant ;
2. vérifier s’il peut être étendu proprement ;
3. éviter les variantes copiées-collées ;
4. maintenir une API typée.

## Vérification

Exécuter les commandes disponibles dans `package.json`, notamment :

- build ;
- typecheck ;
- lint ;
- tests.

Ne jamais inventer une commande absente du projet.
