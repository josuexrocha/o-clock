import { fetchWithErrorHandling } from './api.js';

export const Cart = {
    ENDPOINTS: {
        ADD: "/cart/add",
        UPDATE: "/cart/update",
        REMOVE: (productId) => `/cart/remove/${productId}`,
        GET: "/cart",
    },

    async add(productId, quantity = 1) {
        try {
            const response = await fetch(this.ENDPOINTS.ADD, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ productId, quantity }),
            });

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || `HTTP error! status: ${response.status}`);
                }

                alert(data.message || "Produit ajouté au panier");
                await this.load();
            } else {
                throw new Error("La réponse du serveur n'est pas au format JSON");
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout au panier:", error);
            alert(`Erreur lors de l'ajout au panier: ${error.message}`);
        }
    },

    async update(productId, quantity) {
        try {
            await fetchWithErrorHandling(this.ENDPOINTS.UPDATE, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId, quantity }),
            });
            await this.load();
        } catch (error) {
            alert(`Erreur lors de la mise à jour du panier: ${error.message}`);
        }
    },

    async remove(productId) {
        try {
            await fetchWithErrorHandling(this.ENDPOINTS.REMOVE(productId), {
                method: "DELETE",
            });
            await this.load();
        } catch (error) {
            alert(`Erreur lors de la suppression du produit du panier: ${error.message}`);
        }
    },

    async load() {
        const cartContainer = document.querySelector(".cart-container");
        if (!cartContainer) {
            console.log("Pas de conteneur de panier sur cette page");
            return;
        }

        try {
            const response = await fetch(this.ENDPOINTS.GET, {
                credentials: "include",
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }

            const contentType = response.headers.get("content-type");

            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                this.updateDisplay(data.cart, data.cartTotal);
            } else {
                const text = await response.text();
                if (text.trim().length === 0) {
                    cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
                } else {
                    cartContainer.innerHTML = text;
                    this.attachEventListeners();
                }
            }
        } catch (error) {
            console.error("Erreur lors du chargement du panier:", error);
        }
    },

    updateDisplay(cartItems, cartTotal) {
        const cartContainer = document.querySelector(".cart-container");
        if (!cartContainer) return;

        if (cartItems && cartItems.length > 0) {
            let cartHTML = '<div class="cart-items">';
            for (const item of cartItems) {
                cartHTML += `
                    <div class="cart-item" data-product-id="${item.product_id}">
                        <img src="/images/coffees/${item.reference}.png" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${item.name}</h3>
                            <p class="cart-item-price">Prix: ${item.price}€</p>
                            <div class="cart-item-quantity">
                                <button>-</button>
                                <span>${item.quantity}</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                `;
            }
            cartHTML += "</div>";
            cartHTML += `
                <div class="cart-total">
                    <h3>Total: ${cartTotal.toFixed(2)}€</h3>
                </div>
                <div class="cart-actions">
                    <a href="/catalogue" class="btn btn-secondary">Continuer les achats</a>
                    <button class="btn">Passer la commande</button>
                </div>
            `;
            cartContainer.innerHTML = cartHTML;
        } else {
            cartContainer.innerHTML = `
                <p>Votre panier est vide.</p>
                <a href="/catalogue" class="btn">Voir le catalogue</a>
            `;
        }

        this.attachEventListeners();
    },

    attachEventListeners() {
        const buttons = document.querySelectorAll(".cart-item-quantity button");
        for (const button of buttons) {
            button.addEventListener("click", function () {
                const productId = this.closest(".cart-item").dataset.productId;
                const quantityElement = this.parentElement.querySelector("span");
                let quantity = Number.parseInt(quantityElement.textContent);
                quantity += this.textContent === "+" ? 1 : -1;

                if (quantity > 0) {
                    Cart.update(productId, quantity);
                } else {
                    Cart.remove(productId);
                }
            });
        }
    },

    createProductCard(product) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.characteristic = product.characteristic;
        card.dataset.price = product.price;
        card.dataset.date = product.created_at;

        card.innerHTML = `
            <div class="card-content">
                <div class="image-container">
                    <img src="/images/coffees/${product.reference}.png" alt="${product.name}, caractéristique ${product.characteristic}" class="card-img">
                </div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">Prix: ${product.price}€</p>
                <p><strong>Caractéristique:</strong> ${product.characteristic}</p>
                <a href="/product/${product.id}" class="btn">Voir le produit</a>
                <button class="btn add-to-cart" data-product-id="${product.id}">Ajouter au panier</button>
            </div>
        `;

        const addToCartButton = card.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
            Cart.add(product.id);
        });

        return card;
    },
};
