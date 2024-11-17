const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./user');

const Routine = sequelize.define('Routine', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  routine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true,
  tableName: 'routines',
});

Routine.belongsTo(User, { 
    foreignKey: 'userId' ,
    as: "users"
});
User.hasMany(Routine, { 
    foreignKey: 'userId', 
    as: "routines",
    onDelete: 'CASCADE' 
});

module.exports = Routine;
