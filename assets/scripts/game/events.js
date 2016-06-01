'use strict';
// const board = require('./board');
const filler = require('./board-filler');


const onCellSelect = (event) => {
  event.preventDefault();
  let cellId = ($(event.target).attr("id"));
  let index = cellId.replace(/\D/g,'');

  filler.cellFiller(index);
  // api.updateGame();

};

const gameHandlers = () => {
  $('.grid').on('click', onCellSelect);
};

module.exports = {
  gameHandlers,
};