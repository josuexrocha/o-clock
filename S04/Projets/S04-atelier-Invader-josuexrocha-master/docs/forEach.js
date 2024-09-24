// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const letters = ["a", "b", "c"];

// "pour chaque lettre du tableau de lettres"
// ici, chaque élément du tableau est transmis en argument dans letter
letters.forEach(function (letter) {
  console.log(letter);
});

// output: "a"
// output: "b"
// output: "c"

// équivalent avec for...of
// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of

// letter est un nom de variable que l'on choisi nous-même
// "pour chaque lettre du tableau de lettres"
for (const letter of letters) {
  console.log(letter);
}

// output: "a"
// output: "b"
// output: "c"
