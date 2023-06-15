// Define the Object model
// Call sequelize
const { DataTypes } = require('sequelize');

// Exporting arrow function expression to the external
module.exports = (Sequelize) => {
    return Sequelize.define(
        'GlobalStat', // Model name
        // a list of variables 
        {
            id : {
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true, 
            },

            cc: {
                type: DataTypes.CHAR(2),
                allowNull: false,       
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,       
            },
            confirmed: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
            death: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
            released: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
            tested: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
            testing: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
            negative: {
                type: DataTypes.INTEGER,
                allowNull: false,       
            },
        },

        {
            Sequelize,
            tableName: 'GlobalStat',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    field: [{ name: 'id' }],
                },
                {
                    name: 'ccWithDate',
                    unique: true,
                    field: [{ name: 'cc' }],[{ name: 'date' }],
                },

            ],
            timestamps: false,
        },
    );
};
