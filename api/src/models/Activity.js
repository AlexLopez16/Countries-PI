const { DataTypes, DATE } = require('sequelize');

const ActivitySchema = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM(['Summer', 'Fall', 'Winter', 'Spring'])
        }
    }, { timestamps: false })
}

module.exports = ActivitySchema;