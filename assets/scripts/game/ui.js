'use strict';

let board = require('./board');
const app = require('../app');
// const stats = require('./statistics-filter');
// const table = require('./build-table')

const occupiedError = () => {
  $('#occupied-modal').modal('show');
};

const placeMarker = (cellId, index) => {
    if (board[index] === 'x') {
      $('#' + cellId).find(".x").show(500);
    } else if (board[index] === 'o') {
        $('#' + cellId).find(".o").show(500);
    }
  };

const playerWin = (winner) => {
  if (winner === 'x') {
      $('#win-x-modal').modal('show');
  } else if (winner === 'o') {
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
  console.log(data.games.length);
};

const gameStatsSuccess = (data) => {
  $("#games-played").text(data.games.length);
  console.log(data.games.length);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  boardClear();
  console.log(app.game);
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

const failure = (error) => {
  console.error(error);
};

const uiHandlers = () => {
};

module.exports = {
  occupiedError,
  placeMarker,
  playerWin,
  boardClear,
  tieAlert,
  success,
  failure,
  createGameSuccess,
  updateGameSuccess,
  gameStatsSuccess,
};
