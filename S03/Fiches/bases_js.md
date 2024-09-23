
# Fiche Récapitulative : Programmer en JavaScript

## Notions du Jour

- **Programmer, c'est décomposer**
- **Qu'est-ce que JavaScript ?**
- **Les variables (les cartons)**
- **Les valeurs et leurs types (string, boolean, number)**
- **Les opérations (arithmétiques, logiques, comparaisons, concaténation)**
- **Les conditions (if/else if/else)**

---

## Programmer, c'est décomposer

La programmation consiste à décomposer un problème complexe en une série d'instructions simples que la machine peut comprendre et exécuter. En divisant les tâches en étapes plus petites, on facilite la résolution de problèmes et la maintenance du code.

## Qu'est-ce que JavaScript ?

JavaScript est un langage de programmation interprété, principalement utilisé pour rendre les pages web interactives. Il permet de gérer les interactions utilisateur, de manipuler le Document Object Model (DOM) et d'apporter du dynamisme aux sites web. JavaScript s'exécute côté client dans le navigateur, mais peut également être utilisé côté serveur avec des environnements comme Node.js.

- **HTML** : Structure du contenu.
- **CSS** : Présentation et mise en forme du contenu.
- **JavaScript** : Interactivité et dynamisme du contenu.

## Les Variables (les cartons)

### Déclaration des Variables

Une variable est un espace de stockage nommé permettant de conserver une valeur qui peut être modifiée ou utilisée ultérieurement. En JavaScript, on déclare des variables à l'aide des mots-clés `let`, `const` ou `var`.

- **`let`** : Pour des variables dont la valeur peut changer.
- **`const`** : Pour des variables dont la valeur ne doit pas changer.
- **`var`** : Ancienne manière de déclarer des variables (à éviter au profit de `let` et `const`).

**Exemple :**

```javascript
let age = 25;
const nom = 'Alice';
```

### Conventions de Nommage

- Utiliser le **camelCase** : Commencer par une minuscule et mettre une majuscule à chaque nouveau mot.
- Choisir des noms significatifs : Préférer `ageUtilisateur` à `x`.

**Exemples de noms valides :**

- `maVariable`
- `compteurDeClics`
- `estConnecte`

## Les Valeurs et Leurs Types

### String (Chaînes de Caractères)

Une chaîne de caractères est une séquence de caractères utilisée pour représenter du texte.

**Exemple :**

```javascript
const message = 'Bonjour le monde!';
```

### Number (Nombres)

Le type `number` représente à la fois les entiers et les nombres à virgule flottante.

**Exemples :**

```javascript
const entier = 42;
const decimal = 3.14;
```

### Boolean (Booléens)

Un booléen est une valeur logique pouvant être `true` (vrai) ou `false` (faux).

**Exemple :**

```javascript
const estMajeur = true;
```

## Les Opérations

### Opérations Arithmétiques

- **Addition (`+`)**
- **Soustraction (`-`)**
- **Multiplication (`*`)**
- **Division (`/`)**
- **Modulo (`%`)** : Reste de la division entière.

**Exemple :**

```javascript
const somme = 10 + 5; // 15
```

### Opérateurs Logiques

- **ET (`&&`)** : Vrai si les deux opérandes sont vrais.
- **OU (`||`)** : Vrai si au moins un des opérandes est vrai.
- **NON (`!`)** : Inverse la valeur booléenne.

**Exemple :**

```javascript
const estAdulte = age >= 18 && estMajeur;
```

### Opérateurs de Comparaison

- **Égal à (`==`)**
- **Strictement égal à (`===`)** : Compare valeur et type.
- **Différent de (`!=`)**
- **Strictement différent de (`!==`)**
- **Supérieur à (`>`)**
- **Inférieur à (`<`)**
- **Supérieur ou égal à (`>=`)**
- **Inférieur ou égal à (`<=`)**

**Exemple :**

```javascript
if (score === 100) {
  console.log('Score parfait!');
}
```

### Concaténation

L'opérateur `+` permet également de concaténer des chaînes de caractères.

**Exemple :**

```javascript
const prenom = 'Alice';
const salutation = 'Bonjour, ' + prenom + '!';
```

## Les Conditions (if/else if/else)

Les conditions permettent d'exécuter du code de manière conditionnelle en fonction de l'évaluation d'une expression.

### Structure de base

```javascript
if (condition) {
  // Code à exécuter si la condition est vraie
}
```

### if...else

```javascript
if (condition) {
  // Code si la condition est vraie
} else {
  // Code si la condition est fausse
}
```

### if...else if...else

```javascript
if (condition1) {
  // Code si condition1 est vraie
} else if (condition2) {
  // Code si condition1 est fausse et condition2 est vraie
} else {
  // Code si aucune des conditions n'est vraie
}
```

**Exemple :**

```javascript
const note = 85;

if (note >= 90) {
  console.log('Excellent');
} else if (note >= 75) {
  console.log('Très bien');
} else if (note >= 60) {
  console.log('Bien');
} else {
  console.log('Peut mieux faire');
}
```

---

## Récapitulatif

- **Programmer** consiste à décomposer un problème en instructions simples.
- **JavaScript** est le langage de programmation utilisé pour dynamiser les pages web.
- **Variables** : Espaces nommés pour stocker des valeurs (déclarées avec `let` ou `const`).
- **Types de valeurs** : `string`, `number`, `boolean`.
- **Opérations** : Arithmétiques, logiques, comparaisons, concaténation.
- **Conditions** : Structures permettant d'exécuter du code en fonction de l'évaluation de conditions (`if`, `else if`, `else`).

---

## Ressources Supplémentaires

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Guide JavaScript de Mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [Apprenez à coder avec JavaScript](https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript)
