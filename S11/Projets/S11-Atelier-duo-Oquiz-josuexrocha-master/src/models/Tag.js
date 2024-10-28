const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

const TABLE_NAME = 'tag';

/**
 * Représente un tag pour catégoriser les quiz.
 * @extends Model
 */
class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
  },
  {
    sequelize,
    tableName: TABLE_NAME,
  }
);

module.exports = Tag;