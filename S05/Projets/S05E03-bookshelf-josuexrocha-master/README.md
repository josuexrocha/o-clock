# Jouons avec les dates !

Aujourd'hui nous avons vu comment nous pouvions créer un module, afin de compartimenter notre code. Nous avons également découvert qu'il existait une infinité de modules déjà existants, récupérables, et installable via npm. Ici nous allons utiliser l'un des modules les plus populaires : dayjs !
Il va vous permettre de jouer avec les dates en faisant des calculs et/ou des formatages.

## Énoncé débrouillard

1. Afficher un tableau HTML contenant la liste des livres de notre collection.
2. Rechercher et installer le module npm [dayjs](https://day.js.org/).
3. Formater la date de parution de cette façon : Thursday, July 29th 1954.
4. Ajouter une colonne spécifiant l'âge du livre.

## Énoncé guidé

<details><summary>À tout moment, n'hésitez à regarder la version guidée du point sur lequel vous bloquez</summary>

1. Nous avons un tableau d'objets javascript contenant différentes clé/valeur. Je crois que nous avons vu comment boucler sur un tableau non ? Ensuite il suffit de créer une ligne pour notre `<table>` HTML pour chaque element du tableau JS !
2. Nous avons vu cela en cours aujourd'hui, attention avec le fichier package.json !
3. Heureusement la [documentation](https://day.js.org/) est là, il y a surement une fonction qui permet de formatter les dates.
4. Ici pareil, je suis sûr que dayjs va pouvoir nous aider. En même temps c'est un peu le but de ce challenge ;)

</details>

## Bonus

La [documentation](https://day.js.org/docs/en/installation/installation) reste votre meilleur alliée !

1. Configurer dayjs avec les locales françaises.
2. Créer deux modules, contenant les données et la construction du tableau. Les utiliser dans l'application.
3. Bonus qui pique : ordonner la liste des livres par date de parution<details><summary>Indice</summary>Regardez du côté de array.sort</details>
