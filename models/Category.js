const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model{}

// Define table columns and configs
Category.init(
    {
        // Table column definitions go here

        // Define an id column
        id: {
            // Use the special Sequelize DataTypes object provide what type of data
            type: DataTypes.INTEGER,
            // This is the equivalent of SQL's 'NOT NULL'
            allowNull: false,
            // Instruct that this is the Primary Key
            primaryKey: true,
            // Turn on auto increment
            autoIncrement: true
        },
        // Define username column
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        // Pass in imported sequelize connection
        sequelize,
        // Don't automatically create created at/updated at timestamps
        timestamps: false,
        // Don't pluralize name of database table
        freezeTableName: true,
        // User underscores instead of camel casing
        underscored: true,
        // Make it so our model name stays lowercase in db
        modelname: 'category'
    }
);

module.exports = Category;