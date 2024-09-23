// Définition de la fonction pour générer un nombre aléatoire entre min et max
function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Tableau pour stocker les scores de chaque partie
const scores = [];

// Fonction pour jouer une partie
function play() {
    // Objet de configuration pour cette partie
    const game = {
        // Le nombre cherché
        searchedNumber: generateRandomNumber(10, 20), // Génère un nombre entre 10 et 20 inclus
        // Le nombre d'essais
        attempts: 1,
    };

    // Fonction interne pour gérer une partie
    function playGame() {
        // Le nombre saisi
        let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

        // Tant que le nombre saisi n'est pas bon on redemande un nombre
        while (enteredNumber !== game.searchedNumber) {
            // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
            if (!enteredNumber) {
                break;
            }
            // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
            if (enteredNumber < game.searchedNumber) {
                enteredNumber = parseInt(prompt('C\'est plus'));
            } else {
                enteredNumber = parseInt(prompt('C\'est moins'));
            }
            // on incrémente le nombre d'essais
            game.attempts += 1;
        }

        // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
        // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
        if (enteredNumber) {
            // on affiche un message de victoire
            alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attempts);
        } else {
            // on affiche un message d'abandon
            alert('Vous abandonnez ? Dommage...');
        }

        // Stocker le score de cette partie dans le tableau des scores
        scores.push(game.attempts);

        // Afficher les scores
        alert('Scores jusqu\'à présent : ' + scores.join(', '));

        // Relancer une nouvelle partie
        play();
    }

    // Appel de la fonction pour jouer une partie
    playGame();
}

// Lancer la première partie
play();
