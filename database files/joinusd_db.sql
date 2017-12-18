-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2017 at 03:10 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `joinusd_db`
--
CREATE DATABASE IF NOT EXISTS `joinusd_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `joinusd_db`;

-- --------------------------------------------------------

--
-- Table structure for table `attends`
--

DROP TABLE IF EXISTS `attends`;
CREATE TABLE `attends` (
  `UN` varchar(30) NOT NULL,
  `EID` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` enum('Attending','Maybe','Not Attending','Interested') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `CID` int(11) NOT NULL,
  `Content` text NOT NULL,
  `CUN` varchar(30) NOT NULL,
  `CEID` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `ID` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Description` text,
  `Organizer` varchar(30) NOT NULL,
  `DateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Category` enum('Religious','Theatre','Musical','Travel','Educational') DEFAULT NULL,
  `Image` text,
  `TicketPrice` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
CREATE TABLE `follows` (
  `Follower` varchar(30) NOT NULL,
  `Followed` varchar(30) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `RID` int(11) NOT NULL,
  `Problem` text NOT NULL,
  `RUN` varchar(30) NOT NULL,
  `REID` int(11) NOT NULL,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
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
  `Type` enum('Admin','Normal') NOT NULL DEFAULT 'Normal'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attends`
--
ALTER TABLE `attends`
  ADD PRIMARY KEY (`UN`,`EID`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`CID`,`CUN`,`CEID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`Follower`,`Followed`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`RID`,`RUN`,`REID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserName`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `CID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `RID` int(11) NOT NULL AUTO_INCREMENT;


-- Dumping data for table `user`
--

INSERT INTO `user` (`UserName`, `FullName`, `Email`, `Password`, `Image`, `Bio`, `BirthDate`, `DateReg`, `Gender`, `Interests`, `Type`) VALUES
('AhmedHassan', 'Ahmed Hassan', 'ahmedhassan@hotmail.com', '123456', 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/319184.jpg', 'Football player', '1995-12-05', '2017-12-16 15:59:15', 'Male', 'Musical', 'Normal'),
('AhmedZakaria', 'Ahmed Zakaria', 'zakaria@yahoo.com', '123456', 'https://cdn.flixbus.de/d7files/hi_res_images/culture_and_history/5178_Barcelona.jpg', 'Traveller', '1993-12-27', '2017-12-16 15:59:15', 'Male', 'Religious,Travel', 'Normal'),
('AssemSadek', 'Assem Sadek', 'assemsadek@gmail.com', 'adminassem', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/732px-Real_Madrid_CF.svg.png', '\"Computer engineering student at Cairo University.\"', '1994-07-23', '2017-12-16 15:54:23', 'Male', 'Religious,Theatre,Musical,Travel,Educational', 'Admin'),
('LanaChafik', 'Lana Chafik', 'lanachafik@gmail.com', 'adminlana', NULL, NULL, NULL, '2017-12-16 15:54:23', NULL, NULL, 'Admin'),
('May', 'May Ashraf', 'mayouy@gmail.com', '123456', NULL, 'Singer', '1995-12-15', '2017-12-16 16:03:15', 'Female', 'Musical', 'Normal'),
('Sama Ihab', 'Sama Ihab', 'semsem@yahoo.com', '123456', NULL, 'Teacher', '1990-11-27', '2017-12-16 16:03:15', 'Female', 'Religious,Educational', 'Normal');


-- Dumping data for table `event`
--

INSERT INTO `event` (`ID`, `Title`, `StartDate`, `EndDate`, `Description`, `Organizer`, `DateCreated`, `Category`, `Image`, `TicketPrice`) VALUES
(1, '5 days in Dahab', '2018-01-20 00:00:00', '2017-12-25 00:00:00', 'Lagonna\r\nWadi el wesh wash\r\nblue hole\r\nTowaylat', 'AhmedZakaria', '2017-12-16 16:08:06', 'Travel', 'http://www.travelersegypt.com/uploads/dahab1.png', 1500),
(2, 'Omar Khairat @ CUFE', '2018-02-22 20:00:00', '2018-02-22 23:00:00', NULL, 'May', '2017-12-16 16:08:06', 'Musical', NULL, 200);



COMMIT;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
