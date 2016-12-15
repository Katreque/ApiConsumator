'use strict';

angular.module('ControleConsulta', []);

angular.module('ApiConsumator', [
    'ControleConsulta',
    'ngRoute', 
    'ngAnimate',
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'TReturnerConsum',
            templateUrl:'TReturnerConsum/TReturnerConsum.html',
        })
 
        .otherwise({ redirectTo: '/' });
}])