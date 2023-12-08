const controllers = require('./controllers');
// Router
const router = require('express').Router();

// connect routes
router.get('/products', controllers.products.getProducts);
router.get('/products/:Product_id', controllers.products.getProduct);
router.get('/products/:product_id/styles', controllers.products.getStyles);
router.get('/products/:product_id/related', controllers.products.getRelated);

module.exports = router;