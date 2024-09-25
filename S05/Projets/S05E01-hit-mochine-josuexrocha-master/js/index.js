const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// Hit parade, classé du premier au dernier.
const hitParade = [
    'Jain - Come',
    'Matt Simons - Catch & Release',
    'Twenty One Pilots - Stressed Out',
    'Justin Bieber - Love Yourself',
    'Kids United - On écrit sur les murs',
    'Rihanna - Work',
    'Julian Perretta - Miracle',
    'Yall - Hundred Miles',
    'Kendji Girac - No Me Mirès Màs',
    'Feder - Blind (feat. Emmi)'
];

// Fonction pour afficher une chanson spécifique par index (0-based)
function displaySong(index) {
    if (index >= 0 && index < hitParade.length) {
        console.log(`Chanson à la position ${index + 1} : ${hitParade[index]}`);
    } else {
        console.log('Index invalide');
    }
}

// Fonction pour afficher une chanson spécifique par position (1-based)
function displaySongByPosition(position) {
    const index = position - 1; // Convertit la position 1-based en index 0-based
    displaySong(index);
}

// Affiche dans la console "Que souhaitez-vous ?"
rl.question('Que souhaitez-vous ? (chante/classement/position n/quitter) ', (answer) => {
    if (answer === 'chante') {
        console.log('Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock');
        rl.close();
    } else if (answer === 'classement') {
        hitParade.forEach((song, index) => {
            console.log(`Position ${index + 1}: ${song}`);
        });
        rl.close();
    } else if (answer.startsWith('position ')) {
        const position = Number.parseInt(answer.split(' ')[1], 10);
        if (position >= 1 && position <= 10) {
            displaySongByPosition(position);
        } else {
            console.log('Position invalide, veuillez entrer un nombre entre 1 et 10.');
        }
        rl.close();
    } else if (answer === 'quitter') {
        console.log('À la prochaine.');
        rl.close();
    } else {
        console.log('Je n\'ai pas compris votre demande.');
        rl.close();
    }
});
