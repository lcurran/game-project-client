'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.signUpFail);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFail);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  if (app.user === undefined) {
    $('#sign-in-prompt-modal').modal('show');
  } else {
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
  }
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-in-nav');
};

module.exports = {
  addHandlers,
};
