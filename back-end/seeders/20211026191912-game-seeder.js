'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        DevID: 1,
        Url: "2048.html",
        DemoUrl: "https://www.youtube.com/watch?v=kQhkkqjGkFA",
        Title: "2048",
        Avatar: "1.jpg",
        Category: "Puzzle Block",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "FlappyBird.html",
        DemoUrl: "https://www.youtube.com/watch?v=fQoJZuBwrkU",
        Title: "FlappyBird",
        Avatar: "2.jpg",
        Category: "Obstacle",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Memory.html",
        DemoUrl: "https://www.youtube.com/watch?v=Um1EXbwmYYs",
        Title: "Memory",
        Avatar: "3.jpg",
        Category: "Puzzle",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Pong.html",
        DemoUrl: "https://www.youtube.com/watch?v=fiShX2pTz9A",
        Title: "Pong",
        Avatar: "4.jpg",
        Category: "Ball 2-players",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "RedRect.html",
        DemoUrl: "https://www.youtube.com/watch?v=vGVoF_CbKmk",
        Title: "RedRect",
        Avatar: "5.jpg",
        Category: "Obstacle",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Snake.html",
        DemoUrl: "https://www.youtube.com/watch?v=DekS8Pgb1qc",
        Title: "Snake",
        Avatar: "6.jpg",
        Category: "Snake",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Sodoku.html",
        DemoUrl: "https://www.youtube.com/watch?v=8zRXDsGydeQ",
        Title: "Sodoku",
        Avatar: "7.jpg",
        Category: "Puzzle Block",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Tetris.html",
        DemoUrl: "https://www.youtube.com/watch?v=AP9FAF0gGZs",
        Title: "Tetris",
        Avatar: "8.jpg",
        Category: "Puzzle Block",
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "TicTacToe.html",
        DemoUrl: "https://www.youtube.com/watch?v=5n2aQ3UQu9Y",
        Title: "TicTacToe",
        Avatar: "9.jpg",
        Category: "2-players",
        GamePlayImage: "",
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
