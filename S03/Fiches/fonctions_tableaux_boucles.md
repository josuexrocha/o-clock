
# Fiche Récapitulative JavaScript

## 1. Les Fonctions en JavaScript

### Définition
Une fonction est un bloc de code conçu pour effectuer une tâche particulière. Les fonctions permettent de réutiliser du code sans le réécrire plusieurs fois. Une fonction doit d'abord être définie avant d'être appelée.

### Déclaration d'une fonction
Une fonction est définie en utilisant le mot-clé `function`, suivi du nom de la fonction et d'un bloc de code entre accolades `{}` :
```javascript
function nomDeLaFonction() {
  // instructions
}
```

### Fonctions avec paramètres
Les fonctions peuvent prendre des paramètres pour fonctionner avec des données spécifiques :
```javascript
function saluer(nom) {
  console.log('Bonjour ' + nom + '!');
}

saluer('Alice'); // Affiche "Bonjour Alice!"
```

### Valeur de retour
Les fonctions peuvent retourner une valeur avec le mot-clé `return` :
```javascript
function addition(a, b) {
  return a + b;
}

let resultat = addition(5, 7); // resultat vaut 12
```
Note : `return` arrête l'exécution de la fonction. Si aucune valeur n'est retournée, la fonction renvoie `undefined` par défaut.

### Fonctions anonymes et stockées dans des variables
Une fonction peut être anonyme et assignée à une variable :
```javascript
const saluer = function() {
  console.log('Bonjour!');
};

saluer(); // Affiche "Bonjour!"
```

## 2. Les Tableaux en JavaScript

### Définition
Un tableau (ou array) est une collection ordonnée de valeurs, qui peuvent être de n'importe quel type. Les éléments sont indexés à partir de 0.

### Déclaration d'un tableau
Un tableau est déclaré en utilisant des crochets `[]` :
```javascript
const fruits = ["pomme", "banane", "poire"];
```

### Accéder aux éléments
On accède aux éléments d'un tableau en utilisant leur index :
```javascript
let premierFruit = fruits[0]; // Accède à "pomme"
let dernierFruit = fruits[2]; // Accède à "poire"
```

### Propriétés et méthodes courantes
- `length` : Renvoie le nombre d'éléments dans un tableau.
```javascript
console.log(fruits.length); // Affiche 3
```
- `indexOf()` : Renvoie l'index de la première occurrence d'un élément donné, ou -1 s'il n'est pas trouvé.
```javascript
let position = fruits.indexOf("banane"); // position vaut 1
```

Les tableaux peuvent également contenir des éléments de types différents, y compris d'autres tableaux.

## 3. Les Boucles en JavaScript

### Boucle `for`
La boucle `for` est utilisée pour exécuter un bloc de code un nombre déterminé de fois :
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Affiche 0, 1, 2, 3, 4
}
```
Elle est couramment utilisée pour parcourir les éléments d'un tableau.

### Boucle `while`
La boucle `while` exécute un bloc de code tant qu'une condition est vraie :
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Boucle `do...while`
Similaire à `while`, mais la condition est vérifiée après l'exécution du bloc de code, garantissant au moins une exécution :
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Boucle `for...in` et `for...of`
- `for...in` : Itère sur les propriétés d'un objet ou les index d'un tableau.
- `for...of` : Introduite en ES6, itère sur les éléments d'un tableau (ne fonctionne pas avec les objets) :
```javascript
let fruits = ["pomme", "banane", "poire"];
for (let fruit of fruits) {
  console.log(fruit);
}
```
Ces boucles sont utiles pour parcourir les éléments d'un tableau ou les propriétés d'un objet.
