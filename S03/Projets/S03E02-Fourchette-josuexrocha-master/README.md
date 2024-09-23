# Le juste prix

Tu connais le juste prix ? C'est un divertissement fantastique !

_Lance son micro_ :microphone: :boom: :man_facepalming:

On va créer un programme pour demander à l'utilisateur d'identifier un nombre aléatoire, tant qu'il n'a pas trouvé on lui redemandera. Pour l'aider on lui dira si c'est plus ou si c'est moins.

## On doit déjà générer le nombre

- Pour cela tu peux utiliser `Math.random()`  
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random  
- On pourrait s'en servir pour générer un nombre décimal entre 0 et 1
- Et si on le multipliait ensuite pour obtenir un nombre plus grand, disons par 500 ?
- Et enfin on pourrait faire en sorte de l'arrondir pour garder un nombre entier, pour cela il y a `Math.round()`  
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round

Tu as dû voir l'utilisation de `prompt('Ça va ?')` pour récuperer une saisie de l'utilisateur.  
Et bien `Math.random()` et `Math.round()` s'utilisent de manière similaire pour récupérer respectivement un nombre aléatoire et un nombre arrondi à l'entier le plus proche.

_Astuce : tu veux un bon conseil ? Vérifie à chaque étape ce que tu fais avec un `console.log`, ça te permettra de voir tout de suite s'il y a un souci et d'adapter ton programme en conséquence ;)_  
https://developer.mozilla.org/fr/docs/Web/API/Console/log
```js
// exemple d'utilisation de console.log
var randomNumber = Math.random();
console.log(randomNumber);
// je peux consulter ce message dans la console de mon navigateur (F12)
```

## On doit maintenant le faire trouver à l'utilisateur

- On demande à l'utilisateur de saisir un nombre
- On pense à transformer sa saisie en nombre
- Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
- Si la saisie est trop petite on pourrait l'indiquer
- Sinon on pourrait dire que c'est trop grand

:point_up: _L'astuce donnée au dessus sera toujours valable, on vérifie bien chaque étape avant de voir la suivante_

## C'est gagné

Dès que l'utilisateur trouve, on affiche un message de victoire :tada:

---

<details>
<summary>
  Bonus <strong>facultatif</strong>
</summary>

## On compte les essais

On pourrait imaginer d'initialiser un compteur au début du programme.  
Ensuite à chaque essai on l'incrémente.  
Dans le message de victoire, on pourrait afficher le nombre d'essais.
</details>
