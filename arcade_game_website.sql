-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 11, 2021 lúc 06:11 PM
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
(14, 'Snake', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Building', '2021-11-10 09:38:53', '2021-11-10 09:38:53'),
(16, 'Reflex', '2021-11-11 17:20:47', '2021-11-11 17:20:47');

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
(1, 1, '2048.html', 'https://www.youtube.com/embed/kQhkkqjGkFA', '2048', '1.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', '2048 is a popular single-player game for Web and mobile. It\'s a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that\'s played on an almost Sudoku-like grid. The object of the game is to combine the numbers displayed on the tiles until you reach 2048.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 'FlappyBird.html', 'https://www.youtube.com/embed/fQoJZuBwrkU', 'FlappyBird', '2.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Memory.html', 'https://www.youtube.com/embed/Um1EXbwmYYs', 'Memory', '3.png', 'Puzzle', 'img1.png img2.png img3.png img4.png', 'The memory game, or concentration, as it is sometimes called, is a popular card game played by children and adults around the world. Good memory is one of the qualities required in order to succeed in it. ... When it is assumed that the players have perfect memory, the memory game can be seen as a game of strategy.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 'Pong.html', 'https://www.youtube.com/embed/nqoiNLa-dNI', 'Pong', '4.png', 'Ball 2-players', 'img1.png img2.png img3.png img4.png', 'Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 'RedRect.html', 'https://www.youtube.com/embed/vGVoF_CbKmk', 'RedRect', '5.png', 'Obstacle', 'img1.png img2.png img3.png img4.png', 'Move your rectangular block to dodge other blocks moving to and collect similar blocks to increase personal score. Use the quickness of your hands to earn the highest score', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 'Snake.html', 'https://www.youtube.com/embed/=DekS8Pgb1qc', 'Snake', '6.png', 'Snake', 'img1.png img2.png img3.png img4.png', 'Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. ... The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Especially, in this game, you can compete with an AI player!', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 'Sudoku.html', 'https://www.youtube.com/embed/8zRXDsGydeQ', 'Sudoku', '7.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'In its simplest and most common configuration, sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares. The object of the puzzle is to fill the remaining squares, using all the numbers 1–9 exactly once in each row, column, and the nine 3 × 3 subgrids.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 'Tetris.html', 'https://www.youtube.com/embed/AP9FAF0gGZs', 'Tetris', '8.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels. ... The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible.', 0, 0, '0000-00-00 00:00:00', '2021-11-09 13:04:52'),
(9, 1, 'TicTacToe.html', 'https://www.youtube.com/embed/5n2aQ3UQu9Y', 'TicTacToe', '9.png', '2-players', 'img1.png img2.png img3.png img4.png', 'Tic-tac-toe is a game in which two players take turns in drawing either an \' O\' or an \' X\' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 'Pacman.html', 'https://www.youtube.com/embed/npOpr7juN1Y', 'Pacman', '10.png', 'Arcade Obstacle', 'img1.png img2.png img3.png img4.png', 'Pac-Man (パックマン) is an arcade game developed by Namco and first released in Japan on May 22, 1980. Gained popularity and popularity as soon as it was released. Released to this day, Pac-Man is considered a classic game and became an icon of 80s pop culture.', 0, 0, '2021-11-09 15:53:26', '2021-11-09 15:02:00'),
(11, 1, 'Ohh1.html', 'https://www.youtube.com/embed/r86OISLwXNI', 'Ohh1', '11.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'With a strange name, the player cannot guess the content of 0h H1 until actually enters the game\'s desktop. So let\'s keep the game content a hidden number and step into discovering the table of 0h H1 immediately.\\nIn the game the player\'s mission is to fill the table with the squares according to a certain rule. The game\'s playback desk will have colored boxes and players must continue to fill in the game\'s rules.', 0, 0, '2021-11-10 07:37:59', '2021-11-10 07:37:59'),
(12, 1, '3D-Chess.html', 'https://www.youtube.com/embed/cfXQybuelz0', '3D Chess', '12.png', 'Chess 2-players', 'img1.png img2.png img3.png img4.png', 'Chess is a board game played between two players. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world\'s most popular games, played by millions of people worldwide.', 0, 0, '2021-11-10 07:56:07', '2021-11-10 07:56:07'),
(13, 1, '2048.html', 'https://www.youtube.com/embed/kQhkkqjGkFA', '2048', '13.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', '2048 is a popular single-player game for Web and mobile. It\'s a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that\'s played on an almost Sudoku-like grid. The object of the game is to combine the numbers displayed on the tiles until you reach 2048.', 0, 0, '2021-11-10 08:28:46', '2021-11-10 08:28:46'),
(14, 1, 'MineSweeper.html', 'https://www.youtube.com/embed/GrZCWx0fnfc?start=7', 'Mine Sweeper', '14.png', 'Puzzle Block', 'img1.png img2.png img3.png img4.png', 'Playing minesweeper is our passion. That\'s why we strive to make it the greatest game in the world! Select a difficulty level to challenge yourself, and enjoy the game!', 0, 0, '2021-11-10 08:51:06', '2021-11-10 08:51:06'),
(15, 1, 'Racer.html', 'https://www.youtube.com/embed/eKRTZTayIyA?start=199', '3D Racer', '15.png', 'Racing Obstacle Reflex', 'img1.png img2.png img3.png img4.png', 'Javascript Pseudo 3D Racer is similar in concept to the OutRun video game. As the name suggests it is developed using HTML5 and JavaScript. The game evolves incrementally in 4 versions and you can even check its step by step progress through the Github repository.', 0, 0, '2021-11-10 09:05:56', '2021-11-10 09:05:56'),
(16, 1, 'RadiusRaid.html', 'https://www.youtube.com/embed/TdHI_qJYTwE?start=75', 'Radius Raid', '16.png', 'Arcade Shooting Reflex', 'img1.png img2.png img3.png img4.png', 'Radius Raid is a space themed shoot \'em up where you must blast away unrelenting enemies before they destroy you. The game features 13 enemy types, 5 powerups, parallax backgrounds, retro sound effects, and locally stored stats.', 0, 0, '2021-11-10 09:20:47', '2021-11-10 09:20:47'),
(17, 1, 'TowerBuilt.html', 'https://www.youtube.com/embed/HsrmkqH61B8?start=22', 'Tower Built', '17.png', 'Reflex Block Building', 'img1.png img2.png img3.png img4.png', 'Stack blocks and build the tallest tower!', 0, 0, '2021-11-10 09:34:46', '2021-11-10 09:07:13'),
(18, 1, 'Hextris.html', 'https://www.youtube.com/embed/QoGonHQgCq8', 'Hextris', '18.png', 'Reflex Puzzle', 'img1.png img2.png img3.png img4.png', 'Hextris is a simple reincarnation of Tetris in hexagon form. Meaning that colored lines will fall from six sides towards a central hexagon, and you need to rotate the hexagon to get the colors to match. When you eventually can’t keep up, and the hexagon fills with colored lines, the game is over.', 0, 0, '2021-11-11 17:10:18', '2021-11-11 17:10:18'),
(19, 1, 'TypeMaster.html', 'https://www.youtube.com/embed/cJjN-3wEiC0', 'Type Master', '19.png', 'Reflex Obstacle', 'img1.png img2.png img3.png img4.png', 'Typer Master is a game that challenge your typing skill and your reflex! Type any character that you see on the screen before it hits you. Just one mistake and boom... Game over! Be careful with those that caps lock! Good luck!', 0, 0, '2021-11-11 17:37:57', '2021-11-11 17:37:57'),
(20, 1, 'Breakout.html', 'https://www.youtube.com/embed/AMUv8KvVt08?start=13', 'Breakout', '20.png', 'Shooting Block', 'img1.png img2.png img3.png img4.png', 'You start with 3 lives and can progress through levels by destroying all bricks in each one. The number of bricks and the game’s difficulty will increase as you progress. The game ends whenever you ran out of lives. But you can get extra lives by destroying the blue bricks and catching the heart that falls from it!', 0, 0, '2021-11-11 18:03:39', '2021-11-11 18:03:39');

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
(3, 'test2@gmail.com', '$2a$10$un0Ju2USe.50L6FT8MI/7OT7yEg3UBbq4YWrDeehYaBHoENjH/BNO', 0, 'Tuấn Kiệt', 0, '0000-00-00 00:00:00', 'female.jpg', '2021-11-07 15:44:04', '2021-11-09 12:52:31');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `upload_game_requests`
--
ALTER TABLE `upload_game_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
