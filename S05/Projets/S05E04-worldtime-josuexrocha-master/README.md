# Découvrons les timezones et Express JS

Aujourd'hui nous avons découvert le module Express qui nous permet de gérer plus facilement un serveur web en NodeJS.
Mais également d'afficher des vues simples grâce à l'inclusion de fichiers HTML.
Ce soir vous allez devoir afficher une liste de capitales et créer les pages permettant de connaître la date et l'heure dans chacune d'elle.
À cette fin vous avez :

- un module JS contenant les données de ces capitales my_modules/capitalCities.js
- un template HTML affichant la liste des capitales views/index.html

## Énoncé débrouillard

1. Initialiser l'application grâce à npm.
2. Rechercher et installer les modules npm ExpressJS et DayJS.
3. Rechercher et installer un plugin de DayJS vous permettant de facilement afficher les heures des différents fuseaux horaires.
4. Créer la route pour la page d'accueil.
5. Créer une route _dynamique_ (= avec un paramètre) pour le détail des capitales.
6. Trouver un moyen de séléctionner la bonne timezone de la capitale concernée.
7. Faire l'intégration de la page capitale en précisant le nom de la capitale, le jour, et l'heure actuelle.
8. Afficher les dates en français.

## Énoncé guidé

<details><summary>À tout moment, n'hésitez pas à regarder la version guidée du point sur lequel vous bloquez</summary>

1. Nous avons vu en cours qu'il fallait initialiser notre projet avec une commande de npm.
2. Pareil une fois le npm initialisé vous pouvez utiliser les commandes npm pour sauvegarder de nouveaux modules dans votre projet.
3. Rechercher sur Google ou directement le site de DayJS les informations sur le plugin timezone. [Vous devez trouver cette page](https://day.js.org/docs/en/timezone/timezone).
4. La [documentation d'ExpressJS](https://expressjs.com/fr/4x/api.html), vous sera d'une grande aide pour vous rappeler comment faire, mais nous l'avons vu en cours aujourd'hui.
5. Encore une fois, [la doc vous dis tout](https://expressjs.com/en/guide/routing.html#route-parameters) !
6. Vous avez trouvé le module pour gérer les "timezone", lisez maintenant la documentation associée, les "timezone" de chaque capitale sont déjà présentes dans les données fournies.
7. Ici il va falloir utiliser la méthode classique pour afficher du HTML dans une page (sans inclure de fichiers), car vous avez des variables à utiliser.
8. Ça vous l'avez déjà fait dans le challenge d'hier, et on l'a corrigé en cours ce matin ! Pas d'excuses :smile:

</details>

## Bonus

La [documentation de DayJS](https://day.js.org/docs/en/installation/installation) et la [documentation d'ExpressJS](https://expressjs.com/fr/4x/api.html) reste vos meilleurs alliés !

1. Créer une page 404 en cas de capitale inconnue
2. Ajouter de nouvelles capitales dans le module de données capitalCities.js
3. Déplacer la récupération de l'heure et de la date dans un module personnalisé
