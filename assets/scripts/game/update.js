'use strict';

const api = require('./api');
const ui = require('./ui');

// var display2 = {};
// display2["0"] = "none";
// display2["1"] = "block";
// display2["2"] = "none";
//
// console.log( JSON.stringify(display2) );

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

module.exports = {
  updateGameData,
};
