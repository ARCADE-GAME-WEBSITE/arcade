'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        DevID: 1,
        Url: "2048.html",
        Title: "2048",
        Avatar: "2048.jpg",
        CategoryID: 5,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "FlappyBird.html",
        Title: "FlappyBird",
        Avatar: "FlappyBird.jpg",
        CategoryID: 8,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Memory.html",
        Title: "Memory",
        Avatar: "Memory.jpg",
        CategoryID: 5,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Pong.html",
        Title: "Pong",
        Avatar: "Pong.jpg",
        CategoryID: 10,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "RedRect.html",
        Title: "RedRect",
        Avatar: "RedRect.jpg",
        CategoryID: 10,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Snake.html",
        Title: "Snake",
        Avatar: "Snake.jpg",
        CategoryID: 10,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Sodoku.html",
        Title: "Sodoku",
        Avatar: "Sodoku.jpg",
        CategoryID: 5,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "Tetris.html",
        Title: "Tetris",
        Avatar: "Tetris.jpg",
        CategoryID: 5,
        GamePlayImage: "",
        Description: "",
        Played: 0,
        Rate: 0
      },
      {
        DevID: 1,
        Url: "TicTacToe.html",
        Title: "TicTacToe",
        Avatar: "TicTacToe.jpg",
        CategoryID: 10,
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
