'use strict';
const board = require('./board');
const filler = require('./board-filler');
const ui = require('./ui');
const win = require('./win');
const tie = require('./tie');
const api = require('./api');
const update = require('./update');
let app = require('../app');
const end = require('./end-game');

const onCreateGame = () => {
  end.boardReset();
  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onGameEnd = () => {
  end.boardReset();
  ui.boardClear();
  if (app.user !== undefined) {
  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure);
}
};

const onGet = () => {
  api.getGameInfo()
  .done(ui.success)
  .fail(ui.failure);
};

const onGameStats = () => {
  api.getGameInfo()
    .done(ui.gameStatsSuccess)
    .fail(ui.failure);
};



const onCellSelect = (event) => {
  event.preventDefault();
  let cellId = ($(event.target).attr("id"));
  let index = cellId.replace(/\D/g,'');

  filler.cellFiller(cellId, index);
  win.winChecker(board);
  tie.tieChecker(board);
  if ((win.winChecker(board) !== undefined || tie.tieChecker(board) !== undefined) && app.user !== undefined) {
    update.updateGameData(board, index);
  } else if (app.user !== undefined) {
    update.endGameData(board, index);
  }
};

const gameHandlers = () => {
  $('.x').on('click', ui.occupiedError);
  $('.o').on('click', ui.occupiedError);
  $('.grid').on('click', onCellSelect);
  // $('#win-x-modal').on('hidden.bs.modal', ui.boardClear);
  $('#win-x-modal').on('hidden.bs.modal', onGameEnd);
  // $('#win-o-modal').on('hidden.bs.modal', ui.boardClear);
  $('#win-o-modal').on('hidden.bs.modal', onGameEnd);
  // $('#tie-modal').on('hidden.bs.modal', ui.boardClear);
  $('#tie-modal').on('hidden.bs.modal', onGameEnd);
  $('#create-online-game').on('click', onCreateGame);
  $('#get-game-info').on('click', onGet);
  $('#game-stats-search').on('click', onGameStats);
  $('#signed-in-modal').on('hidden.bs.modal', onCreateGame);
};

module.exports = {
  gameHandlers,
  onCreateGame,
};
