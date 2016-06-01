'use strict';

let board = require('./board');

const occupiedError = () => {
  $('#occupied-modal').modal('show');
};

const placeMarker = (cellId, index) => {
    console.log(cellId);
    console.log(board[index]);
    if (board[index] === 'X') {
      $("cellId").find(".x").show();
    } else if (board[index] === 'O') {
        $("cellId").find(".o").show();
    }
  };

module.exports = {
  occupiedError,
  placeMarker,
};
