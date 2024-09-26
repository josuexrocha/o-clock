
# NodeJS et les Modules

## NodeJS, c’est quoi ?

### 1. Introduction à NodeJS
- **NodeJS** est un runtime JavaScript basé sur le moteur **V8** de Google, utilisé dans le navigateur Chrome. Il permet d'exécuter du code JavaScript côté serveur, ce qui était auparavant réservé à l'environnement client (navigateur).
- **Runtime** signifie que NodeJS fournit à JavaScript un environnement d'exécution en dehors du navigateur. Cet environnement inclut le moteur V8 pour interpréter le code JavaScript et des API supplémentaires pour interagir avec le système d'exploitation (fichiers, réseau, etc.).
- **Utilité** : NodeJS permet de créer des applications réseau évolutives et performantes, principalement grâce à son modèle non-bloquant et orienté événement.

### 2. Le Contexte Global dans NodeJS
- Dans un environnement NodeJS, le contexte global n'est plus `window` comme dans les navigateurs, mais un objet appelé `global`. Ce contexte est adapté aux besoins du serveur et inclut des outils spécifiques pour gérer les processus et les modules.
- Par exemple, on y retrouve `global.process`, `console`, `setTimeout`, `setInterval`, etc.

### 3. Applications de NodeJS
- **Serveurs Web** : NodeJS est particulièrement adapté pour les applications web en temps réel, telles que les chats, les notifications, etc.
- **Applications en client lourd** : Grâce à des frameworks comme Electron, il est possible de créer des applications de bureau multiplateformes avec NodeJS.
- **Objets connectés** : NodeJS peut être utilisé pour piloter des objets connectés (IoT), comme les Nodebots.

### 4. Pourquoi utiliser NodeJS ?
- **Performances** : Son modèle non-bloquant permet de gérer un grand nombre de connexions simultanément sans saturer les ressources du serveur.
- **Unification** : Permet d'utiliser JavaScript à la fois côté client et serveur, unifiant ainsi la stack de développement.

## Les modules en NodeJS

### 1. Qu’est-ce qu’un module ?
- Un **module** est un morceau de code JavaScript (fichier ou ensemble de fichiers) que vous pouvez réutiliser dans votre application NodeJS. Les modules permettent de structurer et d’organiser le code en unités fonctionnelles, facilitant la maintenance et la réutilisation.
- NodeJS offre des modules intégrés (core modules), tels que `fs` (système de fichiers), `http` (serveur HTTP), et bien d'autres.

### 2. Utilisation des modules avec `require`
- La fonction `require` est utilisée pour importer des modules dans votre application NodeJS. Par exemple :
```javascript
const fs = require('fs');
```
- Le système de modules de NodeJS suit la norme CommonJS, où chaque fichier est considéré comme un module séparé. L'utilisation de `require` permet de charger un module et d'accéder aux fonctionnalités qu'il exporte.
  
### 3. Création de modules personnalisés
- Vous pouvez créer vos propres modules en exportant des fonctions, objets, ou classes à partir d’un fichier.
```javascript
// myModule.js
function sayHello() {
    console.log('Hello!');
}
module.exports = sayHello;
```
- Pour l'utiliser dans un autre fichier :
```javascript
const sayHello = require('./myModule');
sayHello(); // Affiche 'Hello!'
```

### 4. Gestion des modules avec NPM
- **NPM** (Node Package Manager) est l'outil de gestion des paquets pour NodeJS. Il permet d'installer, partager et gérer les modules tiers (packages) dans vos projets. Pour installer un module, vous pouvez utiliser :
```bash
npm install express
```
- `NPM` gère également les dépendances de votre projet via le fichier `package.json`.

## Références Utiles :
- [NodeJS Documentation](https://nodejs.org)
- [Compatibilité des fonctionnalités Node](https://node.green/)
- [API NodeJS (par exemple, `os` et `readline`)](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Wikipedia sur ROT13 et modulo](https://fr.wikipedia.org/wiki/Modulo_(op%C3%A9ration))
- [ROT13](https://fr.wikipedia.org/wiki/ROT13)
