'use strict';

let board = require('./board');
const app = require('../app');
const id = require('./id-filter');

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

// const success = (data) => {
//   console.log(data.games.length);
// };

const gameStatsSuccess = (data) => {
  $("#search-results").collapse('show');
  $("#games-played").text(data.games.length);
};

const gameIdSuccess = (data) => {
  $("#game-ids").collapse('show');
  id.buildGamesTable(data);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  boardClear();
};

const updateGameSuccess = (data) => {
  app.game = data.game;
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
  // success,
  failure,
  createGameSuccess,
  updateGameSuccess,
  gameStatsSuccess,
  gameIdSuccess,
};
