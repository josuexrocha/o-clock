const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');
const TABLE_NAME = 'user';

/**
 * Représente un utilisateur dans le système.
 * @extends Model
 */
class User extends Model {
  /**
   * Obtient le nom complet de l'utilisateur.
   * @returns {string} Le nom complet de l'utilisateur.
   */
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  static associate(models) {
    User.belongsTo(models.Role, { foreignKey: 'role_id' });
    User.hasMany(models.Quiz);
    User.hasMany(models.QuizResult);
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 100] // Au moins 6 caractères
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: TABLE_NAME,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  }
);

module.exports = User;