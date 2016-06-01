'use strict';

const authEvents = require('./auth/events.js');
const boardEvents = require('./logic/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  boardEvents.gameHandlers();
});
