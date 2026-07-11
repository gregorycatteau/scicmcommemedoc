Identité du projet

# M Comme Médoc

M Comme Médoc est présenté comme un mouvement citoyen territorial.

Le visiteur et le territoire sont les protagonistes.
M Comme Médoc agit comme guide, facilitateur et structure de coopération.

Le site ne doit jamais ressembler à :

- une landing page SaaS ;
- un site institutionnel froid ;
- un discours militant culpabilisant ;
- une caricature écologique ;
- une brochure juridique de SCIC.

## Priorités

Lorsque plusieurs solutions sont possibles, décider dans cet ordre :

1. sécurité ;
2. intégrité des données ;
3. accessibilité ;
4. compréhension utilisateur ;
5. fonctionnement ;
6. performance ;
7. cohérence éditoriale ;
8. finition esthétique.

J’inverserais légèrement fonctionnement et accessibilité selon les cas, mais l’idée est bonne : Codex ne doit pas sacrifier une protection ou une compréhension essentielle pour une belle animation qui fait « wouah ».

Règles de travail

## Méthode de travail

Avant toute modification importante :

1. identifier la racine Git ;
2. lire les AGENTS.md applicables ;
3. inspecter les fichiers concernés ;
4. présenter un plan pour les changements à risque ;
5. préserver les comportements existants non concernés ;
6. modifier le minimum nécessaire ;
7. vérifier réellement le résultat ;
8. rendre compte des limites et échecs.

Ne jamais :

- lancer `git init` sans vérifier les dossiers parents ;
- supprimer un fichier sans rechercher ses usages ;
- afficher ou journaliser des secrets ;
- simuler un succès fonctionnel ;
- déclarer un test réussi sans l’avoir exécuté ;
- remplacer silencieusement une architecture existante.

## Definition of Done

Une tâche n’est terminée que si :

- le code compile ;
- les tests applicables passent ;
- les routes concernées répondent ;
- les erreurs sont gérées côté utilisateur ;
- aucun secret n’est introduit ;
- l’accessibilité clavier est préservée ;
- prefers-reduced-motion est respecté ;
- les changements sont listés ;
- les risques résiduels sont signalés.

## Références obligatoires

Pour les décisions UX et éditoriales :

- `docs/vision-produit.md`
- `docs/manifeste-creatif.md`
- `docs/editorial.md`

Pour les modifications techniques :

- `docs/architecture.md`
- `docs/securite.md`
- `docs/accessibilite.md`
  