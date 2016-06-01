'use strict';

let ui = require('./ui');

let playerTurn = '';

const player = () => {
  if (playerTurn === '') {
    playerTurn = 'O';
    ui.placeX;
    return 'X';
  } else  if (playerTurn === 'X') {
    playerTurn = 'O';
    ui.placeO;
    return 'X';
  } else if (playerTurn === 'O') {
    playerTurn = 'X';
      ui.placeX;
    return 'O';
  }
};

module.exports = {
player,
};
