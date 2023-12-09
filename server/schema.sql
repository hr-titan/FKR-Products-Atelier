
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE atelierProduct;
 USE atelierProduct;

CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  slogan VARCHAR(255),
  description TEXT,
  category VARCHAR(255),
  default_price INT
 );

  CREATE TABLE IF NOT EXISTS relatedProducts (
    id INT,
    product_id INT,
    related_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (related_id) REFERENCES products(id)
  );

  CREATE TABLE IF NOT EXISTS features (
    id INT PRIMARY KEY,
    product_id INT,
    feature_name VARCHAR(255),
    value VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES products(id)
  );


  CREATE TABLE IF NOT EXISTS styles (
    id INT NOT NULL PRIMARY KEY,
    product_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    sale_price INT NOT NULL,
    original_price INT NOT NULL,
    is_default BOOLEAN NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );

  CREATE TABLE IF NOT EXISTS photos (
    id INT NOT NULL PRIMARY KEY,
    style_id INT NOT NULL,
    url TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL,
    FOREIGN KEY (style_id) REFERENCES styles(id)
  );

  CREATE TABLE IF NOT EXISTS skus (
    id INT NOT NULL PRIMARY KEY,
    style_id INT NOT NULL,
    size VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (style_id) REFERENCES styles(id)
 );

