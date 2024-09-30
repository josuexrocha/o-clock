
# Fiche Récapitulative

## 1. Factorisation de la connexion à la base de données (BDD)

La factorisation de la connexion à la BDD consiste à centraliser la logique de connexion pour éviter de dupliquer le code à plusieurs endroits dans l'application. Cela permet une gestion plus efficace des connexions et simplifie les ajustements futurs (comme changer les configurations de connexion).

### Étapes de factorisation de la connexion :
1. **Créer un fichier de connexion à la BDD** (par exemple `db.js`).
2. **Configurer la connexion à l'aide d'un client (ex: pg pour PostgreSQL)** en utilisant les variables d'environnement.
3. **Exporter la connexion** pour l'utiliser dans d'autres modules de l'application.

### Exemple avec PostgreSQL et Node.js (module `pg`) :
```javascript
const { Client } = require('pg');

// Connexion à la base de données
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect()
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch(err => console.error('Erreur de connexion à la BDD', err.stack));

module.exports = client;
```

### Bonnes pratiques :
- Utiliser **les variables d’environnement** (`.env`) pour protéger les informations sensibles (comme les mots de passe).
- Toujours gérer les erreurs de connexion à la base de données et assurer un **message d'erreur clair** en cas de problème.
- Fermer la connexion à la BDD proprement lors de l'arrêt du serveur avec `client.end()`.

---

## 2. Mise en place d’un DataMapper

Le **DataMapper** est un modèle qui permet de séparer la logique d'accès aux données de la logique métier. Cela permet de garder le code propre et facile à maintenir.

### Étapes de mise en place d'un DataMapper :
1. **Créer un fichier DataMapper** (par exemple `userDataMapper.js`).
2. **Définir les fonctions CRUD** (Create, Read, Update, Delete) pour interagir avec la BDD.
3. **Utiliser des requêtes SQL dans ces fonctions** et les exporter pour qu'elles puissent être utilisées dans les routes ou contrôleurs.

### Exemple d’un DataMapper pour la table `users` :
```javascript
const client = require('./db'); // Connexion factorisée à la BDD

const userDataMapper = {
  async getAllUsers() {
    const query = 'SELECT * FROM users';
    const result = await client.query(query);
    return result.rows;
  },

  async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await client.query(query, [id]);
    return result.rows[0];
  },

  async createUser(user) {
    const query = `INSERT INTO users (name, email, password) 
                   VALUES ($1, $2, $3) RETURNING *`;
    const values = [user.name, user.email, user.password];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async updateUser(id, newData) {
    const query = `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *`;
    const values = [newData.name, newData.email, newData.password, id];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    await client.query(query, [id]);
  }
};

module.exports = userDataMapper;
```

### Avantages d’un DataMapper :
- **Séparation des préoccupations** : la gestion des données est isolée du reste de l'application.
- **Facilité de test** : les opérations sur les données peuvent être testées indépendamment.
- **Réutilisation** : les fonctions CRUD peuvent être utilisées partout dans l'application.
- **Flexibilité** : si vous changez de BDD, vous ne modifiez que le DataMapper, sans toucher à la logique métier.

---

## 3. Utilisation de `async/await` avec gestion d’erreurs (`try/catch`)

L'utilisation de `async/await` permet de rendre le code asynchrone plus lisible, en évitant les callbacks imbriqués (callback hell). Le mot-clé `async` permet de définir une fonction asynchrone, et `await` permet d'attendre que la promesse soit résolue avant de passer à la ligne suivante.

### Exemple basique d'utilisation de `async/await` :
```javascript
async function fetchData() {
  try {
    const result = await client.query('SELECT * FROM articles');
    return result.rows;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error; // Propagation de l'erreur si nécessaire
  }
}
```

### Utilisation avec Express pour des requêtes à la BDD :
```javascript
const express = require('express');
const router = express.Router();
const userDataMapper = require('./userDataMapper');

router.get('/users', async (req, res) => {
  try {
    const users = await userDataMapper.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    res.status(500).send('Erreur interne du serveur');
  }
});
```

### Gestion des erreurs avec `try/catch` :
Le bloc `try/catch` est essentiel pour capturer et gérer les erreurs dans les opérations asynchrones. Si une erreur survient dans le bloc `try`, le code dans `catch` sera exécuté, permettant de réagir à l'erreur sans faire planter l'application.

```javascript
router.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userDataMapper.getUserById(userId);
    if (!user) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération de l'utilisateur:', error);
    res.status(500).send('Erreur interne du serveur');
  }
});
```

### Avantages de `async/await` par rapport aux Promises :
- **Lisibilité** : le code ressemble à du code synchrone, ce qui améliore la compréhension.
- **Gestion simplifiée des erreurs** : `try/catch` permet de gérer les erreurs de manière plus claire qu’avec `.catch` pour les Promises.
- **Moins de nesting** : plus besoin d'enchaîner les `.then()`.

### Erreurs fréquentes avec `async/await` :
- **Oubli d’ajouter `async` à une fonction** : Si vous utilisez `await` sans avoir déclaré la fonction comme `async`, vous obtiendrez une erreur de syntaxe.
- **Oublier de capturer les erreurs** : Ne pas utiliser de `try/catch` peut faire planter l'application en cas d'erreur non capturée.
- **Ne pas attendre (`await`) une promesse** : Si vous oubliez d’utiliser `await` pour une promesse, vous récupérerez une promesse au lieu du résultat attendu.

---

## 4. Conseils supplémentaires 

- **Transactions** : Si vous avez plusieurs requêtes SQL dans une même opération et que vous souhaitez qu'elles soient atomiques (tout ou rien), utilisez des transactions pour garantir la cohérence des données.
- **Évitez les requêtes imbriquées** : Essayez de ne pas imbriquer plusieurs appels à la BDD dans la même fonction. Si possible, regroupez-les ou utilisez des jointures dans SQL pour réduire la complexité.
- **Cache des connexions** : Pour les applications très actives, envisagez d'utiliser un pool de connexions avec le module `pg` pour éviter de créer une nouvelle connexion à chaque requête.
