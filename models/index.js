const Tag = require('./Tag');
const ProductTags = require('./ProductTags');
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
    through: ProductTags,
    foreignKey: 'tag_id'
});

Tag.belongsToMany(Product, {
    through: ProductTags,
    foreignKey: 'product_id'
});

module.exports = { Product, Category, Tag, ProductTags };