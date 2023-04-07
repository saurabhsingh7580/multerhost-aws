-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: multer
-- ------------------------------------------------------
-- Server version	10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `multer`
--

DROP TABLE IF EXISTS `multer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `salary` varchar(20) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `dept` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multer`
--

LOCK TABLES `multer` WRITE;
/*!40000 ALTER TABLE `multer` DISABLE KEYS */;
INSERT INTO `multer` VALUES (1,'saurabh','satna','3000','uploads\\image_1677130692585.png',NULL),(2,'sanjeev','asatna','23456','uploads\\image_1678618983760.png','hr'),(3,'ayush','satna','10000','uploads\\image_1678619052665.webp','Hr'),(4,'Deepka','bhopal','12345','uploads\\image_1678619123780.jpeg','Manegar'),(5,'Raju','bhopal','12345','uploads\\image_1678619147304.jpeg','Clerk'),(6,'Lucky','satna','123456','uploads\\image_1678619187638.jpeg','CEO'),(7,'saurabh','satna','12345','uploads\\image_1679570025317.mp4','clerk'),(8,'saurabh','satna','123456','uploads\\image_1679570079151.jpg','clerk'),(9,'choru','saurabh','1234','uploads\\image_1679570440287.png','sadfjkshfs'),(10,'ravi','rewa','1234','uploads\\image_1679573971137.png','dsfsafsf');
/*!40000 ALTER TABLE `multer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multer_new`
--

DROP TABLE IF EXISTS `multer_new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multer_new` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `City` varchar(30) DEFAULT NULL,
  `Image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multer_new`
--

LOCK TABLES `multer_new` WRITE;
/*!40000 ALTER TABLE `multer_new` DISABLE KEYS */;
INSERT INTO `multer_new` VALUES (1,'saurabh','satna','uploads\\Image1677132342314.jpg'),(2,'saurabh','satna','uploads\\Image1677132549564.jpg'),(3,'pooja','bhopal','uploads\\Image1678641497384.jpg');
/*!40000 ALTER TABLE `multer_new` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 15:27:45
