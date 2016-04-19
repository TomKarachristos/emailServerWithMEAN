'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('authentication.signin', null, {// $state.transitionTo(to, toParams [, options]
        location: false// If true will update the url in the location bar,
      });
    }); 

    /*
    //TODO Redirect to 404 when route not found and you are sign in!
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {// $state.transitionTo(to, toParams [, options]
        location: false// If true will update the url in the location bar,
      });
    });
    */

    // http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider
    // Home state routing
    $stateProvider
    /*TODO Appear only when you are sign in
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {//Arbitrary data object, useful for custom configuration
        ignoreState: true
      }
    })
    */
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
