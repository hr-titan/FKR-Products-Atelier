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
      const query1 = `SELECT * FROM products WHERE id = ${id}`;
      const query2 = `SELECT f.feature, f.value FROM features AS f WHERE f.product_id = ${id}`;
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
     const query1 = `SELECT id AS style_id, product_id, name, sale_price, original_price, is_default AS "default?" FROM styles WHERE product_id = ${id}`;
      db.query(query1, (err1, results1) => {
        if(err1) {
          reject(err1);
        }
        if(results1.length === 0) {
          resolve({product_id: id ,results: []});
        }
        const styleIDs = results1.map(result => result.style_id).join(",");
        const query2 = `SELECT * FROM photos WHERE photos.style_id IN (${styleIDs})`;
        db.query(query2, (err2, results2) => {
          if(err2) {
            reject(err2);
          }
          const query3 = `SELECT * FROM skus WHERE skus.style_id IN (${styleIDs})`;
          db.query(query3, (err3, results3) => {
            if(err3) {
              reject(err3);
            }
            console.log('::',results1)
            // map through results1
            let styles = results1.map((style) => {
              style['photos'] = results2.filter((photo) => photo.style_id === style.style_id).map((p) => ({thumbnail_url: p.thumbnail_url, url: p.url}));
              style['skus'] = {}
              let skus = results3.filter((sku) => sku.style_id === style.style_id).forEach((s) => style['skus'][s.id] = {size: s.size, quantity: s.quantity});
              return {...style};
            });
            resolve({ product_id: id, results: styles})
        });
      });
    });
  });
},

  getRelatedProducts: (id) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM relatedProducts WHERE product_id = ${id}`;
      db.query(query, (err, results) => {
        if(err) {
          reject(err);
        } else {
          const related = results.map((res) => res.related_id);
          resolve(related);
        }
      });
    });
  }

};
