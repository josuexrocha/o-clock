# S07 - PostgreSQL, Express, Node.js, Gestion de Projets

## Introduction
Bienvenue dans le dépôt de ce module de formation. Ce dépôt regroupe divers projets, exercices et fiches récapitulatives qui couvrent les notions essentielles du développement web côté serveur, avec un focus sur **PostgreSQL**, **Express**, **Node.js** et la **gestion de projets**. Ce dépôt est conçu pour servir de ressource de révision et de base pour des projets futurs.

## Structure du Dépôt
Le dépôt est organisé en quatre dossiers principaux :

- `/Cheatsheet` : Contient un fichier `.md` avec une cheatsheet SQL et PostgreSQL pour référence rapide.
- `/Corrections` : Contient le projet de la saison fourni par le formateur à la fin pour comparaison et révision.
- `/Fiches` : Regroupe des fiches récapitulatives sur des notions clés abordées pendant la semaine.
- `/Projet` : Contient le projet de la semaine, avec les différentes étapes et challenges.

## Projet

### Trombinoclock

- **Description** : Développement d'une application web permettant de gérer les étudiants et les promotions, avec une interface pour afficher, ajouter et modifier les informations, en utilisant une base de données PostgreSQL et un serveur Express.

- **Tâches Réalisées** :

  #### Challenge du Soir (n°1)

  - **Lister les étudiants d'une promo** :
    - Création d'une route paramétrée `/promo/:id/students` pour afficher les étudiants d'une promotion spécifique.
    - Mise en place d'une méthode dans le controller pour récupérer l'ID de la promotion et filtrer les étudiants correspondants.
    - Construction de la vue pour lister les étudiants.
    - **Compétences Développées** :
      - Maîtrise des routes paramétrées avec Express.
      - Manipulation de données pour filtrer les étudiants par promotion.
      - Création de vues dynamiques avec EJS.
    - **Technologies Utilisées** :
      - Node.js
      - Express
      - EJS
      - JavaScript
      - HTML/CSS

  #### Challenge Épisode 2

  - **Étape 1 : Écriture de Requêtes SQL** :
    - Rédaction de requêtes SQL pour obtenir des informations spécifiques :
      - Sélection de toutes les promotions par ordre alphabétique.
      - Sélection de tous les étudiants par ordre alphabétique des noms de famille.
      - Sélection des étudiants d'une promotion spécifique.
      - Recherche d'étudiants dont le nom ou le prénom contient une certaine chaîne de caractères.

  - **Étape 2 : Intégration SQL avec Express** :
    - Modification de la fonctionnalité "liste des promotions" pour utiliser une requête SQL.
    - Connexion à la base de données PostgreSQL à l'aide du module `pg`.
    - Exécution de requêtes SQL pour récupérer les données dynamiquement.

  - **Bonus** :
    - Utilisation des Promises pour gérer les requêtes SQL avec `client.query`.
    - Refactorisation du code pour utiliser `async/await` pour une meilleure lisibilité et gestion des opérations asynchrones.

  - **Compétences Développées** :
    - Écriture de requêtes SQL pour interroger une base de données.
    - Intégration de PostgreSQL avec un serveur Node.js.
    - Gestion des opérations asynchrones avec Promises et `async/await`.
    - Gestion des erreurs et des retours de données asynchrones.

  - **Technologies Utilisées** :
    - Node.js
    - Express
    - PostgreSQL
    - Module `pg` pour Node.js
    - SQL
    - JavaScript
    - EJS


  #### Challenge Épisode 3

  - **Écriture de Requêtes SQL Avancées** :
    - Insertion de nouveaux enregistrements dans les tables `student` et `promo`.
    - Mise à jour des enregistrements existants dans la base de données.
    - Suppression d'enregistrements spécifiques.

  - **Bonus : Utilisation de `async/await`** :
    - Refactorisation du code pour utiliser `async/await` au lieu des callbacks ou des Promises enchaînées.
    - Gestion des erreurs avec `try/catch` lors des opérations asynchrones.

  - **Compétences Développées** :
    - Maîtrise des opérations CRUD (Create, Read, Update, Delete) en SQL.
    - Utilisation avancée de `async/await` pour les opérations asynchrones.
    - Gestion des erreurs asynchrones dans un environnement Node.js.

  - **Technologies Utilisées** :
    - Node.js
    - Express
    - PostgreSQL
    - SQL
    - JavaScript

  #### Challenge Épisode 4

  - **Ajout d'un Étudiant** :
    - Création d'un formulaire pour ajouter un nouvel étudiant, accessible via un lien "Ajouter un étudiant" sur la page d'accueil.
    - Implémentation de la route `/admin/addStudent` et le traitement dans un nouveau controller `adminController`.
    - Remplissage dynamique du `<select>` du formulaire avec les promotions disponibles depuis la base de données.
    - Traitement de la soumission du formulaire pour insérer un nouvel étudiant dans la base de données.
    - Redirection de l'utilisateur vers la page de détails de la promotion après l'ajout.
    - **Compétences Développées** :
      - Gestion des formulaires en Express avec les méthodes HTTP POST.
      - Utilisation du middleware `express.urlencoded()` pour traiter les données du formulaire.
      - Interaction avec la base de données pour insérer de nouveaux enregistrements.
      - Gestion des routes et des controllers pour organiser le code.
    - **Technologies Utilisées** :
      - Node.js
      - Express
      - PostgreSQL
      - Module `pg` pour Node.js
      - EJS
      - HTML/CSS
      - JavaScript

