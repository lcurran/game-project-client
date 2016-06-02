'use strict';

const rowWinCheck = (board) => {
  for (let i = 0, max = 6; i <= max; i += 3) {
    if (board[i] === board[i+1] && board[i] === board[i+2]) {
      console.log('player win');
      return true;
    } else {
      return false;
    }
  }
};

const columnWinCheck = (board) => {
  for (let i = 0, max = 2; i <= max; i ++) {
    if (board[i] === board[i+3] && board[i] === board[i+6]) {
      console.log('player win');
      return board[i];
    } else {
      return false;
    }
  }
};

const diagonalWinCheck = (board) => {
  if (board[0] === board[4] && board[0] === board[8]) {
    console.log('player win');
    return board[4];
  } else if (board[2] === board[4] && board[2] === board[6]) {
      console.log('player win');
      return board[4];
  } else {
    return false;
  }
};

const winChecker = (board) => {
  if (rowWinCheck(board) == true) {
    return rowWinCheck(board);
  } else if (columnWinCheck(board) == true) {
    return columnWinCheck(board);
  } else if (diagonalWinCheck(board) == true) {
    return diagonalWinCheck(board);
  } else {
    return false;
  }
};

module.exports = {
  winChecker,
};
