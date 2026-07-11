# Mcomme Medoc v2026

## Objectif

Infrastructure MVP pour la refonte Mcomme Medoc :

- `frontend/` : Nuxt 4, TypeScript, Tailwind 4, code applicatif dans `app/`.
- `backend/` : Django 6, Graphene, endpoint GraphQL unique.
- `docker/` : Dockerfiles frontend, backend et PostgreSQL.
- `docker-compose.yml` : orchestration locale PostgreSQL + Django + Nuxt.

## Sprint ressources et outils

Le frontend contient maintenant :

- `/ressources` : recherche, filtres, liste, carte schematique, fiche, proposition et signalement ;
- `/vivre-dans-le-medoc-budget` : calculateur indicatif de budget ;
- `/manger-local-medoc` : guide panier local ;
- `/diagnostic-resilience-foyer` : diagnostic pedagogique cote client ;
- `/creer-projet-citoyen-medoc` : generateur de fiche projet ;
- `/developper-projet-medoc` : parcours de progression pour activite utile.

Les donnees de ressources sont fictives et marquees comme demonstration dans `frontend/app/data/demoResources.ts`.
Ne pas les publier comme donnees locales reelles.

## Lancer le frontend

```bash
cd frontend
npm install
npm run dev
```

URL locale : `http://localhost:3000`.

## Lancer le backend

```bash
cp .env.example .env
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Endpoint GraphQL : `http://localhost:8000/graphql`.

## Lancer PostgreSQL avec Docker

```bash
cp .env.example .env
docker compose up -d postgres
```

## Lancer toute la stack Docker

```bash
cp .env.example .env
docker compose up --build
```

## Exemples GraphQL

```graphql
query {
  allActivities {
    id
    title
    startsAt
  }
}
```

```graphql
mutation {
  createMemberRequest(
    name: "Camille",
    email: "camille@example.test",
    reason: "Je veux participer a un projet local utile."
  ) {
    ok
  }
}
```

## Securite

Attention : change toutes les valeurs `change-me` dans `.env` avant un usage public.

- Django : `python manage.py changepassword <utilisateur>`
- PostgreSQL : modifie `DB_USER` et `DB_PASSWORD` dans `.env`
- Ne versionne jamais `.env`

Les identifiants fournis dans le prompt initial ne sont pas hardcodes dans les fichiers du projet afin d'eviter de versionner des secrets.

## Conventions frontend

- Tout le code frontend est dans `frontend/app`.
- Pas de styles inline dans les templates.
- Classes semantiques dans les templates.
- Styles via `<style scoped>` et `@apply`.
- Communication applicative uniquement via GraphQL.

## Conventions backend

- Endpoint applicatif unique : `/graphql`.
- Pas de routes REST applicatives.
- Secrets et mots de passe via variables d'environnement.

## Documentation

- `docs/resources-data-governance.md`
- `docs/resources-technical.md`
- `docs/architecture.md`
- `docs/securite.md`
- `docs/accessibilite.md`
