DROP DATABASE IF EXISTS beerby;

CREATE DATABASE beerby;

USE beerby;

-- -- ---
  -- -- Table 'breweries'
  -- -- 
  -- -- ---

/*DROP TABLE IF EXISTS `breweries`;*/

CREATE TABLE breweries (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  avg_rating VARCHAR(6),
  review_count INTEGER,
  id_ba INTEGER,
  id_bdb INTEGER,
  street VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(3),
  zip INTEGER, 
  PRIMARY KEY (id)
);

CREATE TABLE beers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  rating INTEGER,
  abv VARCHAR(10),
  ibu VARCHAR(10),
  id_ba INTEGER,
  id_bdb INTEGER,
  id_breweries INTEGER,
  PRIMARY KEY (id)
);


-- ---
-- Test Data
-- ---

INSERT INTO `breweries` (`name`,`street`,`avg_rating`,`review_count`,`id_ba`) VALUES
('Jester King Brewery','13005 Fitzhugh Road',4.08,19540,24018),
('Oddwood Ales','3108 Manor Rd',3.96,167,37083),
('St. Elmo Brewing Co.','440 E St Elmo Rd',3.93,99,47537),
('(512) Brewing Company','407 Radam Ln',3.88,2816,17863),
('Draught House Pub & Brewery','4112 Medical Parkway',3.87,139,4858),
('Celis Brewery','10001 Metric Blvd',3.84,67,49549),
('Pinthouse Pizza South Austin','4236 S Lamar Blvd',3.8,611,31066),
('Austin Beerworks','3009 Industrial Terrace',3.8,2466,25667),
('Pinthouse Pizza Craft Brewpub','4729 Burnet Rd',3.8,611,31066),
('Adelbert\'s Brewery','2314 Rutland Drive Suite #100',3.8,1215,27934),
('Oasis Texas Brewing Company','6550 Comanche Trail',3.79,733,35016),
('North by Northwest Restaurant & Brewery - South','5701 W Slaughter Ln',3.79,13,37372),
('Lazarus Brewing Company','1902 E 6th St',3.76,69,48264),
('Hi Sign Brewing','1201 Bastrop Hwy',3.76,57,48409),
('Friends & Allies Brewing','979 Springdale Rd',3.71,73,44036),
('Last Stand Brewing Company','12345 Pauls Valley Rd',3.69,144,39248),
('Blue Owl Brewing','2400 East Cesar Chavez St #300',3.68,322,35964),
('Hops and Grain Brewery','507 Calles St',3.67,1518,27696),
('North by Northwest Restaurant & Brewery','10010 Capital Of TX Hwy N',3.67,533,2642),
('Zilker Brewing Co.','1701 E 6th St',3.63,208,40217),
('Kamala Brewing / Whip In','1950 S. Interstate 35',3.63,87,1418),
('Austin Beer Garden Brewing Co.','1305 W Oltorf St',3.59,205,32581),
('4th Tap Brewing Co-op','10615 Metric Blvd',3.59,149,43107),
('Black Star Co-op Pub & Brewery','7020 Easy Wind Drive',3.58,316,24381),
('Uncle Billy\'s Brew & Que','1530 Barton Springs Rd.',3.57,373,16088),
('Independence Brewing Co.','3913 Todd Ln',3.56,2157,10284),
('Circle Brewing Company','2340 W Braker Ln.',3.53,327,24825),
('Naughty Brewing Co.','2314 Rutland Dr',3.52,19,33668),
('Infamous Brewing Company','4601 Weletka Dr Ste 200',3.51,421,31874),
('South Austin Brewery','415 E St Elmo Rd',3.49,235,28397),
('Oskar Blues Brewery','10420 Metric Blvd',3.48,16,46686),
('Resignation Brewery','503 Neches St',3.41,903,32990),
('Thirsty Planet Brewing Company','11160 Circle Drive',3.39,457,23090),
('Guns & Oil Brewing Co.','807 E 4th St',3.35,85,36084);



/*  Execute this file from the command line by typing:
 *    mysql -u[username] < server/schema.sql
 *  to create the database and the tables.*/
