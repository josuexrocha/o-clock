
# Express - Fiche récapitulative

## 1. Introduction à Express

**Express** est un framework minimaliste pour Node.js, qui facilite la création de serveurs web en simplifiant le code nécessaire pour gérer les requêtes HTTP, configurer des middlewares, et définir des routes. C'est l'un des modules les plus téléchargés sur npm, ce qui en fait un choix populaire pour développer des applications web avec Node.js.

## 2. Installation d'Express

Pour installer Express dans votre projet Node.js :

```bash
npm install express
```

Une fois installé, vous pouvez l'importer dans votre fichier principal et commencer à créer votre serveur.

## 3. Création d'un serveur basique

Voici un exemple de serveur minimaliste avec Express :

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Ce code crée un serveur qui répond à la route racine (`/`) en envoyant un message "Hello World!" au client. Le serveur écoute sur le port 3000.

## 4. Les Routes dans Express

Une **route** dans Express associe une URL à une fonction. Les routes sont essentielles pour déterminer comment une application répond à différentes requêtes client, comme les requêtes GET, POST, PUT, DELETE, etc.

### Exemple de route simple :

```javascript
app.get('/about', (req, res) => {
  res.send('About Us');
});
```

### Routes dynamiques (ou paramétrées)

Les **routes dynamiques** permettent de capturer des valeurs spécifiques dans l'URL et de les utiliser dans le traitement de la requête. Cela évite la nécessité de créer une route distincte pour chaque variation de l'URL.

**Exemple** :

```javascript
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});
```

Dans cet exemple, `:userId` est un paramètre de route. Lorsque l'utilisateur accède à `/users/42`, la réponse sera "User ID: 42". Cela permet de créer des routes plus flexibles et adaptatives.

## 5. Middleware et gestion des routes

Express fonctionne avec des **middlewares**, qui sont des fonctions exécutées lors du traitement des requêtes. Ils peuvent être utilisés pour modifier les objets `req` et `res`, terminer la requête ou passer le contrôle à un middleware suivant.

```javascript
app.use((req, res, next) => {
  console.log('Middleware en action');
  next(); // Passe le contrôle au middleware suivant
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});
```

## 6. Les meilleures pratiques pour organiser les routes

Pour les applications plus grandes, il est recommandé d'organiser les routes dans des modules séparés et d'utiliser des **routeurs** (Router) pour gérer des groupes de routes. Voici un exemple :

**Fichier `routes/users.js` :**

```javascript
const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`Profile of user ${userId}`);
});

module.exports = router;
```

**Fichier `app.js` :**

```javascript
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## 7. Références

- [Documentation officielle Express](http://expressjs.com)
- [npm - Express](https://www.npmjs.com/package/express)
