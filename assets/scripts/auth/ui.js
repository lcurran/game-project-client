'use strict';

const app = require('../app.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const navFormCollapse = () => {
  $('.nav-forms').collapse('hide');
};

const signUpFail = () => {
  $('#error-modal').modal('show');
  $('#error-modal').find('.modal-body p').text('That user already exists');
  $('#sign-up').find('input:text').val('');
  $('#sign-up').find('input:password').val('');
};

// const

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signed-in-modal').modal('show');
  navFormCollapse();
  console.log(data);
};

const signInFail = () => {
  $('#error-modal').modal('show');
  $('#error-modal').find('.modal-body p').text('Incorrect sign in information');
  $('#sign-in').find('input:text').val('');
  $('#sign-in').find('input:password').val('');
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const changePasswordSuccess = () => {
  $('#password-changed-modal').modal('show');
  navFormCollapse();
};


//
// const signInNav = () => {
//   $('sign-up').collapse();
//
// };
//
// const authUiHandlers = () => {
//     $("#sign-in").on('click', signInNav);
//   };

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFail,
  signUpFail,
  // authUiHandlers

};
