/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/api.js":
/*!**************************!*\
  !*** ./public/js/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWithErrorHandling: () => (/* binding */ fetchWithErrorHandling)\n/* harmony export */ });\n// api.js\nconst fetchWithErrorHandling = async (url, options) => {\n    try {\n        const response = await fetch(url, options);\n        if (!response.ok) {\n            const errorData = await response.json();\n            throw new Error(errorData.error || \"Une erreur est survenue\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Erreur:\", error);\n        throw error;\n    }\n};\n\n\n//# sourceURL=webpack://ocoffee/./public/js/api.js?");

/***/ }),

/***/ "./public/js/cart.js":
/*!***************************!*\
  !*** ./public/js/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cart: () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./public/js/api.js\");\n\n\nconst Cart = {\n    ENDPOINTS: {\n        ADD: \"/cart/add\",\n        UPDATE: \"/cart/update\",\n        REMOVE: (productId) => `/cart/remove/${productId}`,\n        GET: \"/cart\",\n    },\n\n    async add(productId, quantity = 1) {\n        try {\n            const response = await fetch(this.ENDPOINTS.ADD, {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Accept: \"application/json\",\n                },\n                body: JSON.stringify({ productId, quantity }),\n            });\n\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                const data = await response.json();\n\n                if (!response.ok) {\n                    throw new Error(data.error || `HTTP error! status: ${response.status}`);\n                }\n\n                alert(data.message || \"Produit ajouté au panier\");\n                await this.load();\n            } else {\n                throw new Error(\"La réponse du serveur n'est pas au format JSON\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de l'ajout au panier:\", error);\n            alert(`Erreur lors de l'ajout au panier: ${error.message}`);\n        }\n    },\n\n    async update(productId, quantity) {\n        try {\n            await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWithErrorHandling)(this.ENDPOINTS.UPDATE, {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                },\n                body: JSON.stringify({ productId, quantity }),\n            });\n            await this.load();\n        } catch (error) {\n            alert(`Erreur lors de la mise à jour du panier: ${error.message}`);\n        }\n    },\n\n    async remove(productId) {\n        try {\n            await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWithErrorHandling)(this.ENDPOINTS.REMOVE(productId), {\n                method: \"DELETE\",\n            });\n            await this.load();\n        } catch (error) {\n            alert(`Erreur lors de la suppression du produit du panier: ${error.message}`);\n        }\n    },\n\n    async load() {\n        const cartContainer = document.querySelector(\".cart-container\");\n        if (!cartContainer) {\n            console.log(\"Pas de conteneur de panier sur cette page\");\n            return;\n        }\n\n        try {\n            const response = await fetch(this.ENDPOINTS.GET, {\n                credentials: \"include\",\n                headers: {\n                    Accept: \"application/json\",\n                },\n            });\n\n            if (!response.ok) {\n                throw new Error(`Erreur HTTP! Statut: ${response.status}`);\n            }\n\n            const contentType = response.headers.get(\"content-type\");\n\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                const data = await response.json();\n                this.updateDisplay(data.cart, data.cartTotal);\n            } else {\n                const text = await response.text();\n                if (text.trim().length === 0) {\n                    cartContainer.innerHTML = \"<p>Votre panier est vide.</p>\";\n                } else {\n                    cartContainer.innerHTML = text;\n                    this.attachEventListeners();\n                }\n            }\n        } catch (error) {\n            console.error(\"Erreur lors du chargement du panier:\", error);\n        }\n    },\n\n    updateDisplay(cartItems, cartTotal) {\n        const cartContainer = document.querySelector(\".cart-container\");\n        if (!cartContainer) return;\n\n        if (cartItems && cartItems.length > 0) {\n            let cartHTML = '<div class=\"cart-items\">';\n            for (const item of cartItems) {\n                cartHTML += `\n                    <div class=\"cart-item\" data-product-id=\"${item.product_id}\">\n                        <img src=\"/images/coffees/${item.reference}.png\" alt=\"${item.name}\" class=\"cart-item-image\">\n                        <div class=\"cart-item-details\">\n                            <h3 class=\"cart-item-title\">${item.name}</h3>\n                            <p class=\"cart-item-price\">Prix: ${item.price}€</p>\n                            <div class=\"cart-item-quantity\">\n                                <button>-</button>\n                                <span>${item.quantity}</span>\n                                <button>+</button>\n                            </div>\n                        </div>\n                    </div>\n                `;\n            }\n            cartHTML += \"</div>\";\n            cartHTML += `\n                <div class=\"cart-total\">\n                    <h3>Total: ${cartTotal.toFixed(2)}€</h3>\n                </div>\n                <div class=\"cart-actions\">\n                    <a href=\"/catalogue\" class=\"btn btn-secondary\">Continuer les achats</a>\n                    <button class=\"btn\">Passer la commande</button>\n                </div>\n            `;\n            cartContainer.innerHTML = cartHTML;\n        } else {\n            cartContainer.innerHTML = `\n                <p>Votre panier est vide.</p>\n                <a href=\"/catalogue\" class=\"btn\">Voir le catalogue</a>\n            `;\n        }\n\n        this.attachEventListeners();\n    },\n\n    attachEventListeners() {\n        const buttons = document.querySelectorAll(\".cart-item-quantity button\");\n        for (const button of buttons) {\n            button.addEventListener(\"click\", function () {\n                const productId = this.closest(\".cart-item\").dataset.productId;\n                const quantityElement = this.parentElement.querySelector(\"span\");\n                let quantity = Number.parseInt(quantityElement.textContent);\n                quantity += this.textContent === \"+\" ? 1 : -1;\n\n                if (quantity > 0) {\n                    Cart.update(productId, quantity);\n                } else {\n                    Cart.remove(productId);\n                }\n            });\n        }\n    },\n\n    createProductCard(product) {\n        const card = document.createElement(\"div\");\n        card.className = \"card\";\n        card.dataset.characteristic = product.characteristic;\n        card.dataset.price = product.price;\n        card.dataset.date = product.created_at;\n\n        card.innerHTML = `\n            <div class=\"card-content\">\n                <div class=\"image-container\">\n                    <img src=\"/images/coffees/${product.reference}.png\" alt=\"${product.name}, caractéristique ${product.characteristic}\" class=\"card-img\">\n                </div>\n                <h3>${product.name}</h3>\n                <p>${product.description}</p>\n                <p class=\"price\">Prix: ${product.price}€</p>\n                <p><strong>Caractéristique:</strong> ${product.characteristic}</p>\n                <a href=\"/product/${product.id}\" class=\"btn\">Voir le produit</a>\n                <button class=\"btn add-to-cart\" data-product-id=\"${product.id}\">Ajouter au panier</button>\n            </div>\n        `;\n\n        const addToCartButton = card.querySelector(\".add-to-cart\");\n        addToCartButton.addEventListener(\"click\", () => {\n            Cart.add(product.id);\n        });\n\n        return card;\n    },\n};\n\n\n//# sourceURL=webpack://ocoffee/./public/js/cart.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./public/js/ui.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.js */ \"./public/js/cart.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.js */ \"./public/js/product.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    _ui_js__WEBPACK_IMPORTED_MODULE_0__.UI.initializeHeader();\n    _ui_js__WEBPACK_IMPORTED_MODULE_0__.UI.initializeMenu();\n\n    // Gestionnaire global pour les boutons \"Ajouter au panier\"\n    document.body.addEventListener(\"click\", (e) => {\n        if (e.target?.classList.contains(\"add-to-cart\")) {\n            e.preventDefault();\n            const productId = e.target.dataset.productId;\n            _cart_js__WEBPACK_IMPORTED_MODULE_1__.Cart.add(productId);\n        }\n    });\n\n    const loadMoreButton = document.getElementById(\"load-more\");\n    if (loadMoreButton) {\n        loadMoreButton.addEventListener(\"click\", () => _product_js__WEBPACK_IMPORTED_MODULE_2__.ProductManager.loadMoreProducts());\n    }\n\n    if (window.location.pathname.includes(\"/catalogue\")) {\n        _product_js__WEBPACK_IMPORTED_MODULE_2__.ProductManager.initializeFilters();\n    }\n\n    // Chargement initial du panier\n    const cartContainer = document.querySelector(\".cart-container\");\n    if (cartContainer) {\n        _cart_js__WEBPACK_IMPORTED_MODULE_1__.Cart.load();\n    }\n});\n\n\n//# sourceURL=webpack://ocoffee/./public/js/main.js?");

/***/ }),

/***/ "./public/js/product.js":
/*!******************************!*\
  !*** ./public/js/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductManager: () => (/* binding */ ProductManager)\n/* harmony export */ });\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./public/js/cart.js\");\n// public/js/product.js\n\n\n\nconst ProductManager = {\n\tproductsPerPage: 6, // Vous pouvez augmenter cette valeur si nécessaire\n\tcurrentPage: 1,\n\n\tasync loadMoreProducts() {\n\t\tthis.currentPage++;\n\t\ttry {\n\t\t\tconst response = await fetch(`/catalogue?page=${this.currentPage}`, {\n\t\t\t\theaders: {\n\t\t\t\t\tAccept: \"application/json\",\n\t\t\t\t},\n\t\t\t});\n\n\t\t\tif (!response.ok) {\n\t\t\t\tthrow new Error(\"Erreur lors du chargement des produits\");\n\t\t\t}\n\n\t\t\tconst data = await response.json();\n\t\t\tconst container = document.getElementById(\"product-container\");\n\n\t\t\t// Ajouter seulement les nouveaux produits\n\t\t\tfor (const product of data.products) {\n\t\t\t\tconst card = _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.createProductCard(product);\n\t\t\t\tcontainer.appendChild(card);\n\t\t\t}\n\n\t\t\t// Cacher le bouton si la dernière page est atteinte\n\t\t\tif (this.currentPage >= data.totalPages) {\n\t\t\t\tdocument.getElementById(\"load-more\").style.display = \"none\";\n\t\t\t}\n\t\t} catch (error) {\n\t\t\tconsole.error(\"Erreur lors du chargement des produits :\", error);\n\t\t}\n\t},\n\n\tasync updateFilters() {\n\t\t// Réinitialiser la page actuelle\n\t\tthis.currentPage = 1;\n\n\t\tconst characteristicSelect = document.getElementById(\"characteristic\");\n\t\tconst priceRange = document.getElementById(\"price-range\");\n\t\tconst sortOrder = document.getElementById(\"sort-order\");\n\t\tconst showLatest = document.getElementById(\"show-latest\");\n\n\t\tconst selectedCharacteristic = characteristicSelect.value;\n\t\tconst maxPrice = Number.parseInt(priceRange.value);\n\t\tconst selectedSortOrder = sortOrder.value;\n\t\tconst selectedShowLatest = showLatest.value;\n\n\t\ttry {\n\t\t\t// Mettre à jour l'URL avec les paramètres de filtre\n\t\t\tconst response = await fetch(\n\t\t\t\t`/catalogue?page=1&characteristic=${encodeURIComponent(selectedCharacteristic)}&maxPrice=${maxPrice}&sortOrder=${selectedSortOrder}&showLatest=${selectedShowLatest}`,\n\t\t\t\t{\n\t\t\t\t\theaders: {\n\t\t\t\t\t\tAccept: \"application/json\",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t);\n\n\t\t\tif (!response.ok) {\n\t\t\t\tthrow new Error(\"Erreur lors de la mise à jour des filtres\");\n\t\t\t}\n\n\t\t\tconst data = await response.json();\n\n\t\t\t// Vider le conteneur avant d'ajouter les nouveaux produits\n\t\t\tconst container = document.getElementById(\"product-container\");\n\t\t\tcontainer.innerHTML = \"\";\n\n\t\t\t// Ajouter les produits filtrés\n\t\t\tfor (const product of data.products) {\n\t\t\t\tconst card = _cart_js__WEBPACK_IMPORTED_MODULE_0__.Cart.createProductCard(product);\n\t\t\t\tcontainer.appendChild(card);\n\t\t\t}\n\n\t\t\tconst loadMoreButton = document.getElementById(\"load-more\");\n\t\t\tif (data.currentPage < data.totalPages) {\n\t\t\t\tloadMoreButton.style.display = \"block\";\n\t\t\t} else {\n\t\t\t\tloadMoreButton.style.display = \"none\";\n\t\t\t}\n\n\t\t\tconst noResults = document.getElementById(\"no-results\");\n\t\t\tnoResults.style.display = data.products.length === 0 ? \"block\" : \"none\";\n\t\t} catch (error) {\n\t\t\tconsole.error(\"Erreur lors de la mise à jour des filtres :\", error);\n\t\t}\n\t},\n\n\tinitializeFilters() {\n\t\tconst characteristicSelect = document.getElementById(\"characteristic\");\n\t\tconst priceRange = document.getElementById(\"price-range\");\n\t\tconst priceValue = document.getElementById(\"price-value\");\n\t\tconst sortOrder = document.getElementById(\"sort-order\");\n\t\tconst showLatest = document.getElementById(\"show-latest\");\n\t\tconst resetButton = document.getElementById(\"reset-filters\");\n\n\t\tif (characteristicSelect && priceRange && sortOrder && showLatest) {\n\t\t\tcharacteristicSelect.addEventListener(\"change\", () =>\n\t\t\t\tthis.updateFilters(),\n\t\t\t);\n\t\t\tpriceRange.addEventListener(\"input\", function () {\n\t\t\t\tpriceValue.textContent = this.value;\n\t\t\t\tProductManager.updateFilters();\n\t\t\t});\n\t\t\tsortOrder.addEventListener(\"change\", () => this.updateFilters());\n\t\t\tshowLatest.addEventListener(\"change\", () => this.updateFilters());\n\t\t\tpriceValue.textContent = priceRange.value;\n\t\t\tthis.updateFilters();\n\t\t}\n\n\t\tif (resetButton) {\n\t\t\tresetButton.addEventListener(\"click\", () => {\n\t\t\t\tcharacteristicSelect.value = \"all\";\n\t\t\t\tpriceRange.value = priceRange.max;\n\t\t\t\tpriceValue.textContent = priceRange.max;\n\t\t\t\tsortOrder.value = \"asc\";\n\t\t\t\tshowLatest.value = \"all\";\n\t\t\t\tthis.updateFilters();\n\t\t\t});\n\t\t}\n\t},\n};\n\n\n//# sourceURL=webpack://ocoffee/./public/js/product.js?");

/***/ }),

/***/ "./public/js/ui.js":
/*!*************************!*\
  !*** ./public/js/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\nconst UI = {\n\tinitializeHeader() {\n\t\tconst header = document.querySelector(\"header\");\n\t\tsetTimeout(() => {\n\t\t\theader.classList.add(\"header-visible\");\n\t\t}, 100);\n\t},\n\n\tinitializeMenu() {\n\t\tconst userToggle = document.getElementById(\"user-toggle\");\n\t\tconst userSubmenu = document.querySelector(\".user-submenu\");\n\n\t\tif (userToggle && userSubmenu) {\n\t\t\t// Ajout de log pour vérifier si les éléments sont trouvés\n\t\t\tconsole.log(\"userToggle trouvé :\", userToggle);\n\t\t\tconsole.log(\"userSubmenu trouvé :\", userSubmenu);\n\n\t\t\tuserToggle.addEventListener(\"click\", (e) => {\n\t\t\t\te.preventDefault();\n\n\t\t\t\t// Ajout de log pour vérifier si l'événement est déclenché\n\t\t\t\tconsole.log(\"Click sur userToggle\");\n\n\t\t\t\t// Vérification et affichage du sous-menu\n\t\t\t\tconst isExpanded = userToggle.getAttribute(\"aria-expanded\") === \"true\";\n\t\t\t\tuserToggle.setAttribute(\"aria-expanded\", !isExpanded);\n\n\t\t\t\tuserSubmenu.classList.toggle(\"show\");\n\n\t\t\t\t// Ajout de log pour vérifier l'état du sous-menu\n\t\t\t\tconsole.log(\n\t\t\t\t\t\"Sous-menu visible :\",\n\t\t\t\t\tuserSubmenu.classList.contains(\"show\"),\n\t\t\t\t);\n\t\t\t});\n\t\t}\n\n\t\t// Fermeture du sous-menu lorsque l'utilisateur clique en dehors\n\t\tdocument.addEventListener(\"click\", (e) => {\n\t\t\tif (userSubmenu && userToggle) {\n\t\t\t\tif (!userToggle.contains(e.target) && !userSubmenu.contains(e.target)) {\n\t\t\t\t\tuserSubmenu.classList.remove(\"show\");\n\t\t\t\t\tuserToggle.setAttribute(\"aria-expanded\", \"false\");\n\n\t\t\t\t\t// Log pour vérifier que le sous-menu se ferme\n\t\t\t\t\tconsole.log(\"Sous-menu fermé\");\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t},\n};\n\n\n//# sourceURL=webpack://ocoffee/./public/js/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.js");
/******/ 	
/******/ })()
;