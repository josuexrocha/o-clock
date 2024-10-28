const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URI, {
  define: {
    underscored: true,
  },
  logging: process.env.NODE_ENV !== 'production' ? console.log : false,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production'
  }
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;
