'use strict';

// PasswordValidator service used for testing the password strength
angular.module('users').factory('PasswordValidator', ['$window',
  function ($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;
    owaspPasswordStrengthTest.config({
      allowPassphrases       : true,
      maxLength              : 128,
      minLength              : 7,
      minPhraseLength        : 20,
      minOptionalTestsToPass : 3,
    });
    owaspPasswordStrengthTest.tests.optional = [
      // require at least one lowercase letter
      function(password) {
        if (!/[a-z]/.test(password)) {
          return 'The password must contain at least one lowercase letter.';
        }
      },

      // require at least one number
      function(password) {
        if (!/[0-9]/.test(password)) {
          return 'The password must contain at least one number.';
        }
      },

      // require at least one special character
      function(password) {
        if (!/[^A-Za-z0-9]/.test(password)) {
          return 'The password must contain at least one special character.';
        }
      }
    ];

    return {
      getResult: function (password) {
        var result = owaspPasswordStrengthTest.test(password);
        return result;
      },
      getPopoverMsg: function () {
        var popoverMsg = 'Please enter a password with at least 7 characters (including numbers, lowercase, upppercase, and special characters)';
        return popoverMsg;
      }
    };
  }
]);
