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
        Description: "",
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
        Description: "",
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
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Pong.html",
        DemoUrl: "https://www.youtube.com/embed/fiShX2pTz9A",
        Title: "Pong",
        Avatar: "4.png",
        Category: "Ball 2-players",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "",
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
        Description: "",
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
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Sodoku.html",
        DemoUrl: "https://www.youtube.com/embed/8zRXDsGydeQ",
        Title: "Sodoku",
        Avatar: "7.png",
        Category: "Puzzle Block",
        GamePlayImage: "img1.png img2.png img3.png img4.png",
        Description: "",
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
        Description: "",
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
        Description: "",
        Played: 0,
        Rate: 0
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};
