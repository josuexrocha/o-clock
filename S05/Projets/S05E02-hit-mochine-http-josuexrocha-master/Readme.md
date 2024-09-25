# Hit MO'chine HTTP

On vient (encore) d'avoir Charlu et Lili au téléphone. En fait, ils ont dit que le Minitel ça va 5 minutes mais ils aimeraient un vrai site web. Bon, acte.

## Objectif

On va se limiter dans un premier temps à un site web très très basique niveau mise en forme, composé de 3 pages contenant uniquement du texte.

## Énoncé débrouillard

En s'aidant de ce qui a été fait en cours, réaliser un petit site avec 3 pages

- `/` : la page d'accueil qui affiche une ligne de texte `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`.
- `/classement` : une page qui affiche le classement (aucun problème s'il n'est pas mis en forme) en utilisant le tableau fourni.
- `/stats` : une page qui affiche combien de fois la page d'accueil a été visitée : cette page affiche : `La chanson de Charli Lulu a été vue X fois !`

N'oubliez pas de commit et de push régulièrement !

## Bonus exploratoire (facultatif)

C'est bien beau le texte, mais ça serait vachement mieux avec du HTML non ?
À la place de texte, renvoyez du HTML. Pour le style, limitez vous à une balise `<style>` dans le `<head>` pour l'instant. On verra plus tard comment fournir aussi des fichiers CSS.

## Énoncé guidé

<details><summary>
Voir énoncé guidé
</summary>

Durant le processus, il faudra bien penser à redémarrer le serveur à chaque modification du code pour constater les changements.

Pour éviter cette fastidieuse manipulation, utiliser `node-dev index.js` ou `nodemon index.js` en lieu et place de `node index.js`.

`node-dev` surveille la modification du fichier index.js va automatiquement redémarrer votre programme à chaque changement.

Si `node-dev` n'a pas été installé pendant le cours : `sudo npm install -g node-dev` ou son alternative nodemon `sudo npm install -g nodemon`.

### 1 - Création du serveur

On va commencer par créer un programme node.js capable de répondre à une requête HTTP. Peu importe l'URL, notre serveur répondra toujours `coucou`.

Pour cela, 3 étapes :

- importer le module `http`. En principe cette opération se fait tout en haut du fichier.
- Créer le serveur (s'aider de la [documentation](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener) ou du code fait en cours). Dans la fonction de callback, faire en sorte que le serveur _réponde_ `coucou`.
- Ne pas oublier de demander au serveur _d'écouter_ les requêtes sur le port 3000.

On teste, on commit et on push.

### 2 - Gérer les URL

Notre site sera composé de 3 pages. Il va donc falloir renvoyer du contenu différent en fonction de la requête faite par l'internaute (et donc de l'URL saisie dans le navigateur).


Dans la fonction de callback du serveur, rajouter une structure conditionnelle (`if/else`, `switch`, à vous de voir) comme suit :

```pseudocode
On se base sur l'URL
    dans le cas où elle vaut '/'
        -> répondre `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`
    dans le cas où elle vaut '/classement'
        -> répondre `TODO: Afficher le classement`
    dans tous les autres cas
        -> répondre `404, page non trouvée`
```

On teste, on commit et on push.

### 3 - Afficher le classement

Dans le cas de l'URL `/classement`, au lieu de renvoyer `TODO: Afficher le classement`, on va renvoyer le classement.
Nous avons à notre disposition un tableau contenant toutes les infos du classement. Chaque élément du tableau est un objet contenant toutes les infos de la chanson. Hors la seule chose que nous pouvons répondre à une requête HTTP est une _chaine de caractère_. Nous allons donc créer une chaine de caractères à partir de notre tableau.

Pour ceci, on va le faire en 3 étapes :

- Créer une variable `classement` _modifiable_.
- À l'aide d'une boucle, construire la chaine de caractère classement en concatenant toutes les entrées du tableaux.
- Répondre à la requete avec le contenu de la variable classement.

<details>
<summary>Un petit coup de pouce</summary>

Voici un petit exemple pour construire une chaine de caractère à partir d'un tableau.

```js
const fruits = [
    {
        name: 'pomme',
        color: 'vert'
    },
    {
        name: 'banane',
        color: 'jaune'
    },
    {
        name: 'noix',
        color: 'marron'
    },
];

// On créé une chaine de caractère vide
let listeFruits = ``;

for (let fruit of fruits) {
    // On concatène chaque entrée du tableau à notre chaine.
    listeFruits +=  `- ${fruit.name}, couleur : ${fruit.color} \n`;
    // Cela est equivalent à
    // listeFruits = listeFruits + `- ${fruit.name}, couleur : ${fruit.color} \n`;
}

// Si on log le contenu de la variable, on constate que c'est une chaine de caractère composée de tous les fruits avec leur couleur, précédés de '- ' :
// - pomme, couleur : vert
// - banane, couleur : jaune
// - noix, couleur : marron
console.log(listeFruits);
```

</details>

On teste, on commit et on push.


### 4 - Des stats

Charlu et Lili veulent des stats. Ok, il va donc falloir les récolter.

1. Juste en dessous de la déclaration de la variable `hitParade`, nous allons une variable `songCount` initilisée à 0.
2. Dans la fonction de callback du serveur, à chaque fois que l'on répond avec la chanson  `Je m'appelle Charlu...`, incrémenter la variable.
3. Rajouter un bloc `case` dans notre switch pour gérer l'URL `stats` ou bien un `else if`. Dans ce cas on renvoie `La chanson a été vue ${songCount} fois`.

Attention, on stocke le compteur dans une variable. Donc, à chaque fois que vous modifiez le programme, il redémarre, et la variable se réinitialise à 0, c'est normal.
    
On teste, on commit et on push.
    
</details>

