'use strict';

const authEvents = require('./auth/events.js');
const boardEvents = require('./game/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  boardEvents.gameHandlers();
});
