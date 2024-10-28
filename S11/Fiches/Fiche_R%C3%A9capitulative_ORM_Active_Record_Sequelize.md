
# Fiche Récapitulative - ORM, Active Record, Sequelize

## Table des Matières
1. [ORM (Object-Relational Mapping)](#orm-object-relational-mapping)
2. [Active Record](#active-record)
   - [Active Record++](#active-record--)
3. [Sequelize](#sequelize)
4. [Associations](#associations)
   - [Types d'Associations](#types-dassociations)
   - [Implémentation dans Sequelize](#implémentation-dans-sequelize)

---

## ORM (Object-Relational Mapping)

### Définition
L'**Object-Relational Mapping (ORM)** est une technique de programmation qui permet de convertir des données entre des systèmes incompatibles en utilisant la programmation orientée objet. Il facilite l'interaction entre une application orientée objet et une base de données relationnelle.

### Objectifs Principaux
- **Abstraction** : Masquer les détails complexes de la base de données.
- **Productivité** : Réduire le code nécessaire pour les opérations de base de données.
- **Maintenance** : Simplifier la gestion des modifications de la base de données.

### Avantages
- **Simplification des requêtes** : Utilisation de méthodes et d'objets plutôt que de SQL brut.
- **Portabilité** : Facilite le changement de base de données sous-jacente.
- **Sécurité** : Réduit les risques d'injections SQL en paramétrant les requêtes.

---

## Active Record

### Définition
**Active Record** est un patron de conception (design pattern) utilisé dans le développement logiciel, principalement dans le contexte des ORM. Il combine les données et les comportements (logique métier) dans une seule classe.

### Caractéristiques
- **Encapsulation** : Chaque instance de classe correspond à une ligne dans la base de données.
- **CRUD Intégré** : Fournit des méthodes intégrées pour les opérations de Création, Lecture, Mise à jour et Suppression (Create, Read, Update, Delete).
- **Logique Métier** : Intègre la logique métier directement dans les modèles.

### Exemple en JavaScript avec Sequelize
```javascript
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: DataTypes.STRING
});

// Création d'un nouvel utilisateur
const user = await User.create({ username: 'john_doe', email: 'john@example.com' });
```

### Avantages
- **Simplicité** : Facile à comprendre et à utiliser pour des applications simples.
- **Rapidité de Développement** : Permet une mise en œuvre rapide des fonctionnalités CRUD.

### Inconvénients
- **Scalabilité** : Peut devenir difficile à maintenir pour des applications complexes.
- **Séparation des Préoccupations** : Mélange la logique métier avec la logique de persistance, ce qui peut enfreindre le principe de séparation des préoccupations.

### Active Record ++
Le terme **Active Record++** n'est pas un standard largement reconnu dans la littérature technique. Cependant, il peut se référer à des extensions ou des améliorations du pattern Active Record, ajoutant des fonctionnalités supplémentaires telles que :

- **Validation Avancée** : Intégration de validations complexes des données.
- **Callbacks** : Gestion des événements avant ou après certaines opérations (ex: avant de sauvegarder un enregistrement).
- **Scopes** : Définition de requêtes réutilisables.

Dans le contexte de Sequelize, ces fonctionnalités sont déjà intégrées, ce qui pourrait être considéré comme une version "améliorée" d'Active Record.

---

## Sequelize

### Définition
**Sequelize** est un ORM (Object-Relational Mapping) pour Node.js, supportant plusieurs bases de données SQL telles que PostgreSQL, MySQL, SQLite et MSSQL. Il facilite la gestion des interactions entre une application Node.js et une base de données relationnelle.

### Fonctionnalités Principales
- **Modélisation des Données** : Définition des modèles avec des attributs et des types de données.
- **Migration** : Gestion des versions de la base de données via des scripts de migration.
- **Associations** : Définition des relations entre les modèles (ex: one-to-many, many-to-many).
- **Validation** : Intégration de validations des données avant leur sauvegarde.
- **Transactions** : Support des transactions pour des opérations atomiques.

### Installation
```bash
npm install sequelize
npm install pg pg-hstore # Pour PostgreSQL
```

### Exemple de Définition de Modèle
```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Synchronisation avec la base de données
sequelize.sync();
```

### Avantages
- **Flexibilité** : Supporte plusieurs bases de données SQL.
- **Communauté** : Large communauté et nombreuses ressources disponibles.
- **Richesse Fonctionnelle** : Offre de nombreuses fonctionnalités avancées comme les migrations et les transactions.

---

## Associations

### Définition
Les **associations** définissent les relations entre différents modèles dans un ORM. Elles permettent de représenter les liens logiques entre les entités de la base de données, telles que les relations un-à-plusieurs, plusieurs-à-plusieurs, etc.

### Types d'Associations

1. **One-to-One (Un-à-Un)** : Un utilisateur a un profil.
2. **One-to-Many (Un-à-Plusieurs)** : Un auteur a plusieurs livres.
3. **Many-to-Many (Plusieurs-à-Plusieurs)** : Les étudiants et les cours, où un étudiant peut suivre plusieurs cours et un cours peut avoir plusieurs étudiants.
4. **Self-Referential Associations** : Un employé peut avoir un manager qui est également un employé.

### Implémentation dans Sequelize

#### One-to-One
```javascript
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });
```

#### One-to-Many
```javascript
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });
```

#### Many-to-Many
```javascript
const Student = sequelize.define('Student', {/* attributs */});
const Course = sequelize.define('Course', {/* attributs */});

Student.belongsToMany(Course, { through: 'StudentCourses' });
Course.belongsToMany(Student, { through: 'StudentCourses' });
```

#### Self-Referential Association
```javascript
Employee.hasMany(Employee, { as: 'Subordinates', foreignKey: 'managerId' });
Employee.belongsTo(Employee, { as: 'Manager', foreignKey: 'managerId' });
```

---

## Conclusion

Cette fiche récapitulative couvre les concepts fondamentaux de l'ORM, le pattern Active Record et ses extensions, l'utilisation de Sequelize comme ORM pour Node.js, ainsi que la gestion des associations entre les modèles. Ces notions sont essentielles pour développer des applications robustes et maintenables en utilisant une architecture orientée objet et des bases de données relationnelles.

---

# Ressources Complémentaires

- **Documentation Sequelize** : [https://sequelize.org/master/](https://sequelize.org/master/)
- **Pattern Active Record** : [Martin Fowler - Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/activeRecord.html)
