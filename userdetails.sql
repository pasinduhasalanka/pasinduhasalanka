-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 13, 2023 at 03:27 PM
-- Server version: 5.7.40-log
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

DROP TABLE IF EXISTS `userdetails`;
CREATE TABLE IF NOT EXISTS `userdetails` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Mobile_Number` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`ID`, `First_Name`, `Last_Name`, `Email`, `Gender`, `Mobile_Number`) VALUES
(1, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(2, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(3, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(4, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(5, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(6, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778'),
(7, 'Sadaruwan', 'Perera', 'test@gmail.com', 'male', '0762325778');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
