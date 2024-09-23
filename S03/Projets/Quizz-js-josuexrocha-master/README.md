# Challenge !

Le but de ce challenge est de créer une petite application de quizz.

Ce repo contient un fichier `exos.js` (dans le dossier js), ainsi qu'un fichier `index.html` qui appelle exos.js grâce à une balise `<script>`.

Ecris ton code dans le fichier `exos.js`, et ouvre index.html dans un navigateur pour vérifier que tout est OK !

## Exo 1 - Préparer le terrain.

Crée une variable, nommée `question1`.

Cette variable doit contenir la chaine de caractères suivante : `Quelle mer borde la ville de Sébastopol ?`.

Crée ensuite une variable `solution1`. Cette variable doit contenir la solution à la "question 1"... :wink:

<details>
<summary>Soluce</summary>

C'est `la mer Noire`.
</details>

## Exo 2 - Tentez votre chance messieurs dames!

Il est temps de poser la `question1` à l'utilisateur.

Utilise une fonction vue en cours pour afficher le contenu de la variable `question1` à l'utilisateur dans une boite de dialogue dans laquelle il peut répondre. Il faut récupérer la réponse et la mettre dans une variable `response1`.
<details>
<summary>Indice</summary>

https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
</details>

Après que l'utilisateur ait répondu, il faut mettre en place un test. Si la réponse est égale à la solution, affiche une alerte avec le message `Gagné !`, sinon affiche `Perdu...`.

<details>
<summary>Indices</summary>

- https://developer.mozilla.org/fr/docs/Web/API/Window/alert

- https://kourou.oclock.io/ressources/fiche-recap/conditions/
</details>

## Exo 3 - La question à 10 000 Pesetas

Recommence le procédé des 2 premiers exercices pour poser une autre question :
- Nouvelle variable `question2`, dont le contenu est `Quel est l'âge du capitaine ?`.
- Nouvelle variable `solution2`, dont le contenu est `63`.
- Demander la réponse de l'utilisateur...
- Tester...

<details>
<summary>Mais quoi? pourquoi ça marche pas?</summary>

- `prompt` renvoie toujours une chaine de caractères.

- `63` quant à lui, est un Number...

  <details>
  <summary>Oui... et?</summary>

  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt
  </details>

</details>

## Bonus

Trouve un moyen pour compter le nombre de bonnes réponses de l'utilisateur. Une fois toutes les questions posées, affiche un message du type "Vous avez X bonnes réponses".
