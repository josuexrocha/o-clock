const dataMapper = require("../database/dataMapper");

const mainController = {
  async renderHomePage(req, res) {
    try {

      const articles = await dataMapper.getLatestProducts();
      res.render("pages/home", { articles });

    } catch (error) {
      console.error(error);
      res.status(500).render("pages/error");
    }
  },

  async renderCatalogPage(req, res) {
    try {
      const articles = await dataMapper.getAllAvailableProducts();
      const categories = await dataMapper.getAllCategories();
      res.render("pages/catalog", { articles, categories });

    } catch (error) {
      console.error(error);
      res.status(500).render("pages/error");
    }
  },

  async renderCoffeeDetailsPage(req, res, next) {
    try {

      const articleId = parseInt(req.params.id);
      if (isNaN(articleId)) { return next(); }
  
      const article = await dataMapper.getProductById(articleId);
      if (! article) { return next(); }
  
      res.render("pages/article", { article });

    } catch (error) {
      console.error(error);
      res.status(500).render("pages/error");
    }
  },

  async renderNotFoundPage(_, res) {
    res.status(404).render("pages/not-found");
  }
};

module.exports = mainController;
