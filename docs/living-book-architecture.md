# Architecture Bibliotheque vivante

## Decision

La premiere architecture "Livre unique / Wiki interne" est remplacee. M Comme Medoc devient une Bibliotheque vivante : un ensemble de Livres editoriaux qui orientent vers des services operationnels reels.

Le site principal raconte, explique, presente et donne envie.

Les services specialises permettent d agir :

- Wiki : `https://wiki.mcommemedoc.fr`
- Projets : `https://projets.mcommemedoc.fr`
- Documents : `https://docs.mcommemedoc.fr`
- Chat : `https://chat.mcommemedoc.fr`
- Authentification : `https://auth.mcommemedoc.fr`

## Probleme de l architecture precedente

Le Livre unique produisait une succession de heros editoriaux. Il confondait l experience sensible, les outils longue traine et un Wiki local de demonstration. Cette confusion faisait ressembler le site a une collection de pages, pas a un ouvrage vivant.

## Architecture cible

```txt
frontend/app/
  pages/
    index.vue              # couverture
    bibliotheque.vue       # prototype lecteur + sommaire droit
    livre/index.vue        # entree compatible vers bibliotheque
    wiki/index.vue         # porte vers le Wiki externe
    routes historiques     # conservees
  components/
    library/               # couverture, lecteur, sommaire, chat
    shared/
    book/                  # ancien prototype conserve mais non directeur
    wiki/                  # ancien prototype conserve mais non directeur
  data/
    library/books.ts       # registre multi-Livres
  types/
    library.ts
```

## Livres

1. La Genese : vision, origine, territoire, cycle Semer/Cultiver/Recolter.
2. Les Ressources : portraits et chemins, avec fiches operationnelles dans le Wiki.
3. Les Projets : recits de dynamiques, avec organisation dans OpenProject.
4. Vivre autrement : guides et exercices, avec outils existants comme prolongements.
5. Le Livre administratif : fonctionnement, droits, documents, acces membres.

La FAQ reste un acces pratique en fin de sommaire, pas un Livre principal.

## Prototype actuel

Le prototype livre :

- couverture autour de "Semer. Cultiver. Recolter." ;
- sommaire droit de la bibliotheque ;
- feuilletage par recouvrement de page ;
- trois pages composees pour le Livre I - La Genese ;
- liens reels vers Wiki, OpenProject et Chat ;
- version mobile avec sommaire repliable, boutons precedent/suivant et pas de double-page forcee.

## Routes

| Route | Role |
| --- | --- |
| `/` | Couverture de la bibliotheque |
| `/bibliotheque` | Lecteur prototype |
| `/livre` | Entree compatible canonique vers `/bibliotheque` |
| `/wiki` | Porte vers `https://wiki.mcommemedoc.fr` |
| Routes outils longues traines | Conservees, associees au Livre IV |
| `/ressources`, `/activites`, `/evenements`, `/devenir-membre`, `/vie-cooperative`, `/faq`, `/contact` | Conservees pour compatibilite |

## SEO

Les routes historiques restent disponibles. Le sitemap inclut `/bibliotheque`. Les anciennes routes de chapitres ne sont pas supprimees dans cette passe pour conserver le rollback et eviter une migration irreversible.

## Accessibilite

- H1 unique par page prototype.
- Sommaire utilisable au clavier.
- Navigation precedent/suivant explicite.
- Liens externes explicites avec nouvel onglet.
- Chat accessible par lien, pas par faux widget.
- `prefers-reduced-motion` supprime les transitions de feuilletage.

## Performance

Aucune nouvelle dependance. Le feuilletage est realise en CSS/Vue simple, sans flipbook, sans 3D lourde, sans scroll hijacking.

## Rollback

Le tag `safety/living-book-v1-rejected` conserve l etat de la tentative precedente. Les changements de cette passe sont commits separement sur `feat/mcm-living-book-architecture`.
