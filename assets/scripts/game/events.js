'use strict';
const board = require('./board');
const filler = require('./board-filler');
const ui = require('./ui');
const win = require('./win');
const tie = require('./tie');
const api = require('./api');
const update = require('./update');
let app = require('../app')

const onCreateGame = () => {
  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onGetGameInfo = () => {
  api.getGameInfo()
  .done(ui.gameSearchSuccess)
  .fail(ui.failure);
};



const onCellSelect = (event) => {
  event.preventDefault();
  let cellId = ($(event.target).attr("id"));
  let index = cellId.replace(/\D/g,'');

  filler.cellFiller(index, cellId);
  win.winChecker(board);
  tie.tieChecker(board);

  if (app.user !== undefined) {
  update.updateGameData(board, index);
  }
};

const gameHandlers = () => {
  $('.x').on('click', ui.occupiedError);
  $('.o').on('click', ui.occupiedError);
  $('.grid').on('click', onCellSelect);    $('#win-x-modal').on('hidden.bs.modal', ui.boardClear);
  $('#win-o-modal').on('hidden.bs.modal', ui.boardClear);
  $('#tie-modal').on('hidden.bs.modal', ui.boardClear);
  $('#create-online-game').on('click', onCreateGame);
  $('#get-game-info').on('click', onGetGameInfo);
};

module.exports = {
  gameHandlers,
};
