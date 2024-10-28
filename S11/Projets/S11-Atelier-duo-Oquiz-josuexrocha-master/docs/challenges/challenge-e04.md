# Challenge Episode 4

On a un super ORM. On est plutôt bien !

On rajouterait pas quelques légumes (modèles) dans notre soupe (O'quiz) ?

## Partie 1 

Ajouter les `models` manquants, qui n'ont pas encore été traités en Cockpit :

- `Level`
- `Tag`
- `User`
- `Question`
- `Answer` (si vous avez le temps)
- `Quiz` (si vous avez le temps)

Et on oublie pas de tester ! Par exemple, dans un fichier de `test.js` :

- récupérer toutes les questions.
- trouver la question dont l'ID est 3.
- créer un niveau `très difficile` et l'insérer en BDD.
- …

## Partie 2 - Le BONUS qui pique

Exploratoire, mais sera corrigé !

- **Récupérer une `Question` en incluant son `Level` associé.**

Indices :

- Oui, c'est l'équivalent d'une *jointure* SQL...
  - mais avec `Sequelize`, c'est vachement moins verbeux !
- Il faut toutefois mettre en place/déclarer l'association
  - https://sequelize.org/docs/v6/core-concepts/assocs/