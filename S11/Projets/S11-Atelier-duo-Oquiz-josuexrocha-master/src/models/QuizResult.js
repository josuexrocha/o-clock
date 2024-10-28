const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

const TABLE_NAME = 'quiz_results';

/**
 * Représente le résultat d'un quiz pour un utilisateur.
 * @extends Model
 */
class QuizResult extends Model {}

QuizResult.init(
  {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    completed_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: TABLE_NAME,
  }
);

module.exports = QuizResult;