'use strict';

// PasswordValidator service used for testing the password strength
angular.module('users').factory('PasswordValidator', ['$window',
  function ($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;
    owaspPasswordStrengthTest.config({
      allowPassphrases: true,
      maxLength: 128,
      minLength: 7,
      minPhraseLength: 20,
      minOptionalTestsToPass : 2,
    });
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
