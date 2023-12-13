
 USE atelierProduct;

LOAD DATA LOCAL INFILE '../product.csv'
INTO TABLE products
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, name, slogan, description, category, default_price);

LOAD DATA LOCAL INFILE '../related.csv'
INTO TABLE relatedProducts
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, product_id, related_id);

LOAD DATA LOCAL INFILE '../features.csv'
INTO TABLE features
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, product_id, feature_name, value);

LOAD DATA LOCAL INFILE '../styles.csv'
INTO TABLE styles
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, product_id, name, sale_price, original_price, is_default);

LOAD DATA LOCAL INFILE '../photos.csv'
INTO TABLE photos
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, style_id, url, thumbnail_url);


LOAD DATA LOCAL INFILE '../skus.csv'
INTO TABLE skus
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS -- ignores the  headers
(id, style_id, size, quantity);



-- Execute this file from the command line by typing:
-- mysql -u root < server/dataFiles.sql


