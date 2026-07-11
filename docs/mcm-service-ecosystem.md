# Ecosysteme de services M Comme Medoc

## Principe

Le site principal est la porte editoriale et sensible de M Comme Medoc. Il raconte, explique, oriente et donne envie d agir.

Les fonctions operationnelles vivent dans des services specialises. Le frontend principal ne doit pas les reconstruire.

## Carte des services

| Service | Domaine | Role | Donnees portees | Acces |
| --- | --- | --- | --- | --- |
| Site editorial | `https://mcommemedoc.fr` | Couverture, bibliotheque, recits, orientation | Contenus publics, pages editoriales, liens de passage | Public |
| Wiki | `https://wiki.mcommemedoc.fr` | Documentation operationnelle, fiches, procedures, sources | Producteurs, ressources, lieux, methodes, statuts de verification | Public et contributeurs selon configuration future |
| OpenProject | `https://projets.mcommemedoc.fr` | Organisation des projets | Tickets, feuilles de route, taches, responsabilites | Membres/contributeurs |
| Nextcloud | `https://docs.mcommemedoc.fr` | Conservation documentaire | Statuts, comptes rendus, documents, archives | Selon droits membres |
| Rocket.Chat | `https://chat.mcommemedoc.fr` | Conversation | Salons, discussions, coordination | Membres/contributeurs |
| Authelia | `https://auth.mcommemedoc.fr` | Authentification et acces | Sessions, politiques d acces, protection des services | Selon configuration |

## Responsabilites

Le site editorial ne doit jamais devenir la source de verite des horaires, coordonnees, tickets ou documents internes. Il peut citer, resumer, contextualiser et orienter.

Le Wiki porte les informations verifiables. OpenProject organise les actions. Nextcloud conserve les documents. Rocket.Chat relie les personnes. Authelia ouvre les bonnes portes.

## Parcours d acces

- Visiteur public : lit la bibliotheque, ouvre le Wiki public, contacte ou rejoint les espaces publics disponibles.
- Membre : accede aux documents et espaces de contribution selon les droits definis.
- Contributeur : participe aux projets, corrige ou propose des informations, rejoint les conversations.
- Gouvernance : consulte et produit les documents de decision dans les espaces proteges.
- Administration : gere les acces dans les services dedies, jamais depuis un faux espace frontend.

## Navigation entre services

Les liens externes doivent annoncer leur destination et ouvrir dans un nouvel onglet lorsque le visiteur quitte l experience de lecture.

Liens de reference :

- Ouvrir le Wiki : `https://wiki.mcommemedoc.fr`
- Ouvrir les projets : `https://projets.mcommemedoc.fr`
- Ouvrir les documents : `https://docs.mcommemedoc.fr`
- Ouvrir le Chat : `https://chat.mcommemedoc.fr`
- Acceder a l authentification : `https://auth.mcommemedoc.fr`

## Limites connues

Les regles exactes d acces Authelia ne sont pas implementees dans cette passe. Aucun jeton, secret ou contournement d authentification ne doit etre ajoute au frontend.
