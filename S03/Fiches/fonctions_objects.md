
# Fiche Récapitulative JavaScript

## 1. Fonctions avec `return`

### Définition
Une fonction peut retourner une valeur à l'aide du mot-clé `return`. Lorsque la fonction exécute `return`, elle renvoie la valeur spécifiée et termine immédiatement son exécution.

### Exemple
```javascript
function addition(a, b) {
  return a + b;
}

let resultat = addition(5, 7); // resultat vaut 12
```

### Important
- L'instruction `return` termine l'exécution de la fonction. Toute instruction après `return` dans le bloc de la fonction est ignorée.
- Une fonction qui ne contient pas de `return` explicite retourne par défaut `undefined`.

## 2. Paramètres avec valeur par défaut

### Définition
En JavaScript, il est possible de définir des valeurs par défaut pour les paramètres d'une fonction. Si aucun argument n'est passé lors de l'appel de la fonction, la valeur par défaut est utilisée.

### Exemple
```javascript
function saluer(nom = "invité") {
  return `Bonjour, ${nom}!`;
}

console.log(saluer()); // Affiche "Bonjour, invité!"
console.log(saluer("Alice")); // Affiche "Bonjour, Alice!"
```

### Avantages
- Les paramètres par défaut permettent de rendre les fonctions plus flexibles et de gérer les cas où certains arguments peuvent être omis.

## 3. Objets en JavaScript

### Définition
Un objet est une collection de paires clé-valeur. Chaque clé est unique au sein de l'objet, et les valeurs peuvent être de tout type (nombre, chaîne, tableau, autre objet, etc.).

### Création d'un objet
Un objet est créé en utilisant des accolades `{}` :
```javascript
const fruit = {
  nom: "pomme",
  couleur: "rouge"
};
```

### Accès aux propriétés
On peut accéder aux propriétés d'un objet en utilisant la notation par point ou la notation par crochets :
```javascript
console.log(fruit.nom); // Accède à "pomme"
console.log(fruit["couleur"]); // Accède à "rouge"
```

### Modification des propriétés
Les propriétés d'un objet peuvent être modifiées ou ajoutées après la création de l'objet :
```javascript
fruit.couleur = "verte"; // Modifie la couleur en "verte"
fruit.taille = "moyenne"; // Ajoute une nouvelle propriété "taille"
```

### Utilisation des Objets
Les objets sont essentiels pour structurer les données dans un programme et permettent de grouper des informations connexes sous une même entité.
