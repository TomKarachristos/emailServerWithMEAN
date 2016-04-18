'use strict';

// Init the application configuration module for AngularJS application
// just a data structure who keeps the depencies
var ApplicationConfiguration = (function () {
  // Init module configuration options
  var applicationModuleName = 'emailServer';
  var applicationModuleVendorDependencies = ['ngResource', 'ngAnimate', 'ngMessages',
                                             'ui.router', 'ui.bootstrap', 'ui.utils', 'angularFileUpload'];

  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {//here we make public the methods and variables
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();
