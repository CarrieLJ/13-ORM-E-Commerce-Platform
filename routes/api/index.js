const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Category.hasMany(Product);

// Product.belongsTo(Category);
// //add fk relation category_id

// Product.belongsToMany(Tag);

// Tag.belongsToMany(Product);


module.exports = router;
