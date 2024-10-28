const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
  development: {
    url: process.env.DB_URI,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    dialectOptions: {
      ssl: false
    }
  },
  production: {
    url: process.env.DB_URI,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    dialectOptions: {
      ssl: true
    }
  }
};
