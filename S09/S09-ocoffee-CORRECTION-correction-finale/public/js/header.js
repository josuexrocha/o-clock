initBurgerMenu();

function initBurgerMenu() {
  const menuNavbar = document.getElementById("menu-navbar");
  const menuButton = document.getElementById("menu-button");
  
  menuButton.addEventListener("click", () => {
    menuNavbar.classList.toggle("expanded");
  });
}
