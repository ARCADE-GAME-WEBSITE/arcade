-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 01, 2021 lúc 04:43 PM
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
  `id` int(11) NOT NULL,
  `Email` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Full_name` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `DayOfBirth` date DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `admins`
--

INSERT INTO `admins` (`id`, `Email`, `Password`, `Full_name`, `Gender`, `DayOfBirth`, `Avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'tuankietnk2001@gmail.com', 'admin01', 'Nguyễn Đặng Tuấn Kiệt', 1, '2001-04-09', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'oppahd96@gmail.com', 'admin02', 'Hồ Minh Hiếu', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'bduyphuong12@gmail.com', 'admin03', 'Bùi Duy Phương', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'nghia567123@gmail.com', 'admin04', 'Lê Trung Nghĩa', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '19521953@gm.uit.edu.vn', 'admin05', 'Mã Hải Nhật', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
(10, '2-players', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Block', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Ball', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Bounce', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Snake', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `GameID` int(11) DEFAULT NULL,
  `ErrorType` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ErrorInfo` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(11) DEFAULT NULL,
  `ProcessStatus` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `DevID` int(11) DEFAULT NULL,
  `Url` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `DemoUrl` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Title` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Category` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
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

INSERT INTO `games` (`id`, `DevID`, `Url`, `DemoUrl`, `Title`, `Avatar`, `Category`, `GamePlayImage`, `Description`, `Played`, `Rate`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2048.html', 'https://www.youtube.com/watch?v=kQhkkqjGkFA', '2048', '2048.jpg', 'Puzzle Block', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 'FlappyBird.html', 'https://www.youtube.com/watch?v=fQoJZuBwrkU', 'FlappyBird', 'FlappyBird.jpg', 'Obstacle', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Memory.html', 'https://www.youtube.com/watch?v=Um1EXbwmYYs', 'Memory', 'Memory.jpg', 'Puzzle', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 'Pong.html', 'https://www.youtube.com/watch?v=fiShX2pTz9A', 'Pong', 'Pong.jpg', 'Ball 2-players', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 'RedRect.html', 'https://www.youtube.com/watch?v=vGVoF_CbKmk', 'RedRect', 'RedRect.jpg', 'Obstacle', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 'Snake.html', 'https://www.youtube.com/watch?v=DekS8Pgb1qc', 'Snake', 'Snake.jpg', 'Snake', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 'Sodoku.html', 'https://www.youtube.com/watch?v=8zRXDsGydeQ', 'Sodoku', 'Sodoku.jpg', 'Puzzle Block', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 'Tetris.html', 'https://www.youtube.com/watch?v=AP9FAF0gGZs', 'Tetris', 'Tetris.jpg', 'Puzzle Block', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 'TicTacToe.html', 'https://www.youtube.com/watch?v=5n2aQ3UQu9Y', 'TicTacToe', 'TicTacToe.jpg', '2-players', '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
('20211026185251-create-game.js'),
('20211027073433-create-game.js'),
('20211027184633-create-game.js'),
('20211027185541-create-game.js'),
('20211027185740-create-user.js'),
('20211030112244-create-admin.js'),
('20211030200618-create-all-user-records.js'),
('20211030202933-create-user-records.js'),
('20211030210013-create-error-feedbacks.js'),
('20211030211416-create-user-record.js'),
('20211030211503-create-error-feedback.js'),
('20211030212945-create-upload-game-request.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `upload_game_requests`
--

CREATE TABLE `upload_game_requests` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Url` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GameTitle` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GameAvatar` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `GamePlayImage` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `AdminID` int(11) DEFAULT NULL,
  `RequestStatus` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
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
  `Friends` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `Email`, `Password`, `Role`, `Full_name`, `Gender`, `DayOfBirth`, `Avatar`, `Friends`, `createdAt`, `updatedAt`) VALUES
(1, 'tuankietnk2001@gmail.com', '$2a$10$OXazhhESBQ0vE9zRmr3eZ..QwEdWfw3N2VPLP.uR7/xCXDHzK0vhG', 0, 'Tuấn Kiệt', 1, '2001-09-04 00:00:00', 'male.jpg', 'a@gmail.com c@gmail.com', '2021-10-27 20:46:36', '2021-10-30 13:36:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_records`
--

CREATE TABLE `user_records` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL,
  `HighScore` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `user_records`
--

INSERT INTO `user_records` (`id`, `UserID`, `GameID`, `HighScore`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 9600, '2021-10-30 20:43:03', '2021-10-30 20:43:03');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `UserID` (`UserID`),
  ADD KEY `GameID` (`GameID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DevID` (`DevID`);

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
  ADD KEY `UserID` (`UserID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_records`
--
ALTER TABLE `user_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `GameID` (`GameID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `user_records`
--
ALTER TABLE `user_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

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
  ADD CONSTRAINT `error_feedbacks_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_2` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `error_feedbacks_ibfk_3` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`id`);

--
-- Các ràng buộc cho bảng `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`DevID`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `games_ibfk_2` FOREIGN KEY (`DevID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  ADD CONSTRAINT `upload_game_requests_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `upload_game_requests_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `admins` (`id`);

--
-- Các ràng buộc cho bảng `user_records`
--
ALTER TABLE `user_records`
  ADD CONSTRAINT `user_records_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_records_ibfk_2` FOREIGN KEY (`GameID`) REFERENCES `games` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
