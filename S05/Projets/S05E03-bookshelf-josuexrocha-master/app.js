const http = require('node:http');
const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const localeData = require('dayjs/plugin/localeData');
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/fr');

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(relativeTime);
dayjs.locale('fr');

const books = [
    {
        title: "The Fellowship of the Ring",
        language: "English",
        country: "United Kingdom",
        author: "J.R.R. Tolkien",
        date: "1954-07-29"
    },
    {
        title: "Prelude to foundation",
        language: "English",
        country: "United States",
        author: "Isaac Asimov",
        date: "1988-11-08"
    },
    {
        title: "Voyage au centre de la terre",
        language: "Français",
        country: "France",
        author: "Jules Verne",
        date: "1864-11-25"
    },
    {
        title: "La nuit des temps",
        language: "Français",
        country: "France",
        author: "René Barjavel",
        date: "1968-05-20"
    },
    {
        title: "Carrion Comfort",
        language: "English",
        country: "United States",
        author: "Dan Simmons",
        date: "1989-02-15"
    }
];

const formatBookDate = (date) => {
    return dayjs(date).format('dddd, MMMM Do YYYY');
};

const calculateBookAge = (date) => {
    return dayjs().diff(dayjs(date), 'year');
};

const generateBookTable = (books) => {
    let table = '<table border="1"><tr><th>Title</th><th>Author</th><th>Language</th><th>Country</th><th>Date</th><th>Age</th></tr>';

    for (const book of books) {
        const formattedDate = formatBookDate(book.date);
        const bookAge = calculateBookAge(book.date);
        table += `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.language}</td>
            <td>${book.country}</td>
            <td>${formattedDate}</td>
            <td>${bookAge} years</td>
        </tr>`;
    }

    table += '</table>';
    return table;
};

books.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

const server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body>');

    const bookTable = generateBookTable(books);
    res.write(bookTable);

    res.write('</body></html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
