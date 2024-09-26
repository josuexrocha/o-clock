
# Node.js Cheatsheet

## 1. Installation & Initial Setup
- **Installer Node.js et npm** : [Node.js](https://nodejs.org/)
- **Initialiser un projet Node.js** :
  ```bash
  npm init
  ```
- **Installer un package** :
  ```bash
  npm install <package_name>
  ```
- **Exécuter un script Node.js** :
  ```bash
  node <filename.js>
  ```

## 2. Modules
- **Importer un module** :
  ```javascript
  const module = require('module_name');
  ```
- **Exporter un module** :
  ```javascript
  module.exports = yourModule;
  ```

## 3. Serveur HTTP basique
- **Créer un serveur** :
  ```javascript
  const http = require('http');
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  });
  
  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
  ```

## 4. Asynchronous Programming
- **Callbacks** :
  ```javascript
  fs.readFile('/file.json', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```
- **Promises** :
  ```javascript
  const doSomething = () => {
    return new Promise((resolve, reject) => {
      // Do something
      if (success) {
        resolve('Success!');
      } else {
        reject('Error!');
      }
    });
  };

  doSomething()
    .then(result => console.log(result))
    .catch(error => console.log(error));
  ```
- **Async/Await** :
  ```javascript
  const doSomethingAsync = async () => {
    try {
      const result = await doSomething();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  ```

# Express.js Cheatsheet

## 1. Installation
- **Installer Express** :
  ```bash
  npm install express
  ```

## 2. Créer une application Express basique
- **Serveur Express minimal** :
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  ```

## 3. Middleware
- **Utilisation de middleware** :
  ```javascript
  app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
  });
  ```

- **Middleware de parsing JSON** :
  ```javascript
  app.use(express.json());
  ```

## 4. Routing
- **Route GET** :
  ```javascript
  app.get('/route', (req, res) => {
    res.send('GET request to /route');
  });
  ```

- **Route POST** :
  ```javascript
  app.post('/route', (req, res) => {
    res.send('POST request to /route');
  });
  ```

- **Routes dynamiques** :
  ```javascript
  app.get('/users/:userId', (req, res) => {
    res.send(\`User ID: \${req.params.userId}\`);
  });
  ```

## 5. Response Methods
- **Envoyer une réponse en JSON** :
  ```javascript
  app.get('/json', (req, res) => {
    res.json({ message: 'Hello World' });
  });
  ```

- **Redirection** :
  ```javascript
  app.get('/redirect', (req, res) => {
    res.redirect('/new-url');
  });
  ```

- **Envoyer un fichier** :
  ```javascript
  app.get('/download', (req, res) => {
    res.download('/path/to/file');
  });
  ```

## 6. Error Handling
- **Gestion des erreurs** :
  ```javascript
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  ```

## 7. Static Files
- **Servir des fichiers statiques** :
  ```javascript
  app.use(express.static('public'));
  ```

## 8. Templating Engines
- **Utilisation de Pug (anciennement Jade)** :
  ```bash
  npm install pug
  ```
  ```javascript
  app.set('view engine', 'pug');
  app.get('/template', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  });
  ```

## 9. Connecting to a Database
- **MongoDB avec Mongoose** :
  ```bash
  npm install mongoose
  ```
  ```javascript
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true });
  ```

## 10. Environment Variables
- **Configuration avec dotenv** :
  ```bash
  npm install dotenv
  ```
  ```javascript
  require('dotenv').config();
  const dbUrl = process.env.DB_URL;
  ```

## 11. Deploying
- **Déployer sur Heroku** :
  - Créer un `Procfile` :
    ```
    web: node index.js
    ```
  - **Commandes de base** :
    ```bash
    heroku login
    heroku create
    git push heroku master
    heroku open
    ```

