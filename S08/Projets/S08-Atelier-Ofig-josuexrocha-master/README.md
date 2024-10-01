# O'Fig

## Étape 1: Mise en place

Utiliser npm pour:
- Initialiser le projet.
- Installer les dépendances nécessaires : `express`, `ejs`, `pg`, et `dotenv`.

Une base de code express _fonctionnelle_ est fournie, ainsi qu'une intégration _qui claque_. Prendre le temps de lire ce code.

## Étape 2: Factorisation des views

<details>
<summary>Besoin d'aide ?</summary>

- Créer un dossier `views` dans le dossier `app`, y copier les fichiers html fournis en les renommant en `.ejs`.
- Faire les réglages de express pour utiliser EJS et le bon dossier de views.
- Créer les fichiers `header.ejs`, `footer.ejs` et `leftMenu.ejs` (pour le menu qui se trouve sur la gauche), y mettre le code HTML factorisable, et inclure ces fichiers dans les autres views.
- Modifier les méthodes des controllers pour utiliser les views ejs.

</details>

## Étape 3: Brancher la Base de Données

Les données sont fournies dans un fichier `create_db.sql`, à importer dans une base de données PostGreSQL. 

Créer un nouvel utilisateur et une nouvelle base de données dans PostGreSQL, puis y importer les données du fichier. [Cette fiche récap](https://kourou.oclock.io/ressources/objectifs/creer-une-nouvelle-base-de-donnee-sur-postgresql/) peut être utile :wink:.

Créer un fichier `.env`, pour y mettre les informations de connexion à la base de données.

Créer ensuite un fichier `dataMapper.js` dans le dossier `app`.

Dans ce fichier, copier ce code :

```javascript
const client = require('./database');

const dataMapper = {


};

module.exports = dataMapper;
```

Puis ajouter et implémenter les méthodes suivantes dans l'objet dataMapper:

- `getAllFigurines()` qui va chercher toutes les figurines dans la table `figurine`.
- `getOneFigurine(id)` qui va chercher une seule figurine dans la table `figurine`.

Toutes ces méthodes renverrons un tableaux d'objets contenant les infos des figurines, un objet figurine ou null.
Toutes ses méthodes seront asynchrone (`async`).

## Étape 4: Dynamisation !

### 4.1: Accueil

Modifier la méthode `homePage` de l'objet `mainController`. Cette méthode doit : 
- Appeller `dataMapper.getAllFigurines` pour récupérer toutes les figurines.
- Envoyer à la vue la liste des figurines.

Modifier la view `accueil` pour utiliser les données qui viennent de la base de données !

Ne pas se soucier du menu de gauche pour l'instant !

Ne pas hésiter à modifier ou étendre le fichier CSS pour des manipulations plus facile (par exemple pour les noms des catégories).

<details>
<summary>Un peu d'aide pour utiliser le dataMapper ?</summary>

- Ne pas oublié `await` devant le `client.query` ET la méthode du dataMapper `dataMapper.getAllFigurines()`.
- Pour gérer l'erreur, entourer l'appel du dataMapper et l'appel du `render()` par un bloc `try/catch`.
- et c'est tout :wink:.

</details>

### 4.2: Article

- Changer la route `/article` pour qu'elle attende un paramètre.
- Modifier la méthode `articlePage` de l'objet `mainController` sur le même principe que précédemment, en utilisant le paramètre situé dans la requête.
- Mettre à jour la view `article` pour utiliser les données de la BDD.
- Mettre à jour la view `accueil` pour que les liens pointent vers la bonne page article.

## Étape 5 : Les favoris

On va gérer la liste des figurines favorites avec une session.

### 5.1: Mise en place

- Ajouter le package `express-session`. Un petit tour sur [la doc](https://www.npmjs.com/package/express-session), ça peut pas faire de mal.
- Mettre en place le middleware dans `index.js`

<details>
<summary>Au secours !</summary>

```js
const expressSession = require('express-session');
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));
```

</details>

### 5.2: Ajouter une figurine

Implémenter une nouvelle route `/bookmarks/add/:id`, qui ajoute la figurine correspondante (cf paramètre `id`) dans la session. Cette route redirige ensuite vers `/bookmarks`, et tous les boutons "Ajouter aux favoris" doivent pointer sur cette route.

<details>
<summary>De l'aide !?</summary>

- Qui dit "créer une nouvelle route", dit "créer une nouvelle méthode" !
- Dans cette nouvelle méthode:
    - Si la liste n'existe pas, il faut la créer ! (`req.session.bookmarks = []`)
    - Puis tester si la figurine est déjà dans la liste.
    - Si la figurine n'est pas dans la lise, récupérer la figurine dans la base de données avec `dataMapper.getOneFigurine`.
    - Puis ajouter la figurine à la liste (`req.session.bookmarks.push(figurine)`)
    - Si la figurine est déjà dans la liste, il n'y a rien à faire !
    - Dans tous les cas, rediriger vers la route `/bookmarks`, grâce à la méthode `res.redirect`

</details>

### 5.3: Afficher la liste des favoris

Modifier la méthode `bookmarksPage` pour qu'elle utilise les données de la session. 

### 5.4: Supprimer une figurine

Implémenter une nouvelle route `/bookmarks/delete/:id`, qui supprime la figurine correspondante dans la session. Les liens `Enlever de la liste` dans la page "favoris" doivent pointer vers cette route !

<details>
<summary>Un peu d'aide</summary>

- Nouvelle route, nouvelle méthode !
- Dans cette méthode : 
    - Enlever la figurine de la liste (avec `req.session.bookmarks.filter(...)` ).
    - Et rediriger vers la route `/bookmarks`

</details>

## Bonus 1 : Les reviews

Tiens ? y'a une autre table dans la bdd !?

Elle contient des reviews sur les figurines. Ces reviews doivent être intégrés dans la page article, dans la modale prévue à cet effet.

<details>
<summary>Un peu d'aide ?</summary>

Non. C'est un bonus, alors pas d'aide ! :wink:
</details>

## Bonus 2 : Les catégories

### 1ère partie, les badges du menu de gauche

Allez, go.

<details>
<summary>Des indices ?</summary>

- Écrire une requête dans dataMapper pour récupérer _le nombre de figurines_ de chaque catégorie.
- Appeler cette requête dans toutes les pages ou on en a besoin !

</details>

### 2ème partie, les liens du menu de gauche

Chaque lien doit envoyer vers une page qui ne liste que les figurines de la catégorie cliquée. Tout est dit !

## Bonus DE LA MORT : Les notes

Trouver un moyen de calculer et d'afficher la note globale de chaque figurine à partir des notes des reviews associés.
