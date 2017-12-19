-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2017 at 09:16 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `attends`
--

CREATE TABLE `attends` (
  `UN` varchar(30) NOT NULL,
  `EID` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attends`
--

INSERT INTO `attends` (`UN`, `EID`, `Date`) VALUES
('LanaChafik', 2, '2017-12-19 21:30:11');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

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
-- Dumping data for table `event`
--

INSERT INTO `event` (`ID`, `Title`, `StartDate`, `EndDate`, `Description`, `Organizer`, `DateCreated`, `Category`, `Image`, `TicketPrice`) VALUES
(1, 'Dahab ', '2018-01-10 07:00:00', '2018-01-24 09:00:00', 'blue hole', 'LanaChafik', '2017-12-19 21:29:24', 'Travel', 'https://s-ec.bstatic.com/images/hotel/max1024x768/859/85955446.jpg', 1500),
(2, 'Omar Khairat @ CUFE', '2017-12-27 20:00:00', '2017-12-27 22:00:00', 'amazing pianist', 'AhmedZakaria', '2017-12-19 21:29:24', 'Musical', 'https://yt3.ggpht.com/-7TRJmY-f6PQ/AAAAAAAAAAI/AAAAAAAAAAA/CZOWtyXTXGg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', 200);

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `Follower` varchar(30) NOT NULL,
  `Followed` varchar(30) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`Follower`, `Followed`, `Date`) VALUES
('AhmedHassan', 'AhmedZakaria', '2017-12-19 22:14:05'),
('AhmedHassan', 'LanaChafik', '2017-12-19 22:14:05'),
('AhmedZakaria', 'LanaChafik', '2017-12-19 22:14:05'),
('AssemSadek', 'AhmedZakaria', '2017-12-19 22:14:05'),
('LanaChafik', 'AssemSadek', '2017-12-19 22:14:05'),
('LanaChafik', 'Sama Ihab', '2017-12-19 22:14:05'),
('May', 'AhmedZakaria', '2017-12-19 22:14:05'),
('May', 'LanaChafik', '2017-12-19 22:14:05'),
('Sama Ihab', 'AssemSadek', '2017-12-19 22:14:05'),
('Sama Ihab', 'LanaChafik', '2017-12-19 22:14:05');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

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

CREATE TABLE `user` (
  `Username` varchar(30) NOT NULL,
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
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `FullName`, `Email`, `Password`, `Image`, `Bio`, `BirthDate`, `DateReg`, `Gender`, `Interests`, `Type`) VALUES
('AhmedHassan', 'Ahmed Hassan', 'ahmedhassan@hotmail.com', '123456', 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/319184.jpg', 'Football player', '1995-12-05', '2017-12-16 15:59:15', 'Male', 'Musical', 'Normal'),
('AhmedZakaria', 'Ahmed Zakaria', 'zakaria@yahoo.com', '123456', 'https://cdn.flixbus.de/d7files/hi_res_images/culture_and_history/5178_Barcelona.jpg', 'Traveller', '1993-12-27', '2017-12-16 15:59:15', 'Male', 'Religious,Travel', 'Normal'),
('AssemSadek', 'Assem Sadek', 'assemsadek@gmail.com', 'adminassem', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/732px-Real_Madrid_CF.svg.png', '\"Computer engineering student at Cairo University.\"', '1994-07-23', '2017-12-16 15:54:23', 'Male', 'Religious,Theatre,Musical,Travel,Educational', 'Admin'),
('LanaChafik', 'Lana Chafik', 'lanachafik@gmail.com', 'adminlana', NULL, NULL, NULL, '2017-12-16 15:54:23', NULL, NULL, 'Admin'),
('May', 'May Ashraf', 'mayouy@gmail.com', '123456', NULL, 'Singer', '1995-12-15', '2017-12-16 16:03:15', 'Female', 'Musical', 'Normal'),
('Sama Ihab', 'Sama Ihab', 'semsem@yahoo.com', '123456', NULL, 'Teacher', '1990-11-27', '2017-12-16 16:03:15', 'Female', 'Religious,Educational', 'Normal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attends`
--
ALTER TABLE `attends`
  ADD PRIMARY KEY (`UN`,`EID`),
  ADD KEY `EID_FKA_idx` (`EID`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`CID`,`CUN`,`CEID`),
  ADD KEY `EID_FKC_idx` (`CEID`),
  ADD KEY `UN_FKC_idx` (`CUN`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`Follower`,`Followed`),
  ADD KEY `FD_FKF_idx` (`Followed`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`RID`,`RUN`,`REID`),
  ADD KEY `UN_FKR_idx` (`RUN`),
  ADD KEY `EID_FKR_idx` (`REID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Username`),
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

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attends`
--
ALTER TABLE `attends`
  ADD CONSTRAINT `EID_FKA` FOREIGN KEY (`EID`) REFERENCES `event` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UN_FKA` FOREIGN KEY (`UN`) REFERENCES `user` (`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `EID_FKC` FOREIGN KEY (`CEID`) REFERENCES `event` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UN_FKC` FOREIGN KEY (`CUN`) REFERENCES `user` (`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `FD_FKF` FOREIGN KEY (`Followed`) REFERENCES `user` (`UserName`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FR_FKF` FOREIGN KEY (`Follower`) REFERENCES `user` (`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `EID_FKR` FOREIGN KEY (`REID`) REFERENCES `event` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UN_FKR` FOREIGN KEY (`RUN`) REFERENCES `user` (`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
