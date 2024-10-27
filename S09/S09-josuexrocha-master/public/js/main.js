import { UI } from './ui.js';
import { Cart } from './cart.js';
import { ProductManager } from './product.js';

document.addEventListener("DOMContentLoaded", () => {
    UI.initializeHeader();
    UI.initializeMenu();

    // Gestionnaire global pour les boutons "Ajouter au panier"
    document.body.addEventListener("click", (e) => {
        if (e.target?.classList.contains("add-to-cart")) {
            e.preventDefault();
            const productId = e.target.dataset.productId;
            Cart.add(productId);
        }
    });

    const loadMoreButton = document.getElementById("load-more");
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", () => ProductManager.loadMoreProducts());
    }

    if (window.location.pathname.includes("/catalogue")) {
        ProductManager.initializeFilters();
    }

    // Chargement initial du panier
    const cartContainer = document.querySelector(".cart-container");
    if (cartContainer) {
        Cart.load();
    }
});
