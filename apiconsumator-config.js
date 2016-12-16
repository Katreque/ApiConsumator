'use strict'

angular.module('ApiConsumator')
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'TReturnerController',
            templateUrl:'TReturnerConsum/TReturnerConsum.html',
        })
 
        .otherwise({ redirectTo: '/' });
}])