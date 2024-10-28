const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

const TABLE_NAME = 'answer';

/**
 * Représente une réponse à une question.
 * @extends Model
 */
class Answer extends Model {}

Answer.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
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

module.exports = Answer;