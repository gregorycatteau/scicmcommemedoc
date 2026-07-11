# Inventaire des CTA - Prototype Bibliotheque vivante

## Couverture

| Libelle | Destination | Type | Authentification | Etat |
| --- | --- | --- | --- | --- |
| Ouvrir | `/bibliotheque` | Interne | Non | Actif |
| Sommaire | `/bibliotheque` | Interne | Non | Actif |

## Lecteur Bibliotheque

| Libelle | Destination | Type | Authentification | Etat |
| --- | --- | --- | --- | --- |
| Page suivante | Changement d etat local du lecteur | Interaction | Non | Actif |
| Page precedente | Changement d etat local du lecteur | Interaction | Non | Actif |
| Ouvrir le Wiki | `https://wiki.mcommemedoc.fr` | Externe | Selon service | Actif |
| Ouvrir les projets | `https://projets.mcommemedoc.fr` | Externe | Selon service | Actif |
| Chat M Comme Medoc | `https://chat.mcommemedoc.fr` | Externe | Selon service | Actif |

## Sommaire droit

| Libelle | Destination | Type | Authentification | Etat |
| --- | --- | --- | --- | --- |
| Chaque Livre | Changement d etat local du lecteur | Interaction | Non | Actif |
| Chapitres du Livre actif | Changement d etat local du lecteur | Interaction | Non | Actif |
| Ouvrir le Wiki | `https://wiki.mcommemedoc.fr` | Externe | Selon service | Actif |
| Ouvrir OpenProject | `https://projets.mcommemedoc.fr` | Externe | Selon service | Actif |
| Ouvrir les documents | `https://docs.mcommemedoc.fr` | Externe | Selon service | Actif |
| FAQ | `/faq` | Interne | Non | Actif |

## Routes historiques

Les routes historiques restent disponibles. Elles ne sont pas le coeur du prototype. Leurs liens internes existants ont une destination reelle dans l application. Les formulaires et boutons fonctionnels conservent leurs handlers existants.
