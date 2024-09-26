# O'Blog

![Aperçu](integration/apercu.png "Aperçu")

Chez O'Clock, ce qu'on aime le plus, c'est nos étudiants (vous, du coup :heart:).

Et nos étudiants, ils ont plein d'histoires à raconter. Des aventures rocambolesques, des astuces techniques révolutionnaires, et même des blagues nulles.

Du coup, il nous faudrait une petite plateforme pour pouvoir partager tout ça avec le monde entier. Un blog quoi. Et comme on est _corporate_, on va l'appeller O'Blog ! :tada:

## Objectifs
Mettre en place :
- Un serveur avec Express.
- Un routage statique.
- Des views dynamiques et partialisées.
- Un routage paramétré.
- Une intégration qui claque :star:.

Le tout, dans du code bien organisé!

## Étape 1 - Initialiser le projet

Initialiser le projet, installer les packages nécessaires, et mettre en place le serveur.
<details>
<summary>Plus d'infos.</summary>

- NPM est ton ami.
- On a besoin de: express, ejs, et c'est tout.
- Il faut créer un point d'entrée (un fichier), dans lequel il faut importer les packages, puis instancier, configurer et lancer un serveur `express`.

</details>

## Étape 2 - Première route

Mettre en place la page d'accueil sur l'url `/`. L'intégration HTML/CSS est fournie.

<details>
<summary>Plus d'infos.</summary>

- [La doc, toujours la doc.](https://expressjs.com/fr/guide/routing.html)
- Il suffit de renvoyer le contenu du fichier fourni pour commencer.
- Ne pas oublier de [mettre en place les fichiers statiques](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express). Il faudra aussi probablement modifier le chemin d'accès à ces fichiers dans le code HTML.
</details>

:warning: **NE PAS utiliser le dossier `integration` comme dossier statique !** Sinon Express va servir les fichiers HTML et ignorer le routeur !


## Étape 3 - Dynamisation de la route

Remplacer les articles en dur dans la page d'accueil par les données fournies.

<details>
<summary>Plus d'infos.</summary>

- Commencer par repérer la structure HTML de chaque `<article>`. Où sont le titre, le sous-titre, l'url de l'image, etc...
- Créer une view ejs, y importer le code de la page d'accueil, et modifier la méthode correspondant à la route `/` pour qu'elle [renvoie la view](https://expressjs.com/fr/4x/api.html#res.render).
- Importer les données fournies (`data/articles.json`) dans une variable, et passer cette variable à la view.
- Repérer dans les données fournies ce qui correspond aux différents éléments des `<article>`.
- Dans la view, remplacer les `<article>` en dur par une structure de code qui parcourt les données fournies et génère des `<article>` de manière dynamique !

</details>


## Étape 4 - Route paramétrée

Mettre en place la page "détails d'un article", sur la route dynamique `/article/:id`. Une intégration est fournie.

Transformer la page d'accueil pour que le bouton "Lire l'article" de chaque article soit cliquable et mène vers la page "détails" correspondante.

<details>
<summary>Plus d'infos.</summary>

- [Devinez quoi? bah oui, la doc.](https://expressjs.com/en/guide/routing.html#route-parameters)
- Transformer l'intégration fournie en view EJS.
- Mettre en place la route, qui doit renvoyer la view nouvellement créée.
- Retrouver le bon article dans la liste d'articles en fonction du paramètre `id` de la route.
- Passer le bon article à la view, et modifier celle-ci pour qu'elle utilise les données de l'article.

</details>

## Étape 5 - Factorisation des vues

Factoriser les vues.

<details>
<summary>Plus d'infos.</summary>

- Repérer le code HTML qui se répète dans `index` et `article`.
- Créer des _partials views_ pour y mettre le code à factoriser.
- Inclure ces _partials_ dans les views `index` et `article`.
</details>

## Bonus 1 - Router et module 

Isoler le routage dans un module.

<details>
<summary>Détails</summary>

Les bonus ne sont que des bonus. Du coup pas d'aide :smile:
</details>

## Bonus 2 - Route paramétrée 2

Mettre en place une page qui liste uniquement les articles appartenant à une catégorie donnée.

## Bonus 3 - Plus de module

Isoler toute la logique (les fonctions liées aux routes) dans un autre module.

## Bonus 4 - Algo

Faire en sorte de limiter le résumé de chaque article sur la page d'accueil à 30 mots par article.

Les méthodes des String et des Array peuvent aider...

