'use strict';

let board = require('./board');

const occupiedError = () => {
  $('#occupied-modal').modal('show');
};

const placeMarker = (cellId, index) => {
    if (board[index] === 'X') {
      $('#' + cellId).find(".x").show(500);
    } else if (board[index] === 'O') {
        $('#' + cellId).find(".o").show(500);
    }
  };

const playerWin = (winner) => {
  if (winner === 'X') {
      $('#win-x-modal').modal('show');
  } else if (winner === 'O') {
      $('#win-o-modal').modal('show');
  }
};

const tieAlert = () => {
  $('#tie-modal').modal('show');
};

const boardClear = () => {
  $(".x").hide();
  $(".o").hide();
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  occupiedError,
  placeMarker,
  playerWin,
  boardClear,
  tieAlert,
  success,
  failure,
};
