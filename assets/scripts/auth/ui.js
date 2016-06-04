'use strict';

const app = require('../app.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signed-in-modal').modal('show');
  // $("#sign-in-nav").hide();
  // $("#sign-up-nav").hide();
  // $("#sign-out").show();
  // $("#change-password-nav").show();
  console.log(data);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
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
  // authUiHandlers

};
