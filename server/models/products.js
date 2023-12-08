const db = require('../db');

module.exports = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      var getQuery = 'select * from products limit 5';
      db.query(getQuery, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getOne: (id) => {
    return new Promise((resolve, reject) => {
      const query = `select * from products where id = ${id} limit 1`; // TO DO:
      db.query(query, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getProductStyles: (id) => {
    return new Promise((resolve, reject) => {
      const query = ''; // TO DO:
      db.query(query, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getRelatedProducts: (id) => {
    return new Promise((resolve, reject) => {
      const query = ''; // TO DO:
      db.query(query, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

};