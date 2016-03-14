angular.module('ai', ['ui.router']);

angular.module('ai').config(function($stateProvider, $urlRouterProvider) {
   $stateProvider.state('home', {
        url: '/',
        views: {
            '': {
                templateUrl: 'partial/home/home.html',
                controller: 'MainCtrl'
            }
        }
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});