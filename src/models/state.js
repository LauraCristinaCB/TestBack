const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/connection');

const State = sequelize.define('State', {
    // Model attributes are defined here
    state_name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
    },
    capital: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
    },
    state_bird: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
    },
});

module.exports = {
    State
}

