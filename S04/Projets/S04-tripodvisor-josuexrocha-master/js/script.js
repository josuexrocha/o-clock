console.log(document.getElementById("newsletter"));

console.log(document.getElementById("newsletter__container"));

console.log(document.querySelector(".newsletter"));



//  l'encart n'apparaisse que si on clique sur le lien newsletter en haut de l'écran 
const newsletterLink = document.getElementById("newsletter");
newsletterLink.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".newsletter").classList.remove("hidden");
},
);

// il se ferme si on clique sur la croix
const newsletterCloseButton = document.querySelector(".newsletter__close");
newsletterCloseButton.addEventListener("click", function(){
    document.querySelector(".newsletter").classList.add("hidden");
}
);

// fonction pour afficher l'encart de newsletter
function afficherNewsletter() {
    document.getElementById("newsletter__container").classList.remove("hidden");
}

// écouteur d'événements pour le scroll 
window.addEventListener("scroll", function() {
    // Vérifier si la position de défilement verticale est supérieure à 300px
    if (window.scrollY > 300) {
        // Appeler la fonction pour afficher l'encart de newsletter
        afficherNewsletter();
        // Désactiver l'écouteur d'événements pour éviter l'affichage répété
        window.removeEventListener("scroll", arguments.callee);
    }
});


