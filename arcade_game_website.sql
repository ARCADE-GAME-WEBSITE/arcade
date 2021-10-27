-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2021 lúc 08:31 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `arcade_game_website`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admins`
--

CREATE TABLE `admins` (
  `AdminID` int(255) NOT NULL,
  `Email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` date DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`AdminID`, `Email`, `Password`, `Name`, `Gender`, `DayOfBirth`, `Avatar`) VALUES
(1, 'tuankietnk2001@gmail.com', 'admin01', 'Nguyễn Đặng Tuấn Kiệt', 1, '2001-04-09', NULL),
(2, 'oppahd96@gmail.com', 'admin02', 'Hồ Minh Hiếu', 1, '0000-00-00', NULL),
(3, 'bduyphuong12@gmail.com', 'admin03', 'Bùi Duy Phương', 1, NULL, NULL),
(4, 'nghia567123@gmail.com', 'admin04', 'Lê Trung Nghĩa', 1, NULL, NULL),
(5, '19521953@gm.uit.edu.vn', 'admin05', 'Mã Hải Nhật', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `all_user_records`
--

CREATE TABLE `all_user_records` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `GameID` int(255) NOT NULL,
  `HighScore` int(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `CategoryName` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `CategoryName`, `createdAt`, `updatedAt`) VALUES
(1, 'Arcade', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Shooting', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Racing', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Fighting', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Puzzle', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Sport', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Chess', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Obstacle', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Role-playing', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '2 players', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `GameID` int(11) DEFAULT NULL,
  `Content` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `error_feedbacks`
--

CREATE TABLE `error_feedbacks` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `GameID` int(255) NOT NULL,
  `ErrorType` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ErrorInfo` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(255) DEFAULT NULL,
  `ProcessStatus` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `DevID` int(11) DEFAULT NULL,
  `Url` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Title` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `GamePlayImage` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Played` int(11) DEFAULT NULL,
  `Rate` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `games`
--

INSERT INTO `games` (`id`, `DevID`, `Url`, `Title`, `Avatar`, `CategoryID`, `GamePlayImage`, `Description`, `Played`, `Rate`, `createdAt`, `updatedAt`) VALUES
(2, 1, '2048.html', '2048', '2048.jpg', 5, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'FlappyBird.html', 'FlappyBird', 'FlappyBird.jpg', 8, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 'Memory.html', 'Memory', 'Memory.jpg', 5, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 'Pong.html', 'Pong', 'Pong.jpg', 10, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 'RedRect.html', 'RedRect', 'RedRect.jpg', 10, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 'Snake.html', 'Snake', 'Snake.jpg', 10, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 'Sodoku.html', 'Sodoku', 'Sodoku.jpg', 5, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 'Tetris.html', 'Tetris', 'Tetris.jpg', 5, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 'TicTacToe.html', 'TicTacToe', 'TicTacToe.jpg', 10, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211026184158-create-user.js'),
('20211026184342-create-category.js'),
('20211026184455-create-comment.js'),
('20211026185251-create-game.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `upload_game_requests`
--

CREATE TABLE `upload_game_requests` (
  `id` int(255) NOT NULL,
  `UserID` int(255) NOT NULL,
  `IFrame` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `RequestDate` date NOT NULL,
  `GameTitle` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `GameAvatar` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GamePlayImage` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(255) DEFAULT NULL,
  `RequestStatus` tinyint(1) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Password` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Role` tinyint(1) DEFAULT NULL,
  `Full_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` datetime DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Friends` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`Friends`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`AdminID`);

--
-- Chỉ mục cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DevID` (`DevID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AdminID` (`AdminID`),
  ADD KEY `UserID` (`UserID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `AdminID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `all_user_records`
--
ALTER TABLE `all_user_records`
  ADD CONSTRAINT `all_user_records_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `all_user_records_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  ADD CONSTRAINT `error_feedbacks_ibfk_1` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_3` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`AdminID`);

--
-- Các ràng buộc cho bảng `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`DevID`) REFERENCES `admins` (`AdminID`),
  ADD CONSTRAINT `games_ibfk_2` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  ADD CONSTRAINT `upload_game_requests_ibfk_1` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`AdminID`),
  ADD CONSTRAINT `upload_game_requests_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
