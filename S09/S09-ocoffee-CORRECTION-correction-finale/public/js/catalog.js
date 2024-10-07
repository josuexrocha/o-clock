initSeeMoreProductsButton();
initCategoryFilter();


function initSeeMoreProductsButton() {
  const seeAllProductsButton = document.getElementById("see-all-products-button");
  seeAllProductsButton.addEventListener("click", showAllSelectedProducts);  
}

function initCategoryFilter() {
  const categoryDrowndown = document.getElementById("category-dropdown");
  categoryDrowndown.addEventListener("change", (event) => {
    const categoryId = event.target.value;
    
    // First, display all articles (in case they were hidden before)
    const allArticles = document.querySelectorAll("article");
    allArticles.forEach(article => article.classList.remove("hidden"));

    if (categoryId === "*") { return; } // If users wants to display all produits, stop here
    
    // Otherwise, hide articles that are not in the selected category
    allArticles.forEach(article => {
      if (article.dataset.categoryId !== categoryId) {
        article.classList.add("hidden");
      }
    });

    // Then, remove the "See more" button
    showAllSelectedProducts();
  });
}

function showAllSelectedProducts() {
  const articlesList = document.getElementById("articles-list");
  articlesList.classList.remove("only-display-3-articles");

  const seeAllProductsButton = document.getElementById("see-all-products-button");
  if (! seeAllProductsButton) { return; }
  seeAllProductsButton.remove();
}
