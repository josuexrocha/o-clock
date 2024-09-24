/**
 * Plan d'action :
 * 1. Générer une grille de 8 cases x 8
 *    1.1 générer la grille (HTML)
 *    1.2 styliser la grille (CSS)
 * 2. Gestion du clic sur un "pixel"
 *    2.1 on écoute le clic sur un pixel
 *    2.2 on switche la couleur blanc/noir
 * 3. Formulaire de configuration
 *    3.1 on crée le champ "taille de la grille" et le bouton de validation
 *    3.2 on écoute la soumission du form
 *    3.3 on crée une nouvelle grille avec le nombre de case défini
 *    Bonus: on ajoute un champ pour la taille des pixel
 * Super Bonus: On peut choisir la couleur d'un nouveau pixel
 */

/**
 * Pour "dynamiser" (générer du HTML avec JS), une méthode
 * 1. on crée l'intégration HTML désirée
 * 2. on la convertit en JS => càd on génére le même HTML via JS puis on supprime le HTML "statique"
 */

// un objet "app" qui représente notre application
const app = {
  // la propriété pour la taille de la grille
  gridSize: 8,
  // et la taille des pixels
  pixelSize: 25,
  // palette de couleurs
  styles: [
    "palette--empty",
    "palette--color1",
    "palette--color2",
    "palette--color3",
  ],
  // couleur de palette par défaut
  currentColor: "palette--color1",

  // méthode qui lance l'application
  init: function () {
    // debug
    console.log("app démarrée !");
    // crée le form
    app.createForm();
    // génère la grille par défaut
    app.generateGrid();
    // affiche la palette
    app.generatePalette();
  },

  generatePalette: function () {
    const paletteElement = document.querySelector(".palette");

    // forEach() contient une fonction anonyme qui va recevoir tour à tour toutes les valeurs du tableau
    app.styles.forEach(function (style) {
      // console.log(style);
      const colorElement = document.createElement("div");
      colorElement.className = "palette-color " + style;
      // ajout dataset => data-color="palette--color1"
      colorElement.dataset.color = style;
      // couleur par défaut
      if (style === app.currentColor) {
        colorElement.className += " palette-color--active";
      }
      // on écoute le click pour pouvoir changer la couleur sélectionnée
      colorElement.addEventListener("click", app.handleColorClick);
      // ajout au DOM
      paletteElement.appendChild(colorElement);
    });
  },

  handleColorClick: function (event) {
    // on cible la couleur anciennement active
    const oldColorElement = document.querySelector(".palette-color--active");
    // pour lui supprimer la classe active
    oldColorElement.classList.remove("palette-color--active");
    // on récupère la couleur cliquée
    const newColorElement = event.target;
    // pour lui ajouter la classe active
    newColorElement.classList.add("palette-color--active");
    // connaissant l'élement cliqué, on peut récupérer les data qu'on avait mis dessus
    const newColor = newColorElement.dataset.color;
    app.currentColor = newColor;
  },

  createForm: function () {
    // on cible le conteneur du formulaire
    const formElement = document.querySelector(".configuration");
    // on crée le champ
    const inputElement = document.createElement("input");
    // @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
    inputElement.placeholder = "Taille de la grille";
    inputElement.type = "number";
    inputElement.className = "form-field form-field--grid";
    formElement.appendChild(inputElement);

    // on crée le champ taille pixels
    const sizeInput = document.createElement("input");
    sizeInput.placeholder = "Taille des pixels";
    sizeInput.type = "number";
    sizeInput.className = "form-field form-field--size";
    formElement.appendChild(sizeInput);

    // on crée le bouton
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Valider";
    buttonElement.className = "form-field form-field--validate";
    formElement.appendChild(buttonElement);

    // on écoute la soumission du formulaire
    formElement.addEventListener("submit", app.configurationHandler);
  },

  configurationHandler: function (event) {
    // on stoppe la soumission du formulaire (son action "par défaut")
    event.preventDefault();
    // on doit générer une nouvelle grille avec la valeur saisie dans le champ ".form-field--grid"
    app.gridSize = parseInt(document.querySelector(".form-field--grid").value);

    // on récupère la valeur du champ taille
    const sizeInput = document.querySelector(".form-field--size");
    // on récupère la valeur et on s'assure de manipuler un nombre
    app.pixelSize = Number(sizeInput.value);

    app.generateGrid();
  },

  /**
   * génère une grille
   */
  generateGrid: function () {
    // la zone de dessin
    const drawingArea = document.querySelector(".invader");

    // on supprime la grille existante (si présente)
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    // drawingArea.innerHTML = "";

    // autre solution
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node
    drawingArea.replaceChildren();

    // on crée une boucle pour les lignes
    for (let lineIndex = 1; lineIndex <= app.gridSize; lineIndex++) {
      // on crée un élément du DOM "ligne"
      const lineElement = document.createElement("div");
      // on ajoute la classe "row" à la ligne
      lineElement.classList.add("row");
      // on crée une boucle les colonnes (pixels)
      for (let columnIndex = 1; columnIndex <= app.gridSize; columnIndex++) {
        // on crée un élement du DOM "pixel"
        const pixelElement = document.createElement("div");
        // on ajoute la classe "pixel" + "pixel--white" à l'élément + la dimension
        // on lui associe une classe spécifique
        app.setPixelStyle(pixelElement);

        // on attache un écouteur d'événement sur chaque pixel
        pixelElement.addEventListener("click", app.pixelClickHandler);
        // on ajoute le pixel à la ligne
        lineElement.appendChild(pixelElement);
      }
      // on ajoute la ligne à la zone de dessin
      drawingArea.appendChild(lineElement);
    }
  },

  setPixelStyle: function (pixelElement) {
    // couleur par défaut de l'élément pixel
    pixelElement.className = "pixel palette--empty";
    // dimensions du pixel (CSS inline via attribut style="")
    pixelElement.style.width = app.pixelSize + "px";
    pixelElement.style.height = app.pixelSize + "px";
  },

  /**
   * fonction de rappel (callback)
   * pour le clic sur un pixel
   */
  pixelClickHandler: function (event) {
    // on peut récupérer l'élement sur lequel l'événement s'est déclénché via target
    // console.log(event.target);
    const pixelElement = event.target;
    // on peut aisément manipuler les classes avec classList
    // https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // on supprime toutes les classes de couleur présentes sur le pixel
    console.log(pixelElement);
    app.styles.forEach((style) => {
      pixelElement.classList.remove(style);
    });
    // on ajout la couleur sélectionnée dans la palette
    pixelElement.classList.add(app.currentColor);
  },
};

// on appelle la méthode init() de l'objet app
// une fois que le DOM est chargé (donc manipulable)
// /!\ pas de parenthèses à app.init !
document.addEventListener("DOMContentLoaded", app.init);

// PS : on peut aussi ajouter l'attribut defer dans <script defer src= et ne pas mettre de listener sur le document
