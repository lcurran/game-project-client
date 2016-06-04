'use strict';

const end = require('./end-game');
const ui = require('./ui');

const boardSum = (board) => {
  let sum = 0;
  for (let i = 0, max = board.length; i < max; i++) {
    if (board[i] === 'x' || board[i] === 'o') {
        sum++;
    }
  }

  return sum;
};

const tieChecker = (board) => {
  if (boardSum(board) === board.length) {
    ui.tieAlert();
    end.boardReset();
  }
};

module.exports = {
  tieChecker,
};
