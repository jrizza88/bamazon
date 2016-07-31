CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT, 
productName VARCHAR(50) NOT NULL,
departmentName VARCHAR(50) NOT NULL,
price INTEGER,
stockQuantity INTEGER,
PRIMARY KEY (id)
);


INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("jetblack flatscreen tv", "technology", 2000, 200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("haxbook notepad", "technology", 950, 90);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("purple tonic keyboard", "technology", 200, 400);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("red haxbook laptop", "technology", 2500, 100);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("art canvas", "art supplies", 150, 150);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("paint brush", "art supplies", 10, 2000);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("colors array set", "art supplies", 75, 1500);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("blue hoodie", "clothing", 80, 700);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("white shorts", "clothing", 60, 300);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("classic snapback hat", "clothing", 35, 475);


