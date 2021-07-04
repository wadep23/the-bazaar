const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model{}

// Define table columns and configs
Product.init(
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
        // Define name column
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            // If allowNull is set to false, we can run our data through a validator
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 10,
            validate: {
                // Sets password length to at least four characters
                isInteger: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'category',
                key: 'id'
            }
        }
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
        modelname: 'product'
    }
);

module.exports = Product;