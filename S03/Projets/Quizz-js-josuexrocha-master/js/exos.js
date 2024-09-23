/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
// Ton code ici...

const question1 = `Quelle mer borde la ville de Sébastopol ?`;
const solution1 = `la mer Noire`;

/* Exo 2 */
// Ton code ici...

const reponse1 = prompt(question1);

if (reponse1 === solution1) {
    alert(`Gagné !`);
    rightAnswers += 1;

}
else {
    alert(`Perdu...`);
}

/* Exo 3 */
// Ton code ici...

const question2 = `Quel est l'âge du capitaine ?`;
const solution2 = `63`;

const reponse2 = prompt(question2);

if (reponse2 === solution2) {
    alert(`Gagné !`);
    rightAnswers += 1;
}
else {
    alert(`Perdu...`);
}

// Bonus

let rightAnswers = 0

alert(`Vous avez ${rightAnswers} bonnes réponses`)