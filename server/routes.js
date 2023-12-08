const controllers = require('./controllers');
// Router
const router = require('express').Router();

// connect routes
router.get('/products', controllers.products.get);
