-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 07, 2021 lúc 05:13 PM
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
(1, 'tuankietnk2001@gmail.com', '$2a$10$RMdCi6u/kBoz1YoYuT3JXeL.5VkrH.syMRud8xLW1FmrVmKUgkmFm', 'Nguyễn Đặng Tuấn Kiệt', 1, '2001-04-09', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'oppahd96@gmail.com', '$2a$10$n4JbLZpeR9ZHdwX6XZMItus5eOpT9wVkgr1z9cbtFMUJyC/XqVGMm', 'Hồ Minh Hiếu', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'bduyphuong12@gmail.com', '$2a$10$Bx6yP.jeub3UXIIrzVOyvOThD2NDc13ktleqWFjrx6NIOkypU8i5m', 'Bùi Duy Phương', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'nghia567123@gmail.com', '$2a$10$wCsZpR/3GjYoYtc4PdIOhO/Caumg/OnCagjmiWjtRJOIFrcAqsLVG', 'Lê Trung Nghĩa', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '19521953@gm.uit.edu.vn', '$2a$10$4cfN/tekJXvAsmzK1U1ncOA0IUTXRq1rl85mhpc2OG5ZIhELqYijW', 'Mã Hải Nhật', 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `UserID`, `GameID`, `Content`, `createdAt`, `updatedAt`) VALUES
(7, 1, 1, 'Hello world toooo!', '2021-11-02 18:14:02', '2021-11-02 18:14:02'),
(8, 1, 1, 'Hello world!', '2021-11-02 18:14:08', '2021-11-02 18:14:08'),
(11, 1, 1, 'Hello world!!!', '2021-11-02 18:14:42', '2021-11-02 18:14:42'),
(12, 1, 1, 'Hello world!!!', '2021-11-02 18:14:58', '2021-11-02 18:14:58'),
(13, 1, 1, 'Hi', '2021-11-07 15:42:51', '2021-11-07 15:42:51'),
(14, 1, 4, 'Hello Pong game', '2021-11-07 15:50:15', '2021-11-07 15:50:15');

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
-- Cấu trúc bảng cho bảng `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `FriendID` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `friends`
--

INSERT INTO `friends` (`id`, `UserID`, `FriendID`, `createdAt`, `updatedAt`) VALUES
(4, 1, 2, '2021-11-06 07:23:35', '2021-11-06 07:23:35'),
(5, 2, 1, '2021-11-06 07:23:35', '2021-11-06 07:23:35'),
(6, 1, 3, '2021-11-07 15:44:17', '2021-11-07 15:44:17'),
(7, 3, 1, '2021-11-07 15:44:17', '2021-11-07 15:44:17');

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
(1, 1, '2048.html', 'https://www.youtube.com/embed/kQhkkqjGkFA', '2048', '1.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', '2048 is a popular single-player game for Web and mobile. It\'s a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that\'s played on an almost Sudoku-like grid. ... The object of the game is to combine the numbers displayed on the tiles until you reach 2048.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 'FlappyBird.html', 'https://www.youtube.com/embed/fQoJZuBwrkU', 'FlappyBird', '2.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Memory.html', 'https://www.youtube.com/embed/Um1EXbwmYYs', 'Memory', '3.png', 'Puzzle', 'img1.png img2.png img3.png img4.png', 'The memory game, or concentration, as it is sometimes called, is a popular card game played by children and adults around the world. Good memory is one of the qualities required in order to succeed in it. ... When it is assumed that the players have perfect memory, the memory game can be seen as a game of strategy.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 'Pong.html', 'https://www.youtube.com/embed/nqoiNLa-dNI', 'Pong', '4.png', 'Ball 2-players', 'img1.png img2.png img3.png img4.png', 'Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 'RedRect.html', 'https://www.youtube.com/embed/vGVoF_CbKmk', 'RedRect', '5.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Move your rectangular block to dodge other blocks moving to and collect similar blocks to increase personal score. Use the quickness of your hands to earn the highest score', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 'Snake.html', 'https://www.youtube.com/embed/=DekS8Pgb1qc', 'Snake', '6.png', 'Snake', 'img1.png img2.png img3.png img4.png', 'Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. ... The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 'Sudoku.html', 'https://www.youtube.com/embed/8zRXDsGydeQ', 'Sudoku', '7.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'In its simplest and most common configuration, sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares. The object of the puzzle is to fill the remaining squares, using all the numbers 1–9 exactly once in each row, column, and the nine 3 × 3 subgrids.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 'Tetris.html', 'https://www.youtube.com/embed/AP9FAF0gGZs', 'Tetris', '8.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels. ... The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 'TicTacToe.html', 'https://www.youtube.com/embed/5n2aQ3UQu9Y', 'TicTacToe', '9.png', '2-players', 'img1.png img2.png img3.png img4.png', 'Tic-tac-toe is a game in which two players take turns in drawing either an \' O\' or an \' X\' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
('20211030212945-create-upload-game-request.js'),
('20211105085509-create-user.js'),
('20211105085853-create-friends.js');

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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `Email`, `Password`, `Role`, `Full_name`, `Gender`, `DayOfBirth`, `Avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'tuankietnk2001@gmail.com', '$2a$10$ChncUp.mM26bsURXPEvOW.j520b3bHSIFL2oPVGKiXclxfzguGLfi', 0, 'Tuấn Kiệt', 1, '0000-00-00 00:00:00', 'male.jpg', '2021-11-05 09:30:35', '2021-11-05 09:30:35'),
(2, 'test@gmail.com', '$2a$10$8PugyBc.WnkfyLuQSovspuPAQfT0lyXAqra8nRcH12DI/VPxCHFQi', 0, 'test', 1, '0000-00-00 00:00:00', 'male.jpg', '2021-11-05 09:30:51', '2021-11-05 09:30:51'),
(3, 'test2@gmail.com', '$2a$10$un0Ju2USe.50L6FT8MI/7OT7yEg3UBbq4YWrDeehYaBHoENjH/BNO', 0, 'Tuấn Kiệt', 0, '0000-00-00 00:00:00', 'female.jpg', '2021-11-07 15:44:04', '2021-11-07 15:44:04');

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
-- Chỉ mục cho bảng `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `FriendID` (`FriendID`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `error_feedbacks`
--
ALTER TABLE `error_feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- Các ràng buộc cho bảng `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`FriendID`) REFERENCES `users` (`id`);

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
