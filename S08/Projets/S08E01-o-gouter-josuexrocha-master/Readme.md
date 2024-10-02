# O'goûter

## Objectif

Ce projet est un petit exemple de l'utilisation de la session.

On veut proposer à un internaute qui visite notre site de choisir entre 2 thèmes : light ou dark.

On va donc lui proposer de choisir, mais on veut garder ce choix tout au long de la navigation de l'internaute sur le site. Il va donc falloir retenir ce choix. Pour ceci, une solution est : la session !

## Fonctionnement

Le site est composé de 2 routes :
- La page d'accueil, qui sera affichée selon le thème choisi par l'internaute, ou en mode light le cas échéant.
- une route /switch/:theme qui va permettre d'enregistrer en session le thème choisi par l'internaute.

Une CSS est prête avec 2 thèmes : `light` et `dark`. Pour les utiliser, il faut attribuer la classe `light` ou `dark` à la balise `<body>` de la page.

## Déroulé

### Étape 1

Installer le package `express-session` : https://www.npmjs.com/package/express-session

Ensuite, dans le fichier index.js :
- require le module (TODO #1) 
- demander à Express d'utliser les sessions (TODO #2) `app.use(session(...`.

### Étape 2

Enregistrer la préférence de l'internaute. Pour cela, 3 étape.

Dans le fichier `app/controllers/main.js`, coder la fonction `switchTheme` pour qu'elle : 
- Récupère le thème choisi par l'internaute (le paramètre d'URL) (TODO #2)
- Enregistre dans la session de l'utilisateur le thème choisi (TODO #2 bis)
- Et enfin, qu'elle redirige l'internaute sur la page d'accueil (TODO #2 ter).

### Étape 3
Pour afficher la page d'accueil avec le thème choisi, il va falloir récupérer dans la session le thème enregistré par l'internaute et le transmettre à la vue.

Dans le fichier `app/controllers/main.js`, modifier la fonction `home` pour qu'elle : 
- Récupère le thème choisi par l'internaute dans le session pour le stocker dans une variable `theme` (ou, le cas échéant, initialiser la variable avec la chaine de caractère `light`) (TODO #3).
- Transmette le contenu de cette variable à la vue (TODO #3 bis)

### Étape 4
Dans la vue, écrire le contenu de la variable `theme` dans la valeur de l'attribut `class` du body. (TODO #4)



