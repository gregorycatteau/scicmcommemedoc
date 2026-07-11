# Instructions backend

## Sécurité

Tout champ reçu depuis le frontend est non fiable.

Obligations :

- validation serveur stricte ;
  
- limites de longueur ;
- normalisation contrôlée ;
- rejet des caractères de contrôle lorsque nécessaire ;
- protection contre l’injection ;
- limitation de débit ;
- journalisation sans données sensibles ;
- erreurs génériques côté client ;
- détails techniques uniquement dans les logs internes.

## GraphQL

- Ne jamais exposer de stack trace en production.
- Limiter profondeur et complexité des requêtes.
- Désactiver ou contrôler l’introspection en production selon les besoins.
- Utiliser des listes d’opérations ou des contrôles d’autorisation explicites.
- Vérifier l’autorisation dans chaque resolver concerné.
- Éviter les mutations trop permissives.
- Ne jamais considérer la validation frontend comme une protection.

## Données

- Appliquer le principe de minimisation.
- Ne pas conserver de données inutiles.
- Ne pas mettre d’informations personnelles dans les logs.
- Documenter la durée de conservation.
