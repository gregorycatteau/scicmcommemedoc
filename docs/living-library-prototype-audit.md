# Audit critique - Bibliotheque vivante

## Constats acceptes

La premiere transformation en Livre vivant ne reussit pas l intention. Elle pose une architecture narrative utile, mais elle produit encore une succession de pages hero verticales. Le visiteur voit un site editorial, pas un objet que l on ouvre, parcourt et feuillette.

Le probleme n est pas un manque de finition. Le modele mental est mauvais :

- le Livre unique force une linearite trop litterale ;
- le menu horizontal maintient une lecture de site institutionnel ;
- les tres grands titres se repetent et deviennent un systeme visuel pauvre ;
- le Wiki interne cree une confusion avec le Wiki operationnel reel ;
- les CTA ne racontent pas toujours ce qui va se passer ;
- le visiteur ne comprend pas assez vite ou il est, ni quel geste accomplir.

## Pourquoi l UX echoue

La page d accueil annonce une experience de lecture, mais l interface continue a proposer une navigation de site classique. Cette contradiction affaiblit la promesse. Une personne qui arrive ne ressent pas qu elle ouvre un ouvrage compose : elle voit un grand hero et des boutons.

Le sommaire precedent ressemble a un fil de chapitres, pas a une bibliotheque. Il ne donne pas l impression qu il existe plusieurs livres, chacun avec sa fonction : vision, ressources, projets, maniere de vivre, administration.

Les pages de chapitres manquent de contraste narratif. Elles sont lisibles mais trop homogenes : eyebrow, grand titre, introduction, image, texte, CTA. Ce rythme finit par expliquer le projet au lieu de le faire ressentir.

## CTA et liens a surveiller

Les services operationnels reels existent hors du frontend :

- Wiki : `https://wiki.mcommemedoc.fr`
- Projets : `https://projets.mcommemedoc.fr`
- Documents : `https://docs.mcommemedoc.fr`
- Chat : `https://chat.mcommemedoc.fr`
- Authentification : `https://auth.mcommemedoc.fr`

Le site principal ne doit pas recreer ces espaces. Il doit orienter vers eux avec des liens explicites, externes, et sans simulation.

## Nouvelle direction

M Comme Medoc devient une bibliotheque vivante : un ensemble de Livres contemporains. Le site principal raconte, donne envie, explique les seuils et oriente. Les plateformes specialisees permettent d agir.

La couverture doit retrouver la force de l identite historique :

> Semer. Cultiver. Recolter.

Cette formule porte un cycle, une promesse de temps long et une action possible. Elle est plus specifique que "Un territoire a lire. Une suite a ecrire."

## Prototype attendu

Le prototype ne doit pas tout transformer. Il doit prouver quatre choses :

1. une couverture que l on a envie d ouvrir ;
2. une bibliotheque lisible immediatement ;
3. une mecanique de feuilletage contemporaine ;
4. des sorties operationnelles reelles vers Wiki, OpenProject et Chat.

## Rollback

Le tag `safety/living-book-v1-rejected` pointe vers le commit `470d867`, derniere version de la tentative rejetee.
