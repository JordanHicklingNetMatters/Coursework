-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 04:47 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netmatters_contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `imgsrc` varchar(2083) NOT NULL,
  `description` varchar(280) NOT NULL,
  `author` varchar(50) NOT NULL,
  `authorsrc` varchar(2083) NOT NULL,
  `dateposted` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `type`, `imgsrc`, `description`, `author`, `authorsrc`, `dateposted`) VALUES
(1, 'Junior Digital Marketing Executive', '', 'img/junior-digital-marketing.jpg', 'Salary Range $18,000 - £23,000 Hours 40 hours per week, Mon-Fri Location Wymondham, Norfolk. Great...\r\n\r\n', 'Posted by Netmatters', 'img/news-avatar.png', '20th July 2022'),
(2, 'What You Don\'t Know About SEO', '', 'img/SEO.jpg', 'Technology. Competitors. Search Engine Algorithms. These factors are all inevitably goint to be ever...', 'Posted by Netmatters', 'img/news-avatar.png', '20th July 2022'),
(3, 'New Business Executive', '', 'img/new-business-executive.jpg', 'Salary Range £22,000 & OTE Hours 40 hours per week, Monday - Friday\r\nLocation Wymondham, Norfolk/Part...', 'Posted by Netmatters', 'img/news-avatar.png', '20th July 2022');

-- --------------------------------------------------------

--
-- Table structure for table `user_information`
--

CREATE TABLE `user_information` (
  `Name` varchar(50) NOT NULL,
  `Company` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Telephone` bigint(11) NOT NULL,
  `Subject` varchar(50) NOT NULL,
  `Message` varchar(280) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_information`
--

INSERT INTO `user_information` (`Name`, `Company`, `Email`, `Telephone`, `Subject`, `Message`) VALUES
('Jordan', 'Jordan', 'test@gmail.com', 2147483647, 'test', 'Testing the form'),
('Someone', 'Testing', 'Test@gmail.com', 2147483647, 'Test', 'Testing phone'),
('Testing', '123', 'testing123@gmail.com', 32141236939, 'Testing', 'Testing Phone Again..'),
('Jordan ', 'Jordan', 'iprofuse11@gmail.com', 7565646669, 'adada', 'adadadadada'),
('', '', '', 0, '', ''),
('', '', '', 0, '', ''),
('', '', '', 0, '', ''),
('', '', '', 0, '', ''),
(':name', ':company', ':email', 0, ':subject', ':message'),
(':name', ':company', ':email', 0, ':subject', ':message'),
(':name', ':company', ':email', 0, ':subject', ':message'),
('adadadad', 'adadadadada', 'iprofuse11@gmail.com', 7565646669, 'dadada', 'dadadad'),
('', '', '', 0, '', ''),
('', '', '', 0, '', ''),
('', '', '', 0, '', ''),
('Someone', 'Testing', 'iprofuse11@gmail.com', 7565646669, 'Test', 'Testing'),
('Jordan thomas hickling', '', 'iprofuse11@gmail.com', 7565646669, '', ''),
('adasdad', 'Testing', 'iprofuse11@gmail.com', 7565646669, 'dadad', 'adada'),
('adada', 'adada', 'iprofuse11@gmail.com', 7565646669, 'adada', 'dada'),
('Jordan thomas hickling', '', 'iprofuse11@gmail.com', 7565646669, '', ''),
('Jordan', 'Something', 'iprofuse11@gmail.com', 7565646669, 'adadad', 'adadad'),
('Jordan', 'Testing', 'test@gmail.com', 7565646669, 'I dont know', 'chicken'),
('', '', '', 0, '', ''),
('Jordan', 'Testing', 'iprofuse11@gmail.com', 7565646669, 'Testing', 'Testing'),
('Jordan', 'Testing', 'iprofuse11@gmail.com', 7565646669, 'Testing', 'Testing'),
('Jordan', 'Netmatters', 'iprofuse11@gmail.com', 7565646669, 'Testing ', 'This is a test to see if the message will go to the database with the rest of the information provided.'),
('Jordan', 'Netmatters', 'iprofuse11@gmail.com', 7565646669, 'Testing ', 'This is a test to see if the message will go to the database with the rest of the information provided.'),
('Jordan', 'Netmatters', 'iprofuse11@gmail.com', 7565646669, 'Testing ', 'This is a test to see if the message will go to the database with the rest of the information provided.'),
('Jordan ', 'Netmatters', 'iprofuse11@gmail.com', 7565646669, 'Testing', 'Testing to see if all this information goes to the database\r\n'),
('Jordan', 'Something New', 'iprofuse11@gmail.com', 7565646669, 'This is new test data', 'New test data so I can see if its being duplicated'),
('Is this new data', 'dadadad', 'iprofuse11@gmail.com', 7565646669, 'This is new data!', 'Hell ye finally fixed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
