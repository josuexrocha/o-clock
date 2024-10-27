
# S09 - Projet o'Coffee

## Table des Matières

- [S09 - Projet o'Coffee](#s09---projet-ocoffee)
  - [Table des Matières](#table-des-matières)
  - [Présentation](#présentation)
  - [Objectifs Pédagogiques](#objectifs-pédagogiques)
    - [Hard Skills](#hard-skills)
    - [Soft Skills](#soft-skills)
  - [Tâches Réalisées](#tâches-réalisées)
  - [Compétences Acquises](#compétences-acquises)
  - [Stack Technologique](#stack-technologique)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Bonnes Pratiques](#bonnes-pratiques)
  - [Bonus](#bonus)
  - [Contributions](#contributions)

## Présentation

oCoffee est un site vitrine responsive développé dans le cadre de la **Saison Neuf** de ma formation en conception et développement d'applications. Ce projet solo m'a permis de mettre en pratique les compétences acquises en développement web, en structuration d'une application MVC, ainsi qu'en gestion de bases de données.

## Objectifs Pédagogiques

### Hard Skills

- **Développement d'une intégration d'un site vitrine responsive.**
- **Développement d'une interface aux contenus générés dynamiquement.**
- **Mise en place et connexion à une base de données PostgreSQL.**
- **Développement de composants d'accès aux données.**
- **Développement d'une architecture MVC avec moteur de rendu côté serveur (EJS).**

### Soft Skills

- **Organisation du temps de travail.**
- **Utilisation des tickets GitHub (`issues`) pour la gestion des difficultés.**
- **Recherche d'informations via des documentations tierces.**

## Tâches Réalisées

- **Jour 1 :**
  - Intégration de la page d'accueil.
  - Intégration de la page du catalogue.

- **Jour 2 :**
  - Intégration de la page de détail d'un produit.
  - Création de la page 404 personnalisée.
  - Mise en place de l'architecture Express et EJS.
  - Gestion des partials pour une meilleure réutilisation du code.

- **Jour 3 :**
  - Mise en place de la base de données PostgreSQL.
  - Développement des composants d'accès aux données (Models).
  - Dynamisation de la page d'accueil avec des contenus dynamiques.

- **Jour 4 :**
  - Dynamisation de toutes les vues.
  - Intégration des sessions et gestion des utilisateurs.
  - Améliorations diverses et ajout de fonctionnalités bonus.

## Compétences Acquises

- **Backend :**
  - Maîtrise de **Node.js** et **Express** pour le développement serveur.
  - Structuration d'une application selon le modèle **MVC**.
  - Gestion des sessions utilisateur avec **express-session**.
  - Validation des données avec **express-validator** et **Joi**.
  - Sécurisation des applications avec **helmet** et **cors**.

- **Frontend :**
  - Intégration de **EJS** pour le rendu des vues dynamiques.
  - Utilisation de **Webpack** pour le bundling des assets.
  - Développement en **JavaScript vanille** et **CSS** responsive.

- **Base de Données :**
  - Conception et gestion de bases de données avec **PostgreSQL**.
  - Utilisation de **pg** et **connect-pg-simple** pour la connexion à la base de données.

- **Outils et Environnement :**
  - Utilisation de **GitHub** pour la gestion du code source et des tickets.
  - Automatisation des tâches de développement avec **nodemon**.
  - Respect des normes de code avec **ESLint** et **Prettier**.

## Stack Technologique

- **Backend :**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [EJS](https://ejs.co/)

- **Frontend :**
  - **JavaScript** (Vanilla)
  - **CSS** (Responsive Design)
  - [Webpack](https://webpack.js.org/)

- **Outils :**
  - [Nodemon](https://nodemon.io/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/VOTRE_USERNAME/ocoffee.git
   cd ocoffee
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement :**

   Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires (par exemple, `DATABASE_URL`, `SESSION_SECRET`, etc.).

4. **Démarrer le serveur :**

   - En mode développement :

     ```bash
     npm run dev
     ```

   - En mode production :

     ```bash
     npm start
     ```

## Utilisation

Une fois le serveur démarré, ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour voir le site oCoffee en action.

## Bonnes Pratiques

- **Modularité :** Le projet est structuré selon le modèle MVC, facilitant la maintenance et l'évolution.
- **Sécurité :** Utilisation de middlewares comme **helmet** pour sécuriser les en-têtes HTTP et **cors** pour gérer les requêtes cross-origin.
- **Validation :** Les données utilisateur sont validées côté serveur pour assurer l'intégrité des données.
- **Gestion des Sessions :** Implémentation sécurisée des sessions utilisateur avec **express-session** et **connect-pg-simple**.

## Bonus

Pour ceux qui souhaitent aller plus loin, voici quelques fonctionnalités complémentaires que vous pouvez implémenter :

- **Carte Interactive :** Intégration d'une carte avec [Leaflet](https://leafletjs.com/).
- **Formulaire de Contact :** Envoi d'emails de confirmation avec [EmailJS](https://www.emailjs.com/).
- **Page d'Administration :** Gestion des cafés avec ajout de photos via [Multer](https://www.npmjs.com/package/multer).
- **Déploiement :** Hébergement de l'application sur un PaaS comme [Render](https://render.com/) avec une base de données provisionnée.
- **Fonctionnalités Personnelles :** Ajoutez des fonctionnalités qui vous passionnent !

## Contributions

Ce projet étant un projet solo dans le cadre d'une formation, les contributions externes ne sont pas prévues. Toutefois, vos retours et suggestions sont les bienvenus via les [issues GitHub](https://github.com/VOTRE_USERNAME/ocoffee/issues).

