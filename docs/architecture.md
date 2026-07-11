# Architecture

## Frontend

Nuxt, Vue, TypeScript et Tailwind.

Les pages restent dans `frontend/app/pages`.
La logique partagee est extraite dans :

- `frontend/app/types` ;
- `frontend/app/utils` ;
- `frontend/app/repositories` ;
- `frontend/app/composables` ;
- `frontend/app/components`.

Les ressources passent par `ResourceRepository`.
La source locale actuelle est `LocalResourceRepository`.
Une future source GraphQL devra respecter la meme interface.

## Backend

Django et Graphene exposent GraphQL.
L app `resources` prepare les modeles de ressources, suggestions, signalements et verifications.
