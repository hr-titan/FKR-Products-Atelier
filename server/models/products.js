const db = require('../db');

module.exports = {

  getAll: async () => {
    const query = 'SELECT * FROM products'; // TO DO:
    const res =  await db.query(query);
    return res;
  },

  getOne: async (id) => {
    const query = ''; // TO DO:
    const res = await db.query(query);
    return res;
  },

  getProductStyles: async (id) => {
    const query = ''; // TO DO:
    const res = await db.query(query);
    return res;
  }

  getRelatedProducts: async (id) => {
    const query = ''; // TO DO:
    const res = await db.query(query);
    return res;
  }
}