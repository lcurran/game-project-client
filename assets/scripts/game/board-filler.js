'use strict';

const ui = require('./ui');
let board = require('./board');

let playerTurn = '';

const player = () => {
  if (playerTurn === '') {
    playerTurn = 'O';
    return 'X';
  } else  if (playerTurn === 'X') {
    playerTurn = 'O';
    return 'X';
  } else if (playerTurn === 'O') {
    playerTurn = 'X';
    return 'O';
  }
};

const cellFiller = function (cellId) {
  let index = cellId.replace(/\D/g,'');
      board[index] = player();
      ui.placeMarker(cellId, index);
};


module.exports = {
  cellFiller,
};
