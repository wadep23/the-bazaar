const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Product = require('./Product');
const Category = require('./Category');
const { belongsToMany } = require('./Tag');

Product.belongsTo(Category,{
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'product_id'
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'product_id'
});

module.exports = { Product, Category, Tag, ProductTag };