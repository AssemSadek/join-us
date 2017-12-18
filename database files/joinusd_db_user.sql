CREATE DATABASE  IF NOT EXISTS `joinusd_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `joinusd_db`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: joinusd_db
-- ------------------------------------------------------
-- Server version	5.7.17-log

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `UserName` varchar(30) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Image` text,
  `Bio` text,
  `BirthDate` date DEFAULT NULL,
  `DateReg` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Gender` enum('Male','Female') DEFAULT NULL,
  `Interests` set('Religious','Theatre','Musical','Travel','Educational') DEFAULT NULL,
  `Type` enum('Admin','Normal') NOT NULL DEFAULT 'Normal',
  PRIMARY KEY (`UserName`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('AhmedHassan','Ahmed Hassan','ahmedhassan@hotmail.com','123456','https://cdn.images.express.co.uk/img/dynamic/galleries/x701/319184.jpg','Football player','1995-12-05','2017-12-16 15:59:15','Male','Musical','Normal'),('AhmedZakaria','Ahmed Zakaria','zakaria@yahoo.com','123456','https://cdn.flixbus.de/d7files/hi_res_images/culture_and_history/5178_Barcelona.jpg','Traveller','1993-12-27','2017-12-16 15:59:15','Male','Religious,Travel','Normal'),('AssemSadek','Assem Sadek','assemsadek@gmail.com','adminassem','https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/732px-Real_Madrid_CF.svg.png','\"Computer engineering student at Cairo University.\"','1994-07-23','2017-12-16 15:54:23','Male','Religious,Theatre,Musical,Travel,Educational','Admin'),('LanaChafik','Lana Chafik','lanachafik@gmail.com','adminlana',NULL,NULL,NULL,'2017-12-16 15:54:23',NULL,NULL,'Admin'),('May','May Ashraf','mayouy@gmail.com','123456',NULL,'Singer','1995-12-15','2017-12-16 16:03:15','Female','Musical','Normal'),('Sama Ihab','Sama Ihab','semsem@yahoo.com','123456',NULL,'Teacher','1990-11-27','2017-12-16 16:03:15','Female','Religious,Educational','Normal');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-18 20:39:11
