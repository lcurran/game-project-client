'use strict';

const app = require('../app.js');

const getGameInfo = () => {
  return $.ajax ({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const createGame = () => {
  return $.ajax ({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const updateGame = (data) => {
  return $.ajax ({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  });
};


module.exports = {
  createGame,
  getGameInfo,
  updateGame
};
