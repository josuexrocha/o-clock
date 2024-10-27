// public/js/product.js

import { Cart } from "./cart.js";

export const ProductManager = {
	productsPerPage: 6, // Vous pouvez augmenter cette valeur si nécessaire
	currentPage: 1,

	async loadMoreProducts() {
		this.currentPage++;
		try {
			const response = await fetch(`/catalogue?page=${this.currentPage}`, {
				headers: {
					Accept: "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Erreur lors du chargement des produits");
			}

			const data = await response.json();
			const container = document.getElementById("product-container");

			// Ajouter seulement les nouveaux produits
			for (const product of data.products) {
				const card = Cart.createProductCard(product);
				container.appendChild(card);
			}

			// Cacher le bouton si la dernière page est atteinte
			if (this.currentPage >= data.totalPages) {
				document.getElementById("load-more").style.display = "none";
			}
		} catch (error) {
			console.error("Erreur lors du chargement des produits :", error);
		}
	},

	async updateFilters() {
		// Réinitialiser la page actuelle
		this.currentPage = 1;

		const characteristicSelect = document.getElementById("characteristic");
		const priceRange = document.getElementById("price-range");
		const sortOrder = document.getElementById("sort-order");
		const showLatest = document.getElementById("show-latest");

		const selectedCharacteristic = characteristicSelect.value;
		const maxPrice = Number.parseInt(priceRange.value);
		const selectedSortOrder = sortOrder.value;
		const selectedShowLatest = showLatest.value;

		try {
			// Mettre à jour l'URL avec les paramètres de filtre
			const response = await fetch(
				`/catalogue?page=1&characteristic=${encodeURIComponent(selectedCharacteristic)}&maxPrice=${maxPrice}&sortOrder=${selectedSortOrder}&showLatest=${selectedShowLatest}`,
				{
					headers: {
						Accept: "application/json",
					},
				},
			);

			if (!response.ok) {
				throw new Error("Erreur lors de la mise à jour des filtres");
			}

			const data = await response.json();

			// Vider le conteneur avant d'ajouter les nouveaux produits
			const container = document.getElementById("product-container");
			container.innerHTML = "";

			// Ajouter les produits filtrés
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
		} catch (error) {
			console.error("Erreur lors de la mise à jour des filtres :", error);
		}
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
			resetButton.addEventListener("click", () => {
				characteristicSelect.value = "all";
				priceRange.value = priceRange.max;
				priceValue.textContent = priceRange.max;
				sortOrder.value = "asc";
				showLatest.value = "all";
				this.updateFilters();
			});
		}
	},
};
