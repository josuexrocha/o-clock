// bundle.js

// Contenu de api.js
const fetchWithErrorHandling = async (url, options) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || "Une erreur est survenue");
		}
		return await response.json();
	} catch (error) {
		console.error("Erreur:", error);
		throw error;
	}
};

// Contenu de cart.js
const Cart = {
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
					throw new Error(
						data.error || `HTTP error! status: ${response.status}`,
					);
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
			const data = await fetchWithErrorHandling(this.ENDPOINTS.UPDATE, {
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
			const data = await fetchWithErrorHandling(
				this.ENDPOINTS.REMOVE(productId),
				{
					method: "DELETE",
				},
			);
			await this.load();
		} catch (error) {
			alert(
				`Erreur lors de la suppression du produit du panier: ${error.message}`,
			);
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

// Contenu de product.js
const ProductManager = {
	productsPerPage: 6,
	currentPage: 1,

	async loadMoreProducts() {
		this.currentPage++;
		const response = await fetch(`/catalogue/${this.currentPage}`, {
			headers: {
				Accept: "application/json",
			},
		});
		const data = await response.json();
		const container = document.getElementById("product-container");
		for (const product of data.products) {
			const card = Cart.createProductCard(product);
			container.appendChild(card);
		}
		if (this.currentPage >= data.totalPages) {
			document.getElementById("load-more").style.display = "none";
		}
	},

	async updateFilters() {
		const characteristicSelect = document.getElementById("characteristic");
		const priceRange = document.getElementById("price-range");
		const sortOrder = document.getElementById("sort-order");
		const showLatest = document.getElementById("show-latest");
		const selectedCharacteristic = characteristicSelect.value;
		const maxPrice = Number.parseInt(priceRange.value);
		const selectedSortOrder = sortOrder.value;
		const selectedShowLatest = showLatest.value;

		this.currentPage = 1;
		const response = await fetch(
			`/catalogue/1?characteristic=${selectedCharacteristic}&maxPrice=${maxPrice}&sortOrder=${selectedSortOrder}&showLatest=${selectedShowLatest}`,
			{
				headers: {
					Accept: "application/json",
				},
			},
		);
		const data = await response.json();
		const container = document.getElementById("product-container");
		container.innerHTML = "";
		for (const product of data.products) {
			const card = Cart.createProductCard(product);
			container.appendChild(card);
		}

		const loadMoreButton = document.getElementById("load-more");
		if (data.currentPage < data.totalPages) {
			loadMoreButton.style.display = "block";
		} else {
			loadMoreButton.style.display = "none";
		}

		const noResults = document.getElementById("no-results");
		noResults.style.display = data.products.length === 0 ? "block" : "none";
	},

	initializeFilters() {
		const characteristicSelect = document.getElementById("characteristic");
		const priceRange = document.getElementById("price-range");
		const priceValue = document.getElementById("price-value");
		const sortOrder = document.getElementById("sort-order");
		const showLatest = document.getElementById("show-latest");
		const resetButton = document.getElementById("reset-filters");

		if (characteristicSelect && priceRange && sortOrder && showLatest) {
			characteristicSelect.addEventListener("change", () =>
				this.updateFilters(),
			);
			priceRange.addEventListener("input", function () {
				priceValue.textContent = this.value;
				ProductManager.updateFilters();
			});
			sortOrder.addEventListener("change", () => this.updateFilters());
			showLatest.addEventListener("change", () => this.updateFilters());
			priceValue.textContent = priceRange.value;
			this.updateFilters();
		}

		if (resetButton) {
			resetButton.addEventListener("click", function () {
				characteristicSelect.value = "all";
				priceRange.value = priceRange.max;
				priceValue.textContent = priceRange.max;
				sortOrder.value = "asc";
				showLatest.value = "all";
				ProductManager.updateFilters();
			});
		}
	},
};

// Contenu de ui.js
const UI = {
	initializeHeader() {
		const header = document.querySelector("header");
		setTimeout(function () {
			header.classList.add("header-visible");
		}, 100);
	},

	initializeMenu() {
		const menuToggle = document.getElementById("menu-toggle");
		const menu = document.getElementById("menu");
		const header = document.querySelector("header");

		if (menuToggle && menu) {
			menuToggle.addEventListener("click", () => {
				menu.classList.toggle("show");
				menuToggle.classList.toggle("open");
				header.classList.toggle("menu-open");
				const userSubmenu = document.querySelector(".user-submenu");
				if (userSubmenu?.classList.contains("show")) {
					userSubmenu.classList.remove("show");
				}
			});
		}

		const userToggle = document.getElementById("user-toggle");
		const userSubmenu = document.querySelector(".user-submenu");

		if (userToggle && userSubmenu) {
			userToggle.addEventListener("click", function (e) {
				e.preventDefault();
				userSubmenu.classList.toggle("show");
			});
		}

		document.addEventListener("click", (e) => {
			if (
				userSubmenu &&
				!userToggle.contains(e.target) &&
				!userSubmenu.contains(e.target)
			) {
				userSubmenu.classList.remove("show");
			}
		});
	},
};

// Contenu de main.js
document.addEventListener("DOMContentLoaded", function () {
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
		loadMoreButton.addEventListener("click", () =>
			ProductManager.loadMoreProducts(),
		);
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
