'use strict';
const board = require('./board');
const filler = require('./board-filler');
const ui = require('./ui');
const win = require('./win');
const tie = require('./tie');


const onCellSelect = (event) => {
  event.preventDefault();
  let cellId = ($(event.target).attr("id"));

  filler.cellFiller(cellId);
  win.winChecker(board);
  tie.tieChecker(board);


  // api.updateGame();

};

const gameHandlers = () => {
  $('.grid').on('click', onCellSelect);
  $('.x').on('click', ui.occupiedError);
  $('.o').on('click', ui.occupiedError);    $('#win-x-modal').on('hidden.bs.modal', ui.boardClear);
  $('#win-o-modal').on('hidden.bs.modal', ui.boardClear);
  $('#tie-modal').on('hidden.bs.modal', ui.boardClear);
};

module.exports = {
  gameHandlers,
};
