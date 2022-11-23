const { DataTypes } = require('sequelize');

const CountrySchema = (sequelize) => {
    sequelize.define('Country', {
        id: {
            type: DataTypes.STRING(3),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        flag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        continent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subregion: {
            type: DataTypes.STRING
        },
        area: {
            type: DataTypes.INTEGER
        },
        population: {
            type: DataTypes.INTEGER
        }
    }, { timestamps: false })
}

module.exports = CountrySchema;
