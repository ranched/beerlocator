DROP DATABASE IF EXISTS test;

CREATE DATABASE beerby;

USE beerby;

CREATE TABLE beers (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  rating int,
  abv VARCHAR(10),
  ibu VARCHAR(10),
  id_ba int,
  id_bdb int,
  id_breweries int,
  FOREIGN KEY (id_breweries) REFERENCES breweries(id),
  PRIMARY KEY (id)
);

CREATE TABLE breweries (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  id_ba int,
  id_bdb int,
  street VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(3),
  zip int, 
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
