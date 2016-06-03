'use strict';

const ui = require('./ui');
let board = require('./board');

let playerTurn = '';

const player = () => {
  if (playerTurn === '') {
    playerTurn = 'o';
    return 'x';
  } else  if (playerTurn === 'x') {
    playerTurn = 'o';
    return 'x';
  } else if (playerTurn === 'o') {
    playerTurn = 'x';
    return 'o';
  }
};

const cellFiller = function (index, cellId) {
      board[index] = player();
      ui.placeMarker(cellId, index);
};


module.exports = {
  cellFiller,
};
