'use strict';

const api = require('./api');
const ui = require('./ui');

const updateGameData = (board, index) => {
  let data = {
    game: {
      cell: {
        index: index,
        value: board[index]
      },
      over: false
    }
  };
  console.log(data);
  api.updateGame(data)
  .done(ui.updateGameSuccess)
  .fail(ui.failure);
};

const endGameData = (board, index) => {  
  let data = {
    game: {
      cell: {
        index: index,
        value: board[index]
      },
      over: true
    }
  };
  console.log(data);
  api.updateGame(data)
  .done(ui.updateGameSuccess)
  .fail(ui.failure);
};

module.exports = {
  updateGameData,
  endGameData
};
