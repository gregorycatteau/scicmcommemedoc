# Backend Django

## Objectif

Backend GraphQL pour Mcomme Medoc : membres, demandes d'adhesion et activites.

## Lancer

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Endpoint unique expose : `http://localhost:8000/graphql`.

## GraphQL

Exemple de requete :

```graphql
query {
  allMembres {
    id
    username
    email
  }
}
```

Exemple de mutation :

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

Les mots de passe par defaut ne doivent pas etre versionnes. Cree un fichier `.env` depuis `.env.example`, puis remplace toutes les valeurs `change-me`.

Pour changer le mot de passe d'un superutilisateur Django :

```bash
python manage.py changepassword <utilisateur>
```

## Conventions

- Pas de routes REST applicatives.
- Les schemas GraphQL restent dans les apps metier ou dans `apps/graphql`.
- Les secrets passent par variables d'environnement.
