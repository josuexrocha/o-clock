
# S08 - PostgreSQL, Express, Node.js, Gestion de Projets

## Introduction
Bienvenue dans le dépôt de ce module de formation. Ce dépôt regroupe plusieurs projets, exercices et fiches récapitulatives qui couvrent les notions essentielles du développement backend, avec un focus particulier sur **PostgreSQL**, **Express**, **Node.js**, et la **gestion de projets**. Ce dépôt est conçu pour réviser ces concepts et servir de référence pour des projets futurs.

## Structure du Dépôt
Le dépôt est organisé en plusieurs dossiers principaux :

- `/Fiches` : Contient des fiches récapitulatives couvrant des notions clés comme les injections SQL, les requêtes préparées, les cookies, les sessions, les fonctions d'agrégation SQL, et les jointures SQL.
- `/Projets` : Contient quatre projets développés durant cette saison, dont un réalisé en pair-programming.
- `/Corrections` : Regroupe la correction proposée par le formateur pour les différents projets et exercices.

## Projets

### 1. Atelier Solo : Triple Triad Deck Builder

- **Description** : Développement d'une application pour gérer des cartes d'un jeu basé sur le célèbre "Triple Triad" de Final Fantasy 8. L'application permet de chercher des cartes selon divers critères et de gérer des decks de 5 cartes.
- **Compétences Développées** :
  - Manipulation de bases de données avec PostgreSQL.
  - Gestion des sessions pour stocker des informations utilisateur.
  - Création et utilisation de routes paramétrées avec Express.
- **Technologies Utilisées** : 
  - Node.js, Express, PostgreSQL, EJS, Sessions, JavaScript.

### 2. Projet Pair-programming : O'Fig

- **Description** : Création d'une boutique en ligne fictive pour vendre des figurines. Ce projet inclut la gestion de la base de données avec PostgreSQL et l'affichage dynamique des produits.
- **Compétences Développées** :
  - Dynamisation des pages web avec EJS et des routes paramétrées.
  - Utilisation des sessions pour la gestion des favoris.
  - Factorisation des vues avec des templates partiels.
- **Technologies Utilisées** : 
  - Node.js, Express, PostgreSQL, EJS, JavaScript.

### 3. O'taku : Analyse de visionnage

- **Description** : Analyse des habitudes de visionnage d'une plateforme de streaming fictive. Le projet implique des requêtes SQL avancées pour collecter et analyser des données sur les utilisateurs.
- **Compétences Développées** :
  - Requêtes SQL complexes avec agrégation pour analyser des grandes quantités de données.
  - Gestion des sessions et des cookies pour suivre les utilisateurs.
  - Utilisation d'une base de données relationnelle pour des analyses statistiques.
- **Technologies Utilisées** : 
  - PostgreSQL, Node.js, Express, EJS, Sessions.

### 4. O'goûter : Gestion des Thèmes avec Sessions

- **Description** : Création d'une petite application permettant aux utilisateurs de choisir entre un thème clair et un thème sombre, avec conservation de la préférence à l'aide de sessions.
- **Compétences Développées** :
  - Gestion des sessions avec `express-session`.
  - Dynamisation des interfaces utilisateurs en fonction des préférences stockées dans la session.
- **Technologies Utilisées** :
  - Node.js, Express, Sessions, EJS.

## Fiches Récapitulatives

### 1. Injections SQL, Requêtes Préparées, Cookies, et Sessions
Cette fiche couvre la sécurisation des applications contre les injections SQL à l'aide des requêtes préparées, ainsi que l'utilisation des cookies et sessions pour maintenir des informations utilisateur côté serveur.

### 2. Fonctions d'Agrégation SQL
Explication des principales fonctions d'agrégation comme `SUM`, `AVG`, `MAX`, `MIN`, et `GROUP BY`, souvent utilisées avec des requêtes pour regrouper et analyser des données.

### 3. SQL et JOIN
Présentation des différentes jointures SQL (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN) et des cas d'utilisation pour interroger plusieurs tables de manière efficace.

## Ressources Supplémentaires
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/fr/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL.sh - Apprendre SQL](https://sql.sh/)

---

