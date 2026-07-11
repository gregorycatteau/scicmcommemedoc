# Frontend Nuxt

## Objectif

Interface publique Mcomme Medoc v2026 : accueil, parcours membre, activites, evenements et FAQ.

## Lancer

```bash
cd frontend
npm install
npm run dev
```

Le site demarre sur `http://localhost:3000`.

## Conventions

- Tout le code applicatif est dans `app/`.
- Les pages sont dans `app/pages`.
- Les composants reutilisables sont dans `app/components`.
- Les styles restent dans `<style scoped>` avec des classes semantiques et `@apply`.
- La communication applicative passe par GraphQL via `app/composables/useGraphQL.ts`.

## GraphQL

Endpoint par defaut : `http://localhost:8000/graphql`.

Exemple :

```graphql
query {
  allActivities {
    id
    title
    startsAt
  }
}
```

## Ressources locales

La page `/ressources` utilise `ResourceRepository`.
L implementation actuelle est locale et fictive :

- `app/data/demoResources.ts`
- `app/repositories/LocalResourceRepository.ts`

Toute donnee reelle doit etre sourcee, datee et verifiee avant publication.
Consulter `../docs/resources-data-governance.md`.

## Tests disponibles

```bash
npm run build
npx nuxi typecheck
```
