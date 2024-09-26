const articles = require('../data/articles.json');

exports.getAllArticles = () => {
  return articles;
};

exports.getArticleById = (id) => {
  return articles.find(article => article.id === id);
};

exports.getArticlesByCategory = (category) => {
  return articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
};
