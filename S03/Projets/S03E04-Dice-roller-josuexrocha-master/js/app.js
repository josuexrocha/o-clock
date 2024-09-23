// Écouteur d'événement pour le bouton "Lancer les dés"
document.getElementById("rollButton").addEventListener("click", function () {
    let numberOfDice = parseInt(document.getElementById("numberOfDice").value);
    if (numberOfDice > 0) {
        createDices(numberOfDice, "player");
        createDices(numberOfDice, "dealer");
    } else {
        alert(`Nombre de dés pas valide.`);
    }
});

// Fonction pour créer les dés avec le nombre saisi et les afficher dans la zone ciblée (player ou dealer)
function createDices(numberOfDice, targetId) {
    document.getElementById(targetId).innerHTML = "";
    for (let i = 0; i < numberOfDice; i++) {
        let dice = document.createElement("div");
        dice.setAttribute("class", "dice");
        document.getElementById(targetId).appendChild(dice);
        let number = getNumber();
        showDice(dice, number);
    }
}

// Fonction pour avoir un nombre aléatoire entre 1 et 6
function getNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Fonction pour changer le chiffre dans le dé
function showDice(diceElement, number) {
    const NUMBER_POSITION = -((number - 1) * 100);
    diceElement.style.backgroundPosition = `${NUMBER_POSITION}px 0`;
}

// Debug initial
let initialNumber = getNumber();
console.log(initialNumber);
showDice(document.querySelector(".dice"), initialNumber);
