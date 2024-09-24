# Parcours Javascript

Il est de retour ! Le grand Hercule part à la conquête des réseaux sociaux.

Tu trouveras dans ce projet une intégration HTML/CSS aux petits oignons.

Par contre côté javascript, il manque certaines opérations, ça manque d'intéractions. C'est là que tu entres en jeu.

Commence par prendre connaissance du projet. Tu trouveras :

- un fichier `index.html` quasiment opérationnel,
- des fichiers `css`, tu peux regarder mais en principe tout est ok il n'y a pas besoin de les modifier,
- un fichier `base.js` qui contient déjà des choses prêtes à l'emploi, tu vas l'utiliser donc tu devras sans doute y jeter un oeil pour te l'approprier, mais **tu n'as pas à le modifier**,
- un fichier `exo.js` vide, c'est principalement **dans ce fichier que tu vas travailler**.

## Étape 1 - Exécuter quelque chose

Ça commence mal, j'ai voulu commencer avec un `console.log` dans `exo.js` mais j'ai une erreur en console, tu sais voir ce qui ne va pas et rectifier le tir ?

## Étape 2 - Objet

_A partir de là tout ce que tu écris se passe dans `exo.js`._

Dans notre programme on a besoin de représenter l'entité _Hercule_.

Il est caractérisé par les informations suivantes (je t'ai mis les noms à donner à tes propriétés) :

- son nom `name` est Hercule,
- son travail `job` est Demi-dieu,
- son âge `age` est de 35 ans,
- son numéro de département `department` est le 75,
- son tour de bras `arm` est de 60,5 centimètres,
- le fait de vivre en couple `inRelationship` est _Oui_ il est en couple.

Définis un objet pour représenter tout ça, à l'intérieur choisis les types de valeur judicieusement.

_Place au test :_

J'ai prévu une méthode `fillProfil` dans l'objet `base` (il est dans `base.js`), elle sert à remplir les informations du profil dans la page et attend un objet en argument,  ça tombe bien ! Exécute `base.fillProfil()` en lui passant en argument l'objet que tu viens de créer. Si tout se passe bien tu devrais voir le profil complété.

### Étape 3 - Tableau

Cette fois-ci on veut représenter les amis d'Hercule.
Pour cela on va créer un tableau qui contiendra les noms des 4 amis d'Hercule : _Jupiter, Junon, Alcmène et Déjanire_.

_Place aux tests :_

J'ai prévu une autre méthode dans `base` qui s'appelle `printFriends`, elle attend un tableau en argument. Exécute là et passe lui ton tableau pour faire apparaître la liste des amis.

Et un deuxième test :

J'ai prévu une autre méthode `base` pour afficher cette fois-ci **le meilleur ami**. Allez je te dis rien, regarde dans `base` pour la trouver, j'ai tout documenté. Tu auras besoin de l'exécuter, tu dois lui passer la première valeur de ton tableau, c'est lui le meilleur ami d'Hercule :) Si tout va bien tu vois son nom apparaître à côté du coeur.

### Étape 4 - DOM

Il manque un titre dans ma page, je te demande de le créer uniquement en JS !

- Crée une balise `h1`,
- donne lui la classe `banner__title`,
- écris dedans `Vous consultez le profil de Hercule`,
- insère la dans l'élement possédant l'id `header-banner`, tu devrais voir ton titre apparaître en haut à droite.

### Étape 5 - Boucle

- On doit afficher tous ses travaux !
- La méthode `displayWork` de l'objet `base` permet d'afficher 1 seul des travaux à la fois. Elle prend un paramètre je te laisse regarder...
- L'idée c'est de compter de 0 à 11 et d'appeler à chaque fois la méthode `displayWork`.

### Étape 6 - Condition

On va afficher la disponibilité d'Hercule suivant l'heure qu'il est !

- Entre 8 et 20 heures Hercule est _Disponible_, sinon il est _Non disponible_.
- Pour connaître l'heure tu peux utiliser la méthode `getHour` de l'objet `base` si tu veux.
- Tu vas afficher l'information de disponibilité dans l'élement qui a l'id `availability`.
- Tu peux également ajouter une classe `off` sur cet élement lorsque Hercule est _Non disponible_ ça passera la pastille en rouge.

### Étape 7 - Fonction

Les fonctions c'est ma passion ! Je voudrais que tu crées une fonction pour générer un pseudo.

Elle doit pouvoir recevoir 2 informations en paramètres :

- un prénom,
- un numéro de département.

Elle doit utiliser ces informations pour générer un pseudo type `Prénom-du-NuméroDeDépartement`. Par exemple en exécutant la fonction avec le prénom `Toto` et le département `10`, on doit obtenir `Toto-du-10`.

Il faut que ta fonction retourne cette valeur.

_Place à l'exécution :_

- Exécute ta fonction en lui passant le prénom Hercule et son numéro de département (on l'a défini à l'étape 2).
- Utilise la valeur récupérée pour écrire le pseudo dans l'élement possédant l'id `profil-name`.

### Étape 8 - Event

On va faire fonctionner le menu en haut à gauche !
Pour cela, écoute l'événement `click` sur l'élement possédant l'id `menu-toggler`.

J'ai déjà prévu une classe `banner--open` qui ajoute les styles nécessaires pour voir le menu, tu dois l'ajouter ou la retirer sur l'élement ayant l'id `header-banner` :

- Quand l'élement `header-banner` a déjà la classe `banner--open` (lors du click sur `menu-toggler`), on veut la lui retirer,
- Quand l'élement `header-banner` n'a pas la classe `banner--open` (toujours au moment d'un click), on veut la lui ajouter.

Si tout va bien tu vois apparaître le menu au clic, puis si tu recliques il disparaît \\o/

### Étape 9 - Event bis

Cette fois-ci on va réagir à la soumission du formulaire en haut à droite qui possède l'id `contact` :

- Je ne veux pas que la page s'actualise lorsqu'on valide le formulaire.
- A la place il faut afficher une boîte de dialogue en alerte qui dit `Hercule ne souhaite pas être dérangé`.

---

_Ça commence à faire pas mal de chose, si tu n'as pas le temps de tout traîter dans le temps imparti pas de panique ; tu pourras toujours utiliser ces exercices au delà de ce délai pour t'entraîner !_

### Bonus Étape 10 - Algo

La programmation c'est comme une recette de cuisine, il faut décrire nos étapes une par une pour faire un bon résultat !

- On veut afficher le pourcentage de votes pour Hercule et pour César sur la droite.
- Le nombre de votes de chacun est accessible via la propriété `vote` de l'objet `base`.
- La formule pour calculer un pourcentage est `valeurRelative / valeurTotale * 100`.
- Tu pourras afficher tes calculs dans les 2 élements possédant la classe `people__popularity` présents pour Hercule dans l'élément avec l'id `#trends-hercule` et pour César dans l'élément avec l'id `#trends-cesar`.
- La cerise sur le gâteau serait de donner une largeur aux 2 élements qui ont la classe `people__bar`, ce sont les 2 petites barres oranges, si on utilise le pourcentage calculé comme largeur ça devrait être chouette !
- A toi d'assembler les morceaux :thinking:.

### Bonus Étape 11 - Objet avancé

- Si tu ne l'as pas déjà fait, reprends tout ce que tu as fais jusqu'à présent dans un gros objets.
- Tu pourras ranger les valeurs que tu as définies en propriétés de l'objet.
- Tu pourras ranger tes fonctions en méthodes de l'objet.
- Vas-y par petits morceaux et contrôle au fur et à mesure pour être sûr de ne rien casser, ce serait dommage ;p.

### Super Bonus Étape 12 - Algo, la totale

- Tu trouveras des informations représentant des tâches dans la propriété `activities` de l'objet `base`.
- Ta mission est d'afficher les titres des activités dans la liste présente dans l'élement avec l'id `activities` (qui est pour le moment caché en css).
- Attention on ne veut afficher que les tâches d'Hercule, et que celles qui sont terminées.
