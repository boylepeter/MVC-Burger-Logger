
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
);
