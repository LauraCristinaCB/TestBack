const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/connection');

const client = sequelize.define('Client', {
    // Model attributes are defined here
    name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
    },
});

module.exports = {
    client
}

