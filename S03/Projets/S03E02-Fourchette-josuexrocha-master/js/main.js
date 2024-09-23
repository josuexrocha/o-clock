console.log(`test`);

const myNumber = Math.round(Math.random() * 500);
console.log(myNumber);
let userNumber = parseInt(prompt(`Veuillez insérer le bon numero pour voir si vous avez de la chance :`));
// console.log(userNumber);

function matchingNumbers(myNumber, userNumber) {
    let hint;
    if (myNumber === userNumber) {
        alert(`La chance est avec vous. Bravo ! C'est le bon numéro.`)  
    } else if (myNumber != userNumber) {
        if (myNumber < userNumber) {
            hint = `inférieur`;
        } else {
            hint = `supérieur`;
        }
        if (!isNaN(userNumber)) {
            userNumber = parseInt(prompt(`Pas de chance ! Le numéro est ${hint} à celui-lá que vous avez choisi. Essayez de nouveau :`));
            matchingNumbers(myNumber, userNumber);
        } else {
            alert("Vous devez saisir un numéro pour jouer."); // Mensagem de erro se o usuário clicar em "Cancelar" ou fechar a janela do prompt
        }
    }
};

matchingNumbers(myNumber, userNumber);
