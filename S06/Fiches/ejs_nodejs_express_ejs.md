
# NodeJS, Express, EJS

## Sommaire
- [NodeJS, Express, EJS](#nodejs-express-ejs)
  - [Sommaire](#sommaire)
  - [EJS : Moteur de Templates](#ejs--moteur-de-templates)
    - [Introduction à EJS](#introduction-à-ejs)
    - [Installation et Configuration](#installation-et-configuration)
    - [Syntaxe de Base](#syntaxe-de-base)
    - [Partials (Vues Partielles)](#partials-vues-partielles)
    - [Exemple Complet](#exemple-complet)
  - [express.static : Gestion des Fichiers Statiques](#expressstatic--gestion-des-fichiers-statiques)
    - [Introduction à express.static](#introduction-à-expressstatic)
    - [Mise en Place](#mise-en-place)
    - [Exemple d'Utilisation](#exemple-dutilisation)
    - [Avantages de express.static](#avantages-de-expressstatic)

---

## EJS : Moteur de Templates

### Introduction à EJS
**EJS (Embedded JavaScript)** est un moteur de templates pour Node.js, permettant d'incorporer des données dynamiques dans des fichiers HTML en utilisant des balises JavaScript intégrées. Il est couramment utilisé avec Express pour générer des pages web dynamiques.

### Installation et Configuration
Pour utiliser EJS dans un projet Node.js avec Express, suivez les étapes suivantes :

1. **Installer EJS** :
   ```bash
   npm install ejs
   ```
2. **Configurer Express** pour utiliser EJS :
   ```javascript
   const express = require('express');
   const app = express();

   app.set('view engine', 'ejs');
   app.set('views', './views');
   ```
   - `view engine`: Définit EJS comme moteur de rendu.
   - `views`: Spécifie le répertoire où sont stockées les vues EJS.

### Syntaxe de Base
EJS utilise des balises spécifiques pour insérer du code JavaScript dans des fichiers HTML :
- **`<%= %>`** : Affiche le résultat d'une expression JavaScript dans le HTML.
- **`<% %>`** : Exécute du code JavaScript sans afficher de résultat.
- **`<%- %>`** : Insère du contenu HTML non échappé.

**Exemple** :
```html
<h1>Bienvenue, <%= user.name %>!</h1>
<% if (user.isAdmin) { %>
  <p>Vous avez les privilèges administrateur.</p>
<% } %>
```

### Partials (Vues Partielles)
Les partials sont des fragments réutilisables de code EJS que l'on peut inclure dans plusieurs vues. Cela permet de réduire la duplication de code et de faciliter la maintenance.

**Exemple** :
```html
<%- include('partials/header') %>
<%- include('partials/footer') %>
```

### Exemple Complet
Supposons que vous souhaitiez créer une page qui affiche un nombre aléatoire généré par le serveur :
1. **Route Express** :
   ```javascript
   app.get('/', (req, res) => {
     const randomNumber = Math.floor(Math.random() * 6) + 1;
     res.render('index', { nombre: randomNumber });
   });
   ```
2. **Vue EJS (`views/index.ejs`)** :
   ```html
   <h1>Nombre aléatoire : <%= nombre %></h1>
   <% if (nombre === 6) { %>
     <p>Félicitations, vous avez obtenu le maximum !</p>
   <% } %>
   ```

---

## express.static : Gestion des Fichiers Statiques

### Introduction à express.static
**express.static** est un middleware intégré à Express qui permet de servir facilement des fichiers statiques (comme des images, des fichiers CSS ou JavaScript) sans avoir à définir de routes spécifiques pour chaque ressource.

### Mise en Place
Pour configurer un répertoire pour les fichiers statiques dans Express :
```javascript
app.use(express.static('public'));
```
- Le répertoire `public` contient tous les fichiers statiques qui seront servis par Express.

### Exemple d'Utilisation
Si vous avez un fichier `logo.png` dans le répertoire `public/images`, il sera accessible via :
```
http://localhost:3000/images/logo.png
```

### Avantages de express.static
L'utilisation de `express.static` présente plusieurs avantages :
- **Automatisation** : Inutile de créer une route pour chaque fichier statique.
- **Optimisation** : Express gère efficacement les requêtes pour les fichiers statiques, réduisant la charge sur le serveur.
- **Séparation des préoccupations** : Garde la logique des routes séparée de la gestion des fichiers statiques.

---
