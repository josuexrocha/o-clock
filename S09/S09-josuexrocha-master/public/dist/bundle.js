/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	/******/ var __webpack_modules__ = {
		/***/ "./public/js/api.js":
			/*!**************************!*\
  !*** ./public/js/api.js ***!
  \**************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWithErrorHandling: () => (/* binding */ fetchWithErrorHandling)\n/* harmony export */ });\n// api.js\nasync function fetchWithErrorHandling(url, options) {\n    try {\n        const response = await fetch(url, options);\n        if (!response.ok) {\n            const errorData = await response.json();\n            throw new Error(errorData.error || 'Une erreur est survenue');\n        }\n        return await response.json();\n    } catch (error) {\n        console.error('Erreur:', error);\n        throw error;\n    }\n}\n\n//# sourceURL=webpack://ocoffee/./public/js/api.js?",
				);

				/***/
			},

		/***/ "./public/js/cart.js":
			/*!***************************!*\
  !*** ./public/js/cart.js ***!
  \***************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cart: () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./public/js/api.js\");\n// cart.js\n\n\nclass Cart {\n    static ENDPOINTS = {\n        ADD: '/cart/add',\n        UPDATE: '/cart/update',\n        REMOVE: (productId) => `/cart/remove/${productId}`,\n        GET: '/cart'\n    };\n\n    static async add(productId, quantity = 1) {\n        try {\n            const response = await fetch(this.ENDPOINTS.ADD, {\n                method: 'POST',\n                credentials: 'include',\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Accept': 'application/json',\n                },\n                body: JSON.stringify({ productId, quantity })\n            });\n\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                const data = await response.json();\n\n                if (!response.ok) {\n                    throw new Error(data.error || `HTTP error! status: ${response.status}`);\n                }\n\n                alert(data.message || 'Produit ajouté au panier');\n                await this.load();\n            } else {\n                throw new Error(\"La réponse du serveur n'est pas au format JSON\");\n            }\n        } catch (error) {\n            console.error('Erreur lors de l\\'ajout au panier:', error);\n            alert(`Erreur lors de l'ajout au panier: ${error.message}`);\n        }\n    }\n\n    static async update(productId, quantity) {\n        try {\n            const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWithErrorHandling)(this.ENDPOINTS.UPDATE, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json',\n                },\n                body: JSON.stringify({ productId, quantity })\n            });\n            await this.load();\n        } catch (error) {\n            alert(`Erreur lors de la mise à jour du panier: ${error.message}`);\n        }\n    }\n\n    static async remove(productId) {\n        try {\n            const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWithErrorHandling)(this.ENDPOINTS.REMOVE(productId), {\n                method: 'DELETE'\n            });\n            await this.load();\n        } catch (error) {\n            alert(`Erreur lors de la suppression du produit du panier: ${error.message}`);\n        }\n    }\n\n    static async load() {\n        const cartContainer = document.querySelector('.cart-container');\n        if (!cartContainer) {\n            console.log('Pas de conteneur de panier sur cette page');\n            return; // Sortir de la fonction si le conteneur n'existe pas\n        }\n        \n        try {\n            const response = await fetch(this.ENDPOINTS.GET, {\n                credentials: 'include',\n                headers: {\n                    'Accept': 'application/json'\n                }\n            });\n    \n            if (!response.ok) {\n                throw new Error(`Erreur HTTP! Statut: ${response.status}`);\n            }\n    \n            const contentType = response.headers.get('content-type');\n            const cartContainer = document.querySelector('.cart-container');\n    \n            if (!cartContainer) {\n                console.error('.cart-container non trouvé dans le DOM');\n                return;\n            }\n    \n            if (contentType && contentType.indexOf('application/json') !== -1) {\n                const data = await response.json();\n                this.updateDisplay(data.cart, data.cartTotal);\n            } else {\n                const text = await response.text();\n                if (text.trim().length === 0) {\n                    cartContainer.innerHTML = '<p>Votre panier est vide.</p>';\n                } else {\n                    cartContainer.innerHTML = text;\n                    this.attachEventListeners();\n                }\n            }\n        } catch (error) {\n            console.error('Erreur lors du chargement du panier:', error);\n        }\n    }\n\n    static updateDisplay(cartItems, cartTotal) {\n        const cartContainer = document.querySelector('.cart-container');\n        if (!cartContainer) return;\n\n        if (cartItems && cartItems.length > 0) {\n            let cartHTML = '<div class=\"cart-items\">';\n            cartItems.forEach(item => {\n                cartHTML += `\n                    <div class=\"cart-item\" data-product-id=\"${item.product_id}\">\n                        <img src=\"/images/coffees/${item.reference}.png\" alt=\"${item.name}\" class=\"cart-item-image\">\n                        <div class=\"cart-item-details\">\n                            <h3 class=\"cart-item-title\">${item.name}</h3>\n                            <p class=\"cart-item-price\">Prix: ${item.price}€</p>\n                            <div class=\"cart-item-quantity\">\n                                <button>-</button>\n                                <span>${item.quantity}</span>\n                                <button>+</button>\n                            </div>\n                        </div>\n                    </div>\n                `;\n            });\n            cartHTML += '</div>';\n            cartHTML += `\n                <div class=\"cart-total\">\n                    <h3>Total: ${cartTotal.toFixed(2)}€</h3>\n                </div>\n                <div class=\"cart-actions\">\n                    <a href=\"/catalogue\" class=\"btn btn-secondary\">Continuer les achats</a>\n                    <button class=\"btn\">Passer la commande</button>\n                </div>\n            `;\n            cartContainer.innerHTML = cartHTML;\n        } else {\n            cartContainer.innerHTML = `\n                <p>Votre panier est vide.</p>\n                <a href=\"/catalogue\" class=\"btn\">Voir le catalogue</a>\n            `;\n        }\n\n        this.attachEventListeners();\n    }\n\n    static attachEventListeners() {\n        document.querySelectorAll('.cart-item-quantity button').forEach(button => {\n            button.addEventListener('click', function() {\n                const productId = this.closest('.cart-item').dataset.productId;\n                const quantityElement = this.parentElement.querySelector('span');\n                let quantity = parseInt(quantityElement.textContent);\n                quantity += this.textContent === '+' ? 1 : -1;\n\n                if (quantity > 0) {\n                    Cart.update(productId, quantity);\n                } else {\n                    Cart.remove(productId);\n                }\n            });\n        });\n    }\n\n    static createProductCard(product) {\n        const card = document.createElement('div');\n        card.className = 'card';\n        card.dataset.characteristic = product.characteristic;\n        card.dataset.price = product.price;\n        card.dataset.date = product.created_at;\n\n        card.innerHTML = `\n            <div class=\"card-content\">\n                <div class=\"image-container\">\n                    <img src=\"/images/coffees/${product.reference}.png\" alt=\"${product.name}, caractéristique ${product.characteristic}\" class=\"card-img\">\n                </div>\n                <h3>${product.name}</h3>\n                <p>${product.description}</p>\n                <p class=\"price\">Prix: ${product.price}€</p>\n                <p><strong>Caractéristique:</strong> ${product.characteristic}</p>\n                <a href=\"/product/${product.id}\" class=\"btn\">Voir le produit</a>\n                <button class=\"btn add-to-cart\" data-product-id=\"${product.id}\">Ajouter au panier</button>\n            </div>\n        `;\n\n        const addToCartButton = card.querySelector('.add-to-cart');\n        addToCartButton.addEventListener('click', function() {\n            Cart.add(product.id);\n        });\n\n        return card;\n    }\n}\n\n//# sourceURL=webpack://ocoffee/./public/js/cart.js?",
				);

				/***/
			},

		/***/ "./public/js/main.js":
			/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./public/js/cart.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.js */ \"./public/js/product.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./public/js/ui.js\");\n// main.js\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.initializeHeader();\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.initializeMenu();\n\n    // Gestionnaire global pour les boutons \"Ajouter au panier\"\n    document.body.addEventListener('click', function(e) {\n        if (e.target && e.target.classList.contains('add-to-cart')) {\n            e.preventDefault();\n            const productId = e.target.dataset.productId;\n            _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.add(productId);\n        }\n    });\n\n    const loadMoreButton = document.getElementById('load-more');\n    if (loadMoreButton) {\n        loadMoreButton.addEventListener('click', () => _product_js__WEBPACK_IMPORTED_MODULE_1__.ProductManager.loadMoreProducts());\n    }\n\n    if (window.location.pathname.includes('/catalogue')) {\n        _product_js__WEBPACK_IMPORTED_MODULE_1__.ProductManager.initializeFilters();\n    }\n\n    // Chargement initial du panier\n    const cartContainer = document.querySelector('.cart-container');\n    if (cartContainer) {\n        _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.load();\n    }\n});\n\n//# sourceURL=webpack://ocoffee/./public/js/main.js?",
				);

				/***/
			},

		/***/ "./public/js/product.js":
			/*!******************************!*\
  !*** ./public/js/product.js ***!
  \******************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductManager: () => (/* binding */ ProductManager)\n/* harmony export */ });\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./public/js/cart.js\");\n// product.js\n\n\nclass ProductManager {\n    static productsPerPage = 6;\n    static currentPage = 1;\n\n    static async loadMoreProducts() {\n        this.currentPage++;\n        const response = await fetch(`/catalogue/${this.currentPage}`, {\n            headers: {\n                'Accept': 'application/json'\n            }\n        });\n        const data = await response.json();\n        \n        const container = document.getElementById('product-container');\n        data.products.forEach(product => {\n            const card = _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.createProductCard(product);\n            container.appendChild(card);\n        });\n\n        if (this.currentPage >= data.totalPages) {\n            document.getElementById('load-more').style.display = 'none';\n        }\n    }\n\n    static async updateFilters() {\n        const characteristicSelect = document.getElementById('characteristic');\n        const priceRange = document.getElementById('price-range');\n        const sortOrder = document.getElementById('sort-order');\n        const showLatest = document.getElementById('show-latest');\n\n        const selectedCharacteristic = characteristicSelect.value;\n        const maxPrice = parseInt(priceRange.value);\n        const selectedSortOrder = sortOrder.value;\n        const selectedShowLatest = showLatest.value;\n\n        this.currentPage = 1;\n\n        const response = await fetch(`/catalogue/1?characteristic=${selectedCharacteristic}&maxPrice=${maxPrice}&sortOrder=${selectedSortOrder}&showLatest=${selectedShowLatest}`, {\n            headers: {\n                'Accept': 'application/json'\n            }\n        });\n        const data = await response.json();\n        \n        const container = document.getElementById('product-container');\n        container.innerHTML = '';\n\n        data.products.forEach(product => {\n            const card = _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.createProductCard(product);\n            container.appendChild(card);\n        });\n\n        const loadMoreButton = document.getElementById('load-more');\n        if (data.currentPage < data.totalPages) {\n            loadMoreButton.style.display = 'block';\n        } else {\n            loadMoreButton.style.display = 'none';\n        }\n\n        const noResults = document.getElementById('no-results');\n        noResults.style.display = data.products.length === 0 ? 'block' : 'none';\n    }\n\n    static initializeFilters() {\n        const characteristicSelect = document.getElementById('characteristic');\n        const priceRange = document.getElementById('price-range');\n        const priceValue = document.getElementById('price-value');\n        const sortOrder = document.getElementById('sort-order');\n        const showLatest = document.getElementById('show-latest');\n        const resetButton = document.getElementById('reset-filters');\n\n        if (characteristicSelect && priceRange && sortOrder && showLatest) {\n            characteristicSelect.addEventListener('change', () => this.updateFilters());\n            priceRange.addEventListener('input', function() {\n                priceValue.textContent = this.value;\n                ProductManager.updateFilters();\n            });\n            sortOrder.addEventListener('change', () => this.updateFilters());\n            showLatest.addEventListener('change', () => this.updateFilters());\n\n            priceValue.textContent = priceRange.value;\n            this.updateFilters();\n        }\n\n        if (resetButton) {\n            resetButton.addEventListener('click', function() {\n                characteristicSelect.value = 'all';\n                priceRange.value = priceRange.max;\n                priceValue.textContent = priceRange.max;\n                sortOrder.value = 'asc';\n                showLatest.value = 'all';\n                ProductManager.updateFilters();\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack://ocoffee/./public/js/product.js?",
				);

				/***/
			},

		/***/ "./public/js/ui.js":
			/*!*************************!*\
  !*** ./public/js/ui.js ***!
  \*************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n// ui.js\nclass UI {\n    static initializeHeader() {\n        const header = document.querySelector('header');\n        setTimeout(function() {\n            header.classList.add('header-visible');\n        }, 100);\n    }\n\n    static initializeMenu() {\n        const menuToggle = document.getElementById('menu-toggle');\n        const menu = document.getElementById('menu');\n        const header = document.querySelector('header');\n        if (menuToggle && menu) {\n            menuToggle.addEventListener('click', function() {\n                menu.classList.toggle('show');\n                menuToggle.classList.toggle('open');\n                header.classList.toggle('menu-open');\n\n                const userSubmenu = document.querySelector('.user-submenu');\n                if (userSubmenu && userSubmenu.classList.contains('show')) {\n                    userSubmenu.classList.remove('show');\n                }\n            });\n        }\n\n        const userToggle = document.getElementById('user-toggle');\n        const userSubmenu = document.querySelector('.user-submenu');\n        if (userToggle && userSubmenu) {\n            userToggle.addEventListener('click', function(e) {\n                e.preventDefault();\n                userSubmenu.classList.toggle('show');\n            });\n        }\n\n        document.addEventListener('click', function(e) {\n            if (userSubmenu && !userToggle.contains(e.target) && !userSubmenu.contains(e.target)) {\n                userSubmenu.classList.remove('show');\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://ocoffee/./public/js/ui.js?",
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__,
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module",
				});
				/******/
			}
			/******/ Object.defineProperty(exports, "__esModule", { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module can't be inlined because the eval devtool is used.
	/******/ var __webpack_exports__ = __webpack_require__("./public/js/main.js");
	/******/
	/******/
})();