## Compétences Globales Développées

  - Gestion de projets avec des méthodes agiles (Kanban, User Stories).
  - Modélisation de bases de données avec la méthode MERISE (MCD et MLD).
  - Utilisation de SGBDR et du langage SQL pour interagir avec les données.
  - Factorisation de la connexion à la base de données et mise en place d'un DataMapper.
  - Gestion des opérations asynchrones avec `async/await` et gestion des erreurs.
  - Organisation du code avec une architecture MVC (Model-View-Controller).
  - Configuration des projets Node.js avec `dotenv` pour gérer les variables d'environnement.

## Fiches

### Gestion de Projets (GDP)

- **Kanban** : Présentation de l'outil visuel de gestion de projet permettant de suivre l'avancement des tâches à travers différentes étapes.
- **User Story** : Explication de la méthode pour décrire les fonctionnalités du point de vue de l'utilisateur final, afin d'apporter une réelle valeur ajoutée.
- **Cahier des Charges** : Importance du document contractuel décrivant les besoins spécifiques auxquels un projet doit répondre, pour organiser la relation entre les différents acteurs.

### Architecture

- **Organisation du Code** : Transition de l'approche traditionnelle vers une architecture avec Controllers pour une meilleure modularité et maintenabilité du code.
- **Routes Dynamiques** : Utilisation des paramètres de requête (`req.params`) pour créer des routes dynamiques et afficher des données spécifiques.
- **Utilisation de `dotenv`** : Gestion de la configuration des projets Node.js en fonction de l'environnement (développement, production) avec le module `dotenv`.

### Introduction aux SGBDR

- **Systèmes de Gestion de Bases de Données Relationnelles** : Définition, rôle, avantages et concepts clés des SGBDR.
- **Modélisation via la méthode MERISE** : Explication du Modèle Conceptuel de Données (MCD) et du Modèle Logique de Données (MLD) pour la conception et la structuration des bases de données.
- **Découverte du Langage SQL** : Introduction aux commandes SQL pour créer, modifier, interroger et gérer des bases de données.
- **Principe des Fonctions de Retour (Callback)** : Importance des callbacks dans les applications web pour gérer les opérations asynchrones.

### Factorisation et DataMapper

- **Factorisation de la Connexion à la BDD** : Centralisation de la logique de connexion pour une gestion efficace et une maintenance simplifiée.
- **Mise en Place d'un DataMapper** : Séparation de la logique d'accès aux données de la logique métier pour un code propre et facile à maintenir.
- **Utilisation de `async/await` avec Gestion d'Erreurs (`try/catch`)** : Amélioration de la lisibilité du code asynchrone et gestion efficace des erreurs.

### Gestion de la Base de Données

- **Mise en Place d'un Utilisateur et d'une Base de Données** : Étapes pour créer un utilisateur PostgreSQL et une base de données associée.
- **Création, Modification et Suppression de Tables** : Commandes SQL pour gérer les structures de données.
- **Création, Modification et Suppression de Données** : Opérations pour manipuler les enregistrements dans les tables.
- **Connexion à la Base de Données depuis Node.js via le Module `pg`** : Utilisation du module `pg` pour interagir avec PostgreSQL.

## Cheatsheet

- **SQL et PostgreSQL Cheatsheet** : Un fichier `.md` regroupant les commandes SQL essentielles pour interagir avec une base de données PostgreSQL, pour une référence rapide lors du développement.

## Liens Utiles

- [Documentation Node.js](https://nodejs.org/en/docs/)
- [Documentation Express](https://expressjs.com/fr/)
- [Documentation PostgreSQL](https://www.postgresql.org/docs/)
- [Documentation du module `pg` pour Node.js](https://node-postgres.com/)
- [SQL.sh - Apprendre le SQL](https://sql.sh/)
- [Guide sur les Promises en JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Guide sur `async/await` en JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs - Méthodes HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods)
- [Tutoriel Express.js](https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs)

---

Ce dépôt est un excellent point de départ pour réviser et consolider vos compétences en **PostgreSQL**, **Express**, **Node.js**, et la **gestion de projets**. N'hésitez pas à explorer les projets et à consulter les fiches pour approfondir votre compréhension.
