# Le retour du juste prix

Bon Vincent Lagaf a repris le :microphone: de Philippe Risoli. Et il veut qu'on apporte des modifications à notre programme de juste prix.

## Etape 1 - Créer un objet de configuration

Pour simplifier la configuration de notre programme on va regrouper la configuration dans un objet.

On pourrait ainsi avoir un objet `game`, on y renseignera sous forme de propriétés le nombre à chercher et le nombre d'essais. 
On pensera bien à adapter nos instructions suivantes pour utiliser l'objet déclaré précédemment.

## Etape 2 - Faire une fonction pour jouer

On pourrait regrouper les instructions de notre jeu dans une fonction `play`. Ca nous sera pratique pour la relancer plusieurs fois à l'étape 4. Et on oublie pas d'exécuter la fonction une première fois !

## Etape 3 - Faire une fonction pour le nombre aléatoire

Actuellement, on génère le nombre aléatoire directement. C'est bien, mais on aimerait bien avoir une fonction pour ça, pour pouvoir facilement gérer le nombre aléatoire généré au besoin !

- Déplacer le code qui génère le nombre aléatoire dans une fonction (dont le nom sera choisi avec soin :wink:), puis l'appeler là où le nombre était précédemment généré !

- Puis dans un second temps, modifier cette fonction pour qu'elle prenne 2 paramètres : `min` et `max`. Le nombre  doit à présent être généré entre `min` et `max` ! On veille ensuite à bien modifier l'appel de la fonction, en définissant la plage de recherche : par exemple de 10 à 20 !

## Etape 4 - Relancer la partie automatiquement

A la fin de la partie, on voudrait relancer une nouvelle partie automatiquement. Il faudrait donc re-appeler la fonction `play` à l'intérieur de la fonction `play`. Youhouu, ça boucle : c'est ce qu'on appelle une fonction récursive ! Bon par contre, on s'assure de bien modifier le nombre aléatoire à chaque partie hein, sinon ça sera trop facile, eheh !

## Etape 5 - Stocker le score

Maintenant qu'on relance les parties, on aimerait stocker le score de chaque partie. Si possible dans un tableau ! Comme ça, à chaque fois que l'utilisateur termine une partie, on lui affiche les scores qu'il a obtenu jusqu'alors ! 

---

<details>
<summary>
  Bonus <strong>facultatif</strong>
</summary>

## Etape 6 - Laisser le choix de rejouer

Plutôt que de forcer l'utilisateur à rejouer, on va lui laisser le choix. On peut utiliser [`confirm`](https://developer.mozilla.org/fr/docs/Web/API/Window/confirm) pour ça   

Si l'utilisateur veut rejouer on execute de nouveau `play`, sinon on affiche les scores en console.

## Etape 7 - Améliorer l'affichage des scores

Lorsque l'utilisateur ne souhaite pas rejouer, on va améliorer l'affichage des scores

Pour cela on pourrait parcourir tout le tableau et afficher un message (dans une popup) pour chaque entrée du tableau du style `Partie 1 : 3 essais` puis `Partie 2 : 5 essais` et ainsi de suite.
  
(Mega bonus) Voire même, si on est motivé, afficher **tous** les scores (même format) dans **la même popup** !

</details>
