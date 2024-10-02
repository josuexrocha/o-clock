
# Récapitulatif : Injections SQL, Requêtes Préparées, Cookies, et Sessions

## 1. Injections SQL et Requêtes Préparées

### Injections SQL
L'injection SQL est une technique d'attaque sur une base de données en injectant du code SQL malveillant dans une requête légitime. Cela se produit lorsque les données d'entrée de l'utilisateur ne sont pas correctement vérifiées, permettant à un attaquant de manipuler une requête pour :
- Accéder à des données non autorisées
- Modifier ou supprimer des données
- Contourner les authentifications

**Exemple d'injection SQL classique** :
```sql
SELECT * FROM users WHERE username = 'admin' --' AND password = 'password';
```

### Requêtes Préparées
Les requêtes préparées sont une méthode de sécurisation des requêtes SQL en séparant les données des commandes SQL. Elles permettent de protéger l'application contre les injections SQL.

**Exemple de requête préparée avec `pg` dans Node.js** :
```js
const client = new Client();
await client.connect();
const res = await client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
```

## 2. Cookies

### Définition
Les cookies sont de petits fichiers stockés par le navigateur sur le disque dur de l'utilisateur. Ils permettent de conserver des informations sur l'utilisateur entre plusieurs requêtes HTTP.

### Types de cookies
- **Cookies de session** : stockés uniquement pendant la session de navigation, supprimés à la fermeture du navigateur.
- **Cookies persistants** : stockés pour une durée définie, même après la fermeture du navigateur.

### Utilisation des cookies
**Exemple d'utilisation des cookies avec Express et `cookie-parser`** :
```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  res.send('Cookie is set');
});
```

## 3. Sessions

### Définition
Une session permet de stocker temporairement des informations sur un utilisateur côté serveur.

### Fonctionnement
Lorsqu'une session est créée, un cookie contenant un identifiant de session unique est envoyé au navigateur de l'utilisateur. Cet identifiant permet de retrouver la session sur le serveur.

**Exemple d'implémentation avec `express-session`** :
```js
const session = require('express-session');
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.get('/login', (req, res) => {
  req.session.userId = 123;
  res.send('Session set');
});
```

### Cookies et Sessions
- Les sessions dépendent des cookies pour identifier l'utilisateur.
- Si un utilisateur supprime ses cookies, il perdra l'accès à sa session sur le serveur.

## Ressources supplémentaires
- [Node-postgres (pg)](https://node-postgres.com)
- [Express-session](https://www.npmjs.com/package/express-session)
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
