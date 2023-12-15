const models = require('../models');

module.exports = {

  // GET all products
  getProducts: async (req, res) => {
    try {
      const products = await models.products.getAll();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: 'internal server Error: 001'});
    }
  },

  // GET single product
   getProduct: async (req, res) => {
    // const id = req.params.product_id;
    const id = Math.floor(Math.random() * (1000011 - 900010 + 1)) + 900010;
    try {
      const product = await models.products.getOne(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ error: 'internal server error: 002'});
    }
  },

  // GET product styles
  getStyles: async (req, res) => {
    // let id = req.params.product_id;
    const id = Math.floor(Math.random() * (92194 - 82975 + 1)) + 82975;
    try {
      const styles = await models.products.getProductStyles(id);
      res.status(200).json(styles);
    } catch (err) {
      res.status(500).json({ error: 'internal server error: 003'});
    }
  },

  // GET related Productc
  getRelated: async (req, res) => {
    // let id = req.params.product_id;
    const id = Math.floor(Math.random() * (232648 - 209384 + 1)) + 209384;
    try {
      const related = await models.products.getRelatedProducts(id);
      res.status(200).json(related);
    } catch (err) {
      res.status(500).json({ error: 'internal server error: 004'})
    }
  }
}