'use strict';

const authEvents = require('./auth/events.js');
const boardEvents = require('./game/events.js');
// const authUiEvents = require('./auth/ui.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  boardEvents.gameHandlers();
  // authUiEvents.authUiHandlers();
});
