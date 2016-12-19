'use strict'

angular.module('ApiConsumator')
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'TReturnerController',
            controllerAs: 'treturnerConsum',
            templateUrl:'./views/TReturnerConsum_view.html',
        })
 
        .otherwise({ redirectTo: '/' });
}])

.config(['$locationProvider', function($locationProvider){

    $locationProvider.html5Mode(true);
}])