'use strict';

angular.module('ControleConsulta')
    .factory('ServiceConsultaDeTs', ['$http', '$q', 'apiConfig', function($http, $q, apiConfig) {
        var ConsultaDeTs = function(){}

        ConsultaDeTs.prototype.consultarPorId = function(id) {
            if(!id){

                return $q.reject({

                status: err.status
            })
        }else{
             return $http.get(apiConfig.apiBase + 'trequest/' + id)
            .then((response) =>{

              return response.data;   
            }).catch((err) =>{

                return $q.reject({
                    status: err.status
                });
            })
        }
    }

        return new ConsultaDeTs();
    }])
