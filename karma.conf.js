'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  defaultAssets = require('./config/assets/default'),
  testAssets = require('./config/assets/test'),
  testConfig = require('./config/env/test'),
  karmaReporters = ['progress'];
  karmaReporters.push('html');
  karmaReporters.push('mocha');
//if in the file config/env/test Coverage is true, do it!
//is set to true during grunt "coverage"
if (testConfig.coverage) {
  karmaReporters.push('coverage');
}

// Karma configuration
module.exports = function (karmaConfig) {
  karmaConfig.set({
    // Frameworks to use
    frameworks: ['jasmine'],

    //Preprocessors in Karma allow you to do some work with your files before they get served to the browser. These are configured in the preprocessors block of the configuration file:
    preprocessors: {
      /*ng-html2js:
        To make Karma serve HTML templates, we have to use a preprocessor that turns HTML templates into JavaScript strings and registers them with Angular’s $templateCache.
        This means that Angular can access the templates without having to make separate HTTP requests. All we need to do then is serve the processed template JavaScript.
      */
      'modules/*/client/views/**/*.html': ['ng-html2js'],
      //instabul : JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests.
      //coverage depends in instabul:  Its use to see how the code coverage of our test setup can be measured.
      'modules/core/client/app/config.js': ['coverage'],
      'modules/core/client/app/init.js': ['coverage'],
      'modules/*/client/*.js': ['coverage'],
      'modules/*/client/config/*.js': ['coverage'],
      'modules/*/client/controllers/*.js': ['coverage'],
      'modules/*/client/directives/*.js': ['coverage'],
      'modules/*/client/services/*.js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'mean',
      // example:
      //   example strips 'public/' from anywhere in the path
      //   module(app/templates/template.html) => app/public/templates/template.html
      //   var cacheId = filepath.strip('public/', '');
      cacheIdFromPath: function (filepath) {
        return filepath;
      },
    },

    // List of files / patterns to load in the browser
    files: _.union(defaultAssets.client.lib.js, defaultAssets.client.lib.tests, defaultAssets.client.js, testAssets.tests.client, defaultAssets.client.views),

    // Test results reporter to use
    // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: karmaReporters,

    // Options for the generate html unit-test output. 
    htmlReporter: {
      outputFile: 'run-unit-test.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description'
    },
    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging, what kind of console will  be output in testing. 
    // Possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
    logLevel: karmaConfig.LOG_INFO,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJSPhantomJS is a browser which runs headlessly (i.e. doesn't draw out the the screen). The benefits that brings is speed — 
    //   if you're controlling an actual programme on your computer, you've a certain overhead in booting up the browser, configuring a profile etc.
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // If true, it capture browsers, run tests and exit
    singleRun: false // ren all the test again when you change a js file(either code either test)
  });
};
