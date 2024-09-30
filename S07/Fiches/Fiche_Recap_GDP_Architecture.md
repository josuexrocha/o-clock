
# Fiche Récapitulative

## Gestion de projets (GDP)

### 1. **Kanban**
   - **Définition** : Un outil visuel de gestion de projet qui permet de suivre l'avancement des tâches à travers différentes étapes, comme "À faire", "En cours", et "Terminé".
   - **Fonctionnement** : Chaque tâche est représentée par une carte que l'on déplace à travers les colonnes représentant les étapes du processus. Cela aide à identifier les goulots d'étranglement et à optimiser le flux de travail.

### 2. **User Story**
   - **Définition** : Une user story est une description simple d'une fonctionnalité du point de vue de l'utilisateur final. Elle est utilisée pour s'assurer que les fonctionnalités développées apportent une réelle valeur ajoutée à l'utilisateur.
   - **Format typique** :
     - **En tant que** : [type d'utilisateur]
     - **Je veux** : [fonctionnalité]
     - **Afin de** : [objectif]
   - **Exemple** : "En tant qu'utilisateur, je veux pouvoir me connecter à l'application afin d'accéder à mon profil."

### 3. **Cahier des Charges**
   - **Définition** : Un document contractuel décrivant les besoins spécifiques auxquels un projet doit répondre. Il organise la relation entre les différents acteurs tout au long du projet.
   - **Rôle** : Sert de référence pour l'équipe de développement et le client, permettant de clarifier les attentes et d'éviter les malentendus. Il décrit précisément les objectifs à atteindre et les contraintes du projet.

## Architecture

### 1. **Organisation du Code**
   - **Approche traditionnelle** : Dans un projet de développement, le code associé aux routes (routes HTTP) était souvent directement intégré dans les fichiers de routage. Cela pouvait entraîner des fichiers de grande taille, difficilement lisibles et maintenables.
   - **Évolution vers une architecture avec Controllers** :
     - **Controllers** : Ce sont des objets qui contiennent des méthodes (fonctions) correspondant à la logique de chaque route. Ils permettent de séparer la logique métier du routage, rendant le code plus modulaire et maintenable.
     - **Router.js** : Ce fichier est maintenant responsable uniquement de l'association des routes aux méthodes des controllers, simplifiant la lecture et la gestion des routes dans l'application.

### 2. **Routes Dynamiques**
   - **Paramètres de Requête (`req.params`)** : Les paramètres de requête permettent de créer des routes dynamiques, où certaines parties de l'URL peuvent être variables et capturées pour être utilisées dans le traitement de la requête.
   - **Exemple** : Pour une route `/article/:id`, l'ID de l'article peut être extrait via `req.params.id` et utilisé pour récupérer les données associées à cet article spécifique.

## Utilisation de `dotenv` pour la Configuration des Projets Node.js
   - **Objectif** : Faciliter la gestion de la configuration d'un projet Node.js en fonction de l'environnement (développement, production).
   - **Fonctionnement** :
     1. Créez un fichier `.env` à la racine du projet contenant les variables d'environnement.
     2. Utilisez le module `dotenv` pour charger ces variables dans `process.env` en ajoutant `require('dotenv').config()` en début de fichier.
     3. **Bonnes pratiques** : Le fichier `.env` ne doit pas être versionné (ajouté dans `.gitignore`), mais un fichier `env.example` peut être fourni comme modèle pour indiquer les variables nécessaires.
