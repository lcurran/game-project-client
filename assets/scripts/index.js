'use strict';

const authEvents = require('./auth/events.js');
const boardEvents = require('./game/events.js');
// const uiEvents = require('./ui.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  boardEvents.gameHandlers();
  // uiEvents.uiHa1ndlers();
});
