
# S10 - Programmation Orientée Objet et Architecture

## Introduction

Bienvenue dans le dépôt de ce module de formation, axé sur les concepts de la Programmation Orientée Objet (POO) et de l'architecture du code. Ce module couvre des notions fondamentales telles que l'encapsulation, l'héritage, le polymorphisme, ainsi que l'architecture MVC et l'utilisation du modèle Active Record avec Sequelize. Ce dépôt sert de ressource de révision et de base pour les projets futurs.

## Structure du Dépôt

Le dépôt est organisé en deux dossiers principaux :

- **/Fiches** : Contient des fiches récapitulatives créées pour cette saison, incluant les notions clés de la POO, le modèle MVC, l’architecture de code, le modèle Active Record, et les principes de conception SOLID.
- **/Fiches Kourou** : Ce dossier regroupe des fiches fournies par la formation en format PDF pour approfondir les concepts de modélisation de bases de données, wireframes, user stories, et autres notions en lien avec cette saison.

## Fiches Récapitulatives

### 1. Gestion de Projet Appliquée

- **Contenu** : Explication des étapes de gestion de projet, de la définition des besoins à la création du cahier des charges fonctionnel. Aborde également les user stories, les cas d’usage, les wireframes, et les bonnes pratiques en gestion de projet.

### 2. Modélisation et Conception de Bases de Données

- **Contenu** : Présente les étapes de modélisation de bases de données, du Modèle Conceptuel de Données (MCD) au Modèle Physique de Données (MPD), ainsi que les principes de normalisation, les bonnes pratiques d’optimisation, et les outils recommandés.

### 3. Programmation Orientée Objet

- **Contenu** : Concepts fondamentaux de la POO, incluant l'encapsulation, l’héritage, le polymorphisme, et des pratiques avancées comme l’abstraction et les getters/setters.

### 4. Architecture et Organisation du Code

- **Contenu** : Introduction à l’architecture MVC, le modèle Active Record, l’utilisation de Sequelize, et les principes SOLID pour structurer le code de manière modulaire et maintenable.

## Projet

### O'Quiz (Projet commun avec la Saison 11)

Le projet O'Quiz a été conçu pour mettre en pratique les notions de la POO, de la modélisation de bases de données, et de l'architecture MVC. Le développement de ce projet s'étend sur les saisons 10 et 11, et il est donc rangé dans le dépôt de la Saison 11.

#### Tâches Réalisées :
- Conception de la base de données : Création du MLD et des tables, seeding initial avec données de test pour Tag, User, et Quiz.
- Développement en POO : Création des classes principales (Answer, Level, Question, Quiz, Tag, User) et de CoreModel pour gérer les fonctionnalités communes avec héritage.
- Implémentation Active Record : Mise en place des méthodes Active Record comme findAll, findById, insert, update, et delete pour chaque modèle.

#### Compétences Développées :
- Conception de bases de données relationnelles et traduction des relations en termes de tables, clés primaires, et clés étrangères.
- Programmation orientée objet en JavaScript, avec création et utilisation de classes, et exploration des concepts de l'héritage et du polymorphisme.
- Application du modèle Active Record avec Sequelize pour effectuer des opérations CRUD sur la base de données.
- Organisation du code selon une architecture MVC, séparation des responsabilités entre les modèles, les vues, et les contrôleurs.

#### Technologies Utilisées :
- Node.js pour la création du serveur backend.
- Express.js pour la gestion des routes et la logique serveur.
- Sequelize pour la gestion des interactions avec la base de données PostgreSQL.
- PostgreSQL comme SGBD pour stocker les données du quiz et des utilisateurs.

## Ressources Supplémentaires

- [JavaScript Documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/)
- [Sequelize Documentation](https://sequelize.org/)
- [Guide des Bonnes Pratiques MVC](https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs/mvc)

Ce dépôt est un support de révision et un guide structuré pour approfondir les concepts de la POO et de l'architecture MVC. N'hésite pas à explorer les fiches pour renforcer ta compréhension et consulter le dépôt de la Saison 11 pour les détails du projet O'Quiz.
