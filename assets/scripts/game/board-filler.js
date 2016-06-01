'use strict';

const board = require('./board');
const ui = require('./ui');
const player = require('./player-move');

const cellFiller = function (index) {
  if (board[index] === '') {
    board[index] = player();
    return board[index];
  } else {
    return ui.occupiedError;
  }
};

module.exports = {
  cellFiller,
};
