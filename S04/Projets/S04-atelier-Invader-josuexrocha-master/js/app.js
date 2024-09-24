function gridMaker(rows, cols) {
    const gridContainer = document.getElementById('invader');
    gridContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
};

gridMaker(8, 8);
changeColor()


function changeColor() {


    const pixels = document.querySelectorAll('.cell');

    // iterer à chaque fois un pixel
    pixels.forEach(pixel => {
        // add le gestionnaire d'evenements
        pixel.addEventListener('click', () => {
            // verifier si la couleur est noire
            if (pixel.style.backgroundColor === 'black') {
                // si oui, on la change en gris
                pixel.style.backgroundColor = 'rgb(173, 173, 173)';
            } else {
                // sinon, on la change en noir
                pixel.style.backgroundColor = 'black';
            }
        });
    });


}


// selectioner les pixels


//add le gestionnaire d'evenements dans le form
// const configuration = document.getElementById('configuration');

const btnValider = document.querySelector('#btnSubmit');

btnValider.addEventListener("click", (event) => {
    event.preventDefault();

    const gridSize = document.getElementById('gridSize').value;
    gridMaker(gridSize, gridSize);
    changeColor()

});