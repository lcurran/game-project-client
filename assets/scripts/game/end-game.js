'use strict';

let board = require('./board');
let ui = require('./ui');

const boardReset = () => {
  for (let i = 0, max = board.length; i < max; i++) {
    board[i] = '';
  }
};

const gameEnd = (winner) => {
  // reset board
  boardReset();
  // ui modal player win
  ui.playerWin(winner);
};

module.exports = {
  gameEnd,
  boardReset,
};
