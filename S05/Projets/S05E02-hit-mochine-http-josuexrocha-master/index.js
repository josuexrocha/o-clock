// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');

// Hit parade, classé du premier au dernier.
const hitParade = [
    {
        position: 1,
        artist: `Jain`,
        title: `Come`
    },
    {
        position: 2,
        artist: `Matt Simons`,
        title: `Catch & Realease`
    },
    {
        position: 3,
        artist: `Twety One Pilots`,
        title: `Stressed Out`,
    },
    {
        position: 4,
        artist: `Justin Bieber`,
        title: `Love Yourself`,
    },
    {
        position: 5,
        artist: `Kids United`,
        title: `On écrit sur les murs`,
    },
    {
        position: 6,
        artist: `Rihanna`,
        title: `Work`,
    },
    {
        position: 7,
        artist: `Julian Perretta`,
        title: `Miracle`,
    },
    {
        position: 8,
        artist: `Yall`,
        title: `Hundred Miles`,
    },
    {
        position: 9,
        artist: `Kendji Girac`,
        title: `No Me Mirès Màs`,
    },
    {
        position: 10,
        artist: `Feder`,
        title: `Blind (feat. Emmi)`,
    },
];

// Votre code va ici
let songCount = 0;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        songCount++;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.");
    } else if (url === '/classement') {
        const hitParade = [
            { nom: 'Charlu', score: 95 },
            { nom: 'Lili', score: 85 }
        ];

        let classement = 'Classement:\n';
        hitParade.forEach(item => {
            classement += `${item.nom} : ${item.score}\n`;
        });

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(classement);
    } else if (url === '/stats') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`La chanson a été vue ${songCount} fois`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404, page non trouvée');
    }
});

server.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
