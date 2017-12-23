-- MySQL dump 10.13  Distrib 5.7.20, for osx10.13 (x86_64)
--
-- Host: localhost    Database: beerby
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `beerby`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `beerby` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `beerby`;

--
-- Table structure for table `beers`
--

DROP TABLE IF EXISTS `beers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `abv` varchar(10) DEFAULT NULL,
  `ibu` varchar(10) DEFAULT NULL,
  `id_ba` int(11) DEFAULT NULL,
  `id_bdb` int(11) DEFAULT NULL,
  `id_breweries` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beers`
--

LOCK TABLES `beers` WRITE;
/*!40000 ALTER TABLE `beers` DISABLE KEYS */;
/*!40000 ALTER TABLE `beers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `breweries`
--

DROP TABLE IF EXISTS `breweries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `breweries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `avg_rating` varchar(6) DEFAULT NULL,
  `review_count` int(11) DEFAULT NULL,
  `id_ba` int(11) DEFAULT NULL,
  `id_bdb` int(11) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(3) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breweries`
--

LOCK TABLES `breweries` WRITE;
/*!40000 ALTER TABLE `breweries` DISABLE KEYS */;
INSERT INTO `breweries` VALUES (1,'Jester King Brewery','4.08',19540,24018,NULL,'13005 Fitzhugh Road',NULL,NULL,NULL),(2,'Oddwood Ales','3.96',167,37083,NULL,'3108 Manor Rd',NULL,NULL,NULL),(3,'St. Elmo Brewing Co.','3.93',99,47537,NULL,'440 E St Elmo Rd',NULL,NULL,NULL),(4,'(512) Brewing Company','3.88',2816,17863,NULL,'407 Radam Ln',NULL,NULL,NULL),(5,'Draught House Pub & Brewery','3.87',139,4858,NULL,'4112 Medical Parkway',NULL,NULL,NULL),(6,'Celis Brewery','3.84',67,49549,NULL,'10001 Metric Blvd',NULL,NULL,NULL),(7,'Pinthouse Pizza South Austin','3.8',611,31066,NULL,'4236 S Lamar Blvd',NULL,NULL,NULL),(8,'Austin Beerworks','3.8',2466,25667,NULL,'3009 Industrial Terrace',NULL,NULL,NULL),(9,'Pinthouse Pizza Craft Brewpub','3.8',611,31066,NULL,'4729 Burnet Rd',NULL,NULL,NULL),(10,'Adelbert\'s Brewery','3.8',1215,27934,NULL,'2314 Rutland Drive Suite #100',NULL,NULL,NULL),(11,'Oasis Texas Brewing Company','3.79',733,35016,NULL,'6550 Comanche Trail',NULL,NULL,NULL),(12,'North by Northwest Restaurant & Brewery - South','3.79',13,37372,NULL,'5701 W Slaughter Ln',NULL,NULL,NULL),(13,'Lazarus Brewing Company','3.76',69,48264,NULL,'1902 E 6th St',NULL,NULL,NULL),(14,'Hi Sign Brewing','3.76',57,48409,NULL,'1201 Bastrop Hwy',NULL,NULL,NULL),(15,'Friends & Allies Brewing','3.71',73,44036,NULL,'979 Springdale Rd',NULL,NULL,NULL),(16,'Last Stand Brewing Company','3.69',144,39248,NULL,'12345 Pauls Valley Rd',NULL,NULL,NULL),(17,'Blue Owl Brewing','3.68',322,35964,NULL,'2400 East Cesar Chavez St #300',NULL,NULL,NULL),(18,'Hops and Grain Brewery','3.67',1518,27696,NULL,'507 Calles St',NULL,NULL,NULL),(19,'North by Northwest Restaurant & Brewery','3.67',533,2642,NULL,'10010 Capital Of TX Hwy N',NULL,NULL,NULL),(20,'Zilker Brewing Co.','3.63',208,40217,NULL,'1701 E 6th St',NULL,NULL,NULL),(21,'Kamala Brewing / Whip In','3.63',87,1418,NULL,'1950 S. Interstate 35',NULL,NULL,NULL),(22,'Austin Beer Garden Brewing Co.','3.59',205,32581,NULL,'1305 W Oltorf St',NULL,NULL,NULL),(23,'4th Tap Brewing Co-op','3.59',149,43107,NULL,'10615 Metric Blvd',NULL,NULL,NULL),(24,'Black Star Co-op Pub & Brewery','3.58',316,24381,NULL,'7020 Easy Wind Drive',NULL,NULL,NULL),(25,'Uncle Billy\'s Brew & Que','3.57',373,16088,NULL,'1530 Barton Springs Rd.',NULL,NULL,NULL),(26,'Independence Brewing Co.','3.56',2157,10284,NULL,'3913 Todd Ln',NULL,NULL,NULL),(27,'Circle Brewing Company','3.53',327,24825,NULL,'2340 W Braker Ln.',NULL,NULL,NULL),(28,'Naughty Brewing Co.','3.52',19,33668,NULL,'2314 Rutland Dr',NULL,NULL,NULL),(29,'Infamous Brewing Company','3.51',421,31874,NULL,'4601 Weletka Dr Ste 200',NULL,NULL,NULL),(30,'South Austin Brewery','3.49',235,28397,NULL,'415 E St Elmo Rd',NULL,NULL,NULL),(31,'Oskar Blues Brewery','3.48',16,46686,NULL,'10420 Metric Blvd',NULL,NULL,NULL),(32,'Resignation Brewery','3.41',903,32990,NULL,'503 Neches St',NULL,NULL,NULL),(33,'Thirsty Planet Brewing Company','3.39',457,23090,NULL,'11160 Circle Drive',NULL,NULL,NULL),(34,'Guns & Oil Brewing Co.','3.35',85,36084,NULL,'807 E 4th St',NULL,NULL,NULL);
/*!40000 ALTER TABLE `breweries` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-23 11:59:48
