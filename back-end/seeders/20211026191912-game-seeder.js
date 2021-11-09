'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        DevID: 1,
        Url: "2048.html",
        DemoUrl: "https://www.youtube.com/embed/kQhkkqjGkFA",
        Title: "2048",
        Avatar: "1.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "2048 is a popular single-player game for Web and mobile. It's a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that's played on an almost Sudoku-like grid. ... The object of the game is to combine the numbers displayed on the tiles until you reach 2048.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "FlappyBird.html",
        DemoUrl: "https://www.youtube.com/embed/fQoJZuBwrkU",
        Title: "FlappyBird",
        Avatar: "2.png",
        Category: "Obstacle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Memory.html",
        DemoUrl: "https://www.youtube.com/embed/Um1EXbwmYYs",
        Title: "Memory",
        Avatar: "3.png",
        Category: "Puzzle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "The memory game, or concentration, as it is sometimes called, is a popular card game played by children and adults around the world. Good memory is one of the qualities required in order to succeed in it. ... When it is assumed that the players have perfect memory, the memory game can be seen as a game of strategy.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Pong.html",
        DemoUrl: "https://www.youtube.com/embed/nqoiNLa-dNI",
        Title: "Pong",
        Avatar: "4.png",
        Category: "Ball 2-players",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "RedRect.html",
        DemoUrl: "https://www.youtube.com/embed/vGVoF_CbKmk",
        Title: "RedRect",
        Avatar: "5.png",
        Category: "Obstacle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Move your rectangular block to dodge other blocks moving to and collect similar blocks to increase personal score. Use the quickness of your hands to earn the highest score",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Snake.html",
        DemoUrl: "https://www.youtube.com/embed/=DekS8Pgb1qc",
        Title: "Snake",
        Avatar: "6.png",
        Category: "Snake",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. ... The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Sudoku.html",
        DemoUrl: "https://www.youtube.com/embed/8zRXDsGydeQ",
        Title: "Sudoku",
        Avatar: "7.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "In its simplest and most common configuration, sudoku consists of a 9 × 9 grid with numbers appearing in some of the squares. The object of the puzzle is to fill the remaining squares, using all the numbers 1–9 exactly once in each row, column, and the nine 3 × 3 subgrids.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Tetris.html",
        DemoUrl: "https://www.youtube.com/embed/AP9FAF0gGZs",
        Title: "Tetris",
        Avatar: "8.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels. ... The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "TicTacToe.html",
        DemoUrl: "https://www.youtube.com/embed/5n2aQ3UQu9Y",
        Title: "TicTacToe",
        Avatar: "9.png",
        Category: "2-players",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Tic-tac-toe is a game in which two players take turns in drawing either an ' O' or an ' X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Pacman.html",
        DemoUrl: "https://www.youtube.com/embed/npOpr7juN1Y",
        Title: "Pacman",
        Avatar: "10.png",
        Category: "Arcade Obstacle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Pac-Man (パックマン) is an arcade game developed by Namco and first released in Japan on May 22, 1980. Gained popularity and popularity as soon as it was released. Released to this day, Pac-Man is considered a classic game and became an icon of 80s pop culture.",
        Played: 0,
        Rate: 0
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};
