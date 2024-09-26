
# S06 - Node.js, Express, EJS, Middlewares

## Introduction
Bienvenue dans le dépôt de ce module de formation. Ce dépôt regroupe divers projets, exercices et fiches récapitulatives qui couvrent les notions essentielles du développement web côté serveur, avec un focus sur **Node.js**, **Express**, **EJS** et les **middlewares**. Ce dépôt est conçu pour servir de ressource de révision et de base pour des projets futurs.

## Structure du Dépôt
Le dépôt est organisé en trois dossiers principaux :

- `/Projets` : Contient les projets et exercices réalisés pendant la formation.
- `/Fiches` : Regroupe des fiches récapitulatives sur des notions clés.
- `/Repos Nib` : Contient les dépôts du formateur pour référence et révision.

## Projets

### Ghibliotheque - Les films du studio Ghibli

- **Description** : Création d'un site web présentant les films du studio Ghibli, avec une navigation entre les différentes pages pour afficher les détails de chaque film.

- **Tâches Réalisées** :
  - Mise en place d'un serveur Express avec configuration du moteur de templates EJS.
  - Création des routes pour la page d'accueil (`/`), la liste des films (`/films`) et les détails d'un film (`/films/:id`).
  - Utilisation de routes paramétrées pour afficher dynamiquement les informations spécifiques à chaque film.
  - Implémentation d'une page 404 personnalisée pour les routes non définies.
  - Ajout d'un formulaire de recherche sur la page d'accueil permettant de filtrer les films par titre via une requête GET sur la route `/search`.
  - Mise en place d'un formulaire de login avec une requête POST sur la route `/login`, affichant un message de bienvenue à l'utilisateur.

- **Compétences Développées** :
  - Maîtrise du routage avec Express, y compris les routes paramétrées et la gestion des erreurs 404.
  - Utilisation du moteur de templates EJS pour générer des vues dynamiques.
  - Gestion des formulaires et des méthodes HTTP GET et POST.
  - Manipulation des données pour filtrer et afficher les films en fonction des critères de recherche.
  - Mise en place de middlewares pour gérer les données des requêtes.

- **Technologies Utilisées** :
  - Node.js
  - Express
  - EJS
  - HTML/CSS (pour une intégration simple)
  - JavaScript
  - Middlewares Express (`express.urlencoded()`)

---

### GameHub

- **Description** : Développement d'une plateforme web centralisant plusieurs jeux, avec une navigation dynamique et l'intégration de jeux précédemment codés.

- **Tâches Réalisées** :
  - Initialisation du projet avec NPM et installation des dépendances nécessaires (`express` et `ejs`).
  - Mise en place du serveur Express et configuration du moteur de templates EJS.
  - Création de la page d'accueil avec une navigation vers les jeux disponibles.
  - Intégration des jeux "Dice Roller" et "Jeu de la Fourchette" en créant les routes correspondantes.
  - Factorisation du code en utilisant des partials EJS pour le header et la navigation.
  - Dynamisation de la navigation en utilisant un fichier `games.json` pour générer automatiquement les liens vers les jeux.
  - Implémentation d'une route paramétrée `/game/:nomDuJeu` pour gérer l'affichage des jeux de manière dynamique.
  - Gestion de l'inclusion conditionnelle de fichiers CSS spécifiques à chaque jeu.
  - **Bonus** : Ajout du jeu "Invader" et intégration complète dans la plateforme.

- **Compétences Développées** :
  - Configuration avancée d'Express et utilisation d'EJS pour les vues dynamiques.
  - Utilisation de données JSON pour générer du contenu et des routes de manière dynamique.
  - Mise en place et gestion de routes paramétrées avec Express.
  - Factorisation du code avec des partials pour améliorer la maintenance du code.
  - Gestion conditionnelle de l'inclusion de fichiers statiques (CSS/JS) en fonction des pages.

- **Technologies Utilisées** :
  - Node.js
  - Express
  - EJS
  - JavaScript (pour les jeux)
  - HTML/CSS
  - JSON

---

### O'Blog

- **Description** : Création d'un blog dynamique pour partager des articles, avec une intégration soignée et une navigation entre les pages d'articles.

- **Tâches Réalisées** :
  - Initialisation du projet et mise en place du serveur Express avec EJS.
  - Configuration des fichiers statiques et adaptation des chemins dans l'intégration HTML/CSS fournie.
  - Transformation de l'intégration statique en vues dynamiques EJS.
  - Importation des données des articles depuis un fichier JSON et affichage dynamique sur la page d'accueil.
  - Création d'une route paramétrée `/article/:id` pour afficher les détails d'un article spécifique.
  - Modification des liens "Lire l'article" pour qu'ils redirigent vers la page détaillée correspondante.
  - Factorisation des vues en créant des partials pour le header, le footer et d'autres éléments communs.
  - **Bonus 1** : Isolation du routage dans un module séparé.
  - **Bonus 2** : Création d'une route pour afficher les articles par catégorie.
  - **Bonus 3** : Structuration de la logique métier dans un module dédié.
  - **Bonus 4** : Limitation du résumé des articles sur la page d'accueil à 30 mots maximum.

- **Compétences Développées** :
  - Mise en place d'un serveur web avec Express et configuration du moteur de templates.
  - Gestion des routes statiques et paramétrées pour la navigation entre les pages.
  - Utilisation d'EJS pour générer des vues dynamiques à partir de données JSON.
  - Factorisation et modularisation du code pour une meilleure organisation et maintenance.
  - Manipulation des données pour filtrer les articles par catégorie et limiter le contenu affiché.
  - Application de bonnes pratiques en structurant le code en modules séparés.

- **Technologies Utilisées** :
  - Node.js
  - Express
  - EJS
  - HTML/CSS (intégration fournie)
  - JavaScript
  - JSON

---

## Fiches

### EJS : Moteur de Templates
- **Description** : Fiche récapitulative sur l'utilisation d'**EJS** comme moteur de templates pour Node.js, couvrant l'installation, la configuration, la syntaxe de base, l'utilisation des partials et un exemple complet d'application.

### express.static : Gestion des Fichiers Statiques
- **Description** : Fiche expliquant comment utiliser le middleware `express.static` pour servir des fichiers statiques, avec des exemples d'utilisation et les avantages de cette approche.

### Méthodes HTTP GET et POST avec Express
- **Description** : Fiche détaillant les méthodes HTTP **GET** et **POST**, comment les gérer avec Express, la récupération des paramètres et données envoyées, et l'importance du middleware `express.urlencoded()`.

### Middleware et Express
- **Description** : Fiche expliquant le concept des **middlewares** dans Express, leur fonctionnement, l'importance de l'ordre des middlewares et comment les utiliser pour structurer une application Express.

---

## Liens Utiles
- [Documentation Node.js](https://nodejs.org/en/docs/)
- [Documentation Express](https://expressjs.com/fr/)
- [Documentation EJS](https://ejs.co/)
- [Guide sur les Middlewares Express](https://expressjs.com/fr/guide/using-middleware.html)
- [MDN Web Docs - Méthodes HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods)
- [Tutoriel Express.js](https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs)

---

Ce dépôt est un excellent point de départ pour réviser et consolider vos compétences en **Node.js**, **Express**, **EJS** et le développement de serveurs web avec des **middlewares**. N'hésitez pas à explorer les projets et à consulter les fiches pour approfondir votre compréhension.
