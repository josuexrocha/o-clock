const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize');

/**
 * Représente un role pour un utilisateur.
 * @extends Model
 */
class Role extends Model {}

Role.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  permissions: {
    type: DataTypes.JSON,
    defaultValue: {}
  }
}, {
  sequelize,
  tableName: 'role'
});

module.exports = Role;