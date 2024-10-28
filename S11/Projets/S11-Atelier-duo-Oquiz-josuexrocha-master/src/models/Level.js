const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

const TABLE_NAME = 'level';

/**
 * Représente un niveau de difficulté.
 * @extends Model
 */
class Level extends Model {}

Level.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    sequelize,
    tableName: TABLE_NAME,
  }
);

module.exports = Level;