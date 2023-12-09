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
      console.log(id)
      const query1 = `SELECT * FROM products WHERE id = ${id}`; // TO DO:
      const query2 = `SELECT f.feature_name, f.value FROM features AS f WHERE f.product_id = ${id}`;
// const query = `SELECT products.id, products.name, products.slogan, products.description, products.category, products.default_price, features.feature_name, features.value FROM products JOIN features ON products.id = features.product_id WHERE products.id = ${id}`;
      db.query(query1, (err1, results1) => {
        if(err1) {
          reject(err1);
        } else {
          if(results1.length !== 1) {
            reject();
          }
          db.query(query2, (err2, results2) => {
            if(err2) {
              reject(err2);
            } else {
              resolve({ ...results1[0], features: results2 });
            }
          });
        }
      });
    });
  },

  getProductStyles: (id) => {
    return new Promise((resolve, reject) => {
      const query1 = `SELECT * FROM styles WHERE styles.product_id = ${id}`; // TO DO:
      db.query(query1, (err1, results1) => {
        if(err1) {
          reject(err1);
        }
        if(results1.length === 0) {
          resolve({});
        }
        const style = results1.map(result => result.id).join(",");
        const query2 = `SELECT * FROM photos WHERE photos.style_id IN (${style})`;
        db.query(query2, (err2, results2) => {
          if(err2) {
            reject(err2);
          }
          const query3 = `SELECT * FROM skus WHERE skus.style_id IN (${style})`;
          db.query(query3, (err3, results3) => {
            if(err3) {
              reject(err3);
            }
            // map through
            resolve({results1, results2, results3})
        });
      });
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

// SELECT product.id AS p.id, p.name, p.slogan, p.description, p.category, p.default_price,
// features.feature AS f.feature, f.value FROM products JOIN features ON product.id = features.product_id WHERE product.id = 11;