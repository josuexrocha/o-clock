export const UI = {
	initializeHeader() {
		const header = document.querySelector("header");
		setTimeout(() => {
			header.classList.add("header-visible");
		}, 100);
	},

	initializeMenu() {
		const userToggle = document.getElementById("user-toggle");
		const userSubmenu = document.querySelector(".user-submenu");

		if (userToggle && userSubmenu) {
			// Ajout de log pour vérifier si les éléments sont trouvés
			console.log("userToggle trouvé :", userToggle);
			console.log("userSubmenu trouvé :", userSubmenu);

			userToggle.addEventListener("click", (e) => {
				e.preventDefault();

				// Ajout de log pour vérifier si l'événement est déclenché
				console.log("Click sur userToggle");

				// Vérification et affichage du sous-menu
				const isExpanded = userToggle.getAttribute("aria-expanded") === "true";
				userToggle.setAttribute("aria-expanded", !isExpanded);

				userSubmenu.classList.toggle("show");

				// Ajout de log pour vérifier l'état du sous-menu
				console.log(
					"Sous-menu visible :",
					userSubmenu.classList.contains("show"),
				);
			});
		}

		// Fermeture du sous-menu lorsque l'utilisateur clique en dehors
		document.addEventListener("click", (e) => {
			if (userSubmenu && userToggle) {
				if (!userToggle.contains(e.target) && !userSubmenu.contains(e.target)) {
					userSubmenu.classList.remove("show");
					userToggle.setAttribute("aria-expanded", "false");

					// Log pour vérifier que le sous-menu se ferme
					console.log("Sous-menu fermé");
				}
			}
		});
	},
};
