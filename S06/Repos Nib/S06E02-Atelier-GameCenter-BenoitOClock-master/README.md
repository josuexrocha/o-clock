# GameHub

Bon, on a quelques jeux qui traînent, c'est cool ! Mais c'est le bazar !

J'aimerais bien une belle plateforme pour centraliser toutes nos magnifiques créations vidéoludiques.

Pour ça, on va se créer un petit site internet _dynamique_.

## Étape 1 : mise en place

Commençons par initialiser le projet pour pouvoir y installer des dépendances.

Ensuite, installons les dépendances dont on a va avoir besoin : 
- `express` pour générer un serveur web rapidement.
- `ejs` pour gérer des views dynamiquement.

Créons ensuite `index.js`, le point d'entrée pour notre application. Dans ce fichier, on doit "appeler" les dépendances nécessaires, instancier une application express et lancer l'application.

N'oublions pas les réglages habituels de Express, à savoir:
- Le moteur de rendu.
- Le dossier des views.
- Les fichiers du dossier `public` sont des fichiers _statiques_.

## Étape 2 : page d'accueil

Mettons en place une page d'accueil, sur la route '/'.

Une intégration est déjà fournie, mais elle n'est pas terminée. Il faut compléter la `nav` en ajoutant des liens vers les jeux "Dice Roller" et "Jeu de la Fourchette".

## Étape 3 : premières routes

Il est temps de commencer à intégrer nos jeux. On met en place 2 routes : 
- `/game/fourchette` doit renvoyer la view `fourchette` déjà fournie.
- `/game/diceRoller` doit renvoyer la view `diceRoller` déjà fournie.

Au passage, il manque encore la nav dans ces views... Plutôt que de copier coller, soyons malins, et factorisons !

Attention pendant la factorisation, certains jeux (Dice Roller) nécessitent qu'un css spécifique soit inclus.

<details>
<summary>Un peu d'aide?</summary>

On va créer une view `header` qu'on va inclure au début de toutes nos views. Ce `header` contiendra tout le début de notre HTML, dont la balise `<head>`.

Or, c'est dans cette balise `<head>` qu'on doit include les css ! Pour pouvoir inclure le css spéficique au jeu "Dice Roller", il faut passer une variable à la view (cf [la doc](https://expressjs.com/fr/api.html#res.render)). Ensuite dans la view `header`, il faut tester la valeur (voir l'existence) de cette variable et inclure le fichier en conséquence.
</details>

## Étape 4 : première couche de dynamisation

Dans le code, on nous a fourni un fichier `games.json`. Ce fichier contient le détail de chacun de nos jeux.
- Commençons par importer le contenu de ce fichier dans une variable, dans le fichier `index.js`.
<details>
<summary>Hein?</summary>

On peut directement require un json :wink: !

[C'est écrit dans la doc](https://nodejs.org/api/modules.html#modules_require_id)
</details>

- Ensuite, il faut utiliser cette variable pour générer de manière dynamique les liens de la `nav` et ainsi remplacer le code en dur.

<details>
<summary>Indices</summary>

- Il faut passer la variable qui contient tous les jeux à toutes les views.
- Cette variable est un tableau, il faut utiliser une boucle pour le parcourir et générer un lien avec le contenu de chaque item.
</details>

## Étape 5: dynamisation, deuxième partie

Bon allez, ras le bol des routes en dur, on veut du vrai dynamique!

On va désactiver (commenter le code) les routes `/game/fourchette` et `/game/diceRoller`. On va les remplacer par une route paramétrée !

Cette route correspond au pattern `/game/:nomDuJeu`. Lorsqu'on accède à cette route, il faut :
- Retrouver le jeu dont le nom correspond à celui dans l'url
- Si on trouve le jeu, render la view correspondante.
- Sinon, renvoyer une page "404".

<details>
<summary>Encore des indices!</summary>

Tout ce dont on a besoin est [dans la doc](https://expressjs.com/fr/) !

Comment ça, c'est nul comme indice ? :smiling_imp:
</details>

## Bonus :skull:

Rajoutons le jeu "Invader" codé en S2 ! 

<details>
<summary>Les étapes</summary>

- Rapatrier les fichiers JS et CSS du jeu, les mettre au bon endroit et les renommer si nécessaire.
- Créer la view `invader`, y importer le HTML nécessaire.
- Rajouter les données du jeu dans `games.json`.
- :tada:

</details>
