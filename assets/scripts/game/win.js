'use strict';

const end = require('./end-game');

const rowWinCheck = (board) => {
  for (let i = 0, max = 6; i <= max; i += 3) {
    if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] !== '') {
      return board[i];
    }
  }
};

const columnWinCheck = (board) => {
  for (let i = 0, max = 2; i <= max; i ++) {
    if (board[i] === board[i+3] && board[i] === board[i+6] && board[i] !== '') {
      return board[i];
    }
  }
};

const diagonalWinCheck = (board) => {
  if (board[0] === board[4] && board[0] === board[8] && board[4] !== '') {
    return board[4];
  } else if (board[2] === board[4] && board[2] === board[6] && board[4] !== '') {
    return board[4];
  }
};

const winChecker = (board) => {
  let winner;
  if (rowWinCheck(board) !== undefined) {
    winner = rowWinCheck(board);
    end.gameEnd(winner);
  } else if (columnWinCheck(board) !== undefined) {
     winner =  columnWinCheck(board);
     end.gameEnd(winner);
  } else if (diagonalWinCheck(board) !== undefined) {
    winner = diagonalWinCheck(board);
    end.gameEnd(winner);
  }
};


module.exports = {
  winChecker,
};
