
# Fiche Récapitulative

## Mise en place d’un utilisateur et d’une base de données

### Création d’un utilisateur PostgreSQL :
Pour commencer un projet, il faut d'abord créer un utilisateur et une base de données associés.

#### Se connecter en tant que super-utilisateur :
```bash
sudo -i -u postgres psql
```

#### Créer un nouvel utilisateur avec un mot de passe :
```sql
CREATE USER nomUtilisateur WITH PASSWORD 'motDePasse';
```

### Création d’une base de données PostgreSQL :
Créer une base de données et en attribuer la propriété à l'utilisateur :
```sql
CREATE DATABASE nomBase OWNER nomUtilisateur;
```

#### Exemple :
```sql
CREATE DATABASE trombi OWNER trombi;
```

### Connexion à une base de données :
Tester la connexion avec l'utilisateur créé :
```bash
psql -U nomUtilisateur -d nomBase
```
Cette commande demande le mot de passe et permet de se connecter à la base nouvellement créée.

## Création, modification et suppression de tables

### Créer une table :
Utiliser la commande `CREATE TABLE` pour définir une nouvelle table :
```sql
CREATE TABLE nomTable (
  nomChamp1 typeChamp,
  nomChamp2 typeChamp
);
```

#### Exemple :
```sql
CREATE TABLE livres (
  id SERIAL PRIMARY KEY,
  titre VARCHAR(255),
  auteur_id INT REFERENCES auteurs(id)
);
```

### Modifier une table :
Pour ajouter ou modifier une colonne :
```sql
ALTER TABLE nomTable ADD COLUMN nouveauChamp typeChamp;
```

#### Exemple pour ajouter un champ password à une table user :
```sql
ALTER TABLE user ADD COLUMN password VARCHAR(16);
```

### Supprimer une table :
Supprimer une table existante :
```sql
DROP TABLE IF EXISTS nomTable;
```

Pour vider une table sans la supprimer (équivalent à un DELETE mais plus rapide) :
```sql
TRUNCATE nomTable;
```

Attention : Supprimer une table avec `DROP TABLE` supprime définitivement la structure et les données.

## Création, modification et suppression de données

### Insertion de données :
Insérer une nouvelle ligne dans une table :
```sql
INSERT INTO nomTable (champ1, champ2) VALUES (valeur1, valeur2);
```

#### Exemple :
```sql
INSERT INTO livres (titre, auteur_id) VALUES ('Les Misérables', 1);
```

### Modification de données :
Mettre à jour des valeurs dans une table :
```sql
UPDATE nomTable SET champ1 = nouvelleValeur WHERE condition;
```

#### Exemple :
```sql
UPDATE livres SET titre = 'Le Comte de Monte-Cristo' WHERE id = 2;
```

### Suppression de données :
Supprimer des lignes spécifiques d’une table :
```sql
DELETE FROM nomTable WHERE condition;
```

#### Exemple :
```sql
DELETE FROM livres WHERE id = 1;
```

Note : Si aucune condition n’est spécifiée, toutes les lignes de la table seront supprimées.

## Connexion à la base de données depuis Node via le module pg

### Installation du module pg :
Installer le module client pg pour interagir avec une base de données PostgreSQL depuis Node.js :
```bash
npm install pg
```

### Connexion à PostgreSQL :
Utiliser le module pg pour se connecter à une base de données :
```javascript
const { Client } = require('pg');
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

client.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.stack);
  } else {
    console.log('Connecté à la base de données');
  }
});
```

### Requêtes SQL dans Node :
Utiliser le client pour envoyer des requêtes SQL à la base de données :
```javascript
client.query('SELECT * FROM livres', (err, res) => {
  if (err) {
    console.error('Erreur lors de la requête :', err.stack);
  } else {
    console.log(res.rows);
  }
});
```

### Utilisation de Promises :
Pour un code plus moderne et éviter le "callback hell", le module pg supporte les Promises :
```javascript
client.query('SELECT * FROM livres')
  .then(res => console.log(res.rows))
  .catch(err => console.error(err.stack));
```

Pour une meilleure gestion des erreurs, on peut utiliser `.then()` et `.catch()`.
