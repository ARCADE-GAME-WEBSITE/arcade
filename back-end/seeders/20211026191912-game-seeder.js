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
        Description: "2048 is a popular single-player game for Web and mobile. It's a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that's played on an almost Sudoku-like grid. The object of the game is to combine the numbers displayed on the tiles until you reach 2048.",
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
        Description: "Snake is a video game that originated during the late 1970s in arcades becoming something of a classic. ... The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Especially, in this game, you can compete with an AI player!",
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
      },
      {
        DevID: 1,
        Url: "Ohh1.html",
        DemoUrl: "https://www.youtube.com/embed/r86OISLwXNI",
        Title: "Ohh1",
        Avatar: "11.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "With a strange name, the player cannot guess the content of 0h H1 until actually enters the game's desktop. So let's keep the game content a hidden number and step into discovering the table of 0h H1 immediately.\nIn the game the player's mission is to fill the table with the squares according to a certain rule. The game's playback desk will have colored boxes and players must continue to fill in the game's rules.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "3D-Chess.html",
        DemoUrl: "https://www.youtube.com/embed/cfXQybuelz0",
        Title: "3D Chess",
        Avatar: "12.png",
        Category: "Chess 2-players",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Chess is a board game played between two players. The current form of the game emerged in Southern Europe during the second half of the 15th century after evolving from similar, much older games of Indian and Persian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "2048.html",
        DemoUrl: "https://www.youtube.com/embed/kQhkkqjGkFA",
        Title: "2048",
        Avatar: "13.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "2048 is a popular single-player game for Web and mobile. It's a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that's played on an almost Sudoku-like grid. ... The object of the game is to combine the numbers displayed on the tiles until you reach 2048.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "2048.html",
        DemoUrl: "https://www.youtube.com/embed/kQhkkqjGkFA",
        Title: "2048",
        Avatar: "13.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "2048 is a popular single-player game for Web and mobile. It's a type of “sliding block puzzle” — think Threes!, on which 2048 is based, or the old-timey game klotski — that's played on an almost Sudoku-like grid. ... The object of the game is to combine the numbers displayed on the tiles until you reach 2048.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "MineSweeper.html",
        DemoUrl: "https://www.youtube.com/embed/GrZCWx0fnfc?start=7",
        Title: "Mine Sweeper",
        Avatar: "14.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Playing minesweeper is our passion. That's why we strive to make it the greatest game in the world! Select a difficulty level to challenge yourself, and enjoy the game!",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Racer.html",
        DemoUrl: "https://www.youtube.com/embed/eKRTZTayIyA?start=199",
        Title: "3D Racer",
        Avatar: "15.png",
        Category: "Racing Obstacle Reflex",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Javascript Pseudo 3D Racer is similar in concept to the OutRun video game. As the name suggests it is developed using HTML5 and JavaScript. The game evolves incrementally in 4 versions and you can even check its step by step progress through the Github repository.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "RadiusRaid.html",
        DemoUrl: "https://www.youtube.com/embed/TdHI_qJYTwE?start=75",
        Title: "Radius Raid",
        Avatar: "16.png",
        Category: "Arcade Shooting Reflex",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Radius Raid is a space themed shoot 'em up where you must blast away unrelenting enemies before they destroy you. The game features 13 enemy types, 5 powerups, parallax backgrounds, retro sound effects, and locally stored stats.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "TowerBuilt.html",
        DemoUrl: "https://www.youtube.com/embed/HsrmkqH61B8?start=22",
        Title: "Tower Built",
        Avatar: "17.png",
        Category: "Reflex Block Building",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Stack blocks and build the tallest tower!",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Hextris.html",
        DemoUrl: "https://www.youtube.com/embed/QoGonHQgCq8",
        Title: "Hextris",
        Avatar: "18.png",
        Category: "Reflex Puzzle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Hextris is a simple reincarnation of Tetris in hexagon form. Meaning that colored lines will fall from six sides towards a central hexagon, and you need to rotate the hexagon to get the colors to match. When you eventually can’t keep up, and the hexagon fills with colored lines, the game is over.",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "TypeMaster.html",
        DemoUrl: "https://www.youtube.com/embed/cJjN-3wEiC0",
        Title: "Type Master",
        Avatar: "19.png",
        Category: "Reflex Obstacle",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "Typer Master is a game that challenge your typing skill and your reflex! Type any character that you see on the screen before it hits you. Just one mistake and boom... Game over! Be careful with those that caps lock! Good luck!",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Breakout.html",
        DemoUrl: "https://www.youtube.com/embed/AMUv8KvVt08?start=13",
        Title: "Breakout",
        Avatar: "20.png",
        Category: "Shooting Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "You start with 3 lives and can progress through levels by destroying all bricks in each one. The number of bricks and the game’s difficulty will increase as you progress. The game ends whenever you ran out of lives. But you can get extra lives by destroying the blue bricks and catching the heart that falls from it!",
        Played: 0,
        Rate: 0
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};
