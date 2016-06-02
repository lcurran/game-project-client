'use strict';
// const board = require('./board');
const filler = require('./board-filler');
const ui = require('./ui');


const onCellSelect = (event) => {
  event.preventDefault();
  let cellId = ($(event.target).attr("id"));
  filler.cellFiller(cellId);
  // api.updateGame();

};

const gameHandlers = () => {
  $('.grid').on('click', onCellSelect);
  $('.x').on('click', ui.occupiedError);
  $('.o').on('click', ui.occupiedError);
};

module.exports = {
  gameHandlers,
};
