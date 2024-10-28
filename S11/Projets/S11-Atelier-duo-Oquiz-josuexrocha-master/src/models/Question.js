const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

const TABLE_NAME = 'question';

/**
 * Représente une question dans un quiz.
 * @extends Model
 */
class Question extends Model {}

Question.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    anecdote: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    wiki: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        isUrl: true
      }
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: TABLE_NAME,
  }
);

module.exports = Question;