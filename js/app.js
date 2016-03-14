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

/*
*
*
*       HELP METHODS
*
* */

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}