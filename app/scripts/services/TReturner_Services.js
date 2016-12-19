'use strict';

angular.module('ApiConsumator')
    .factory('ServiceConsultaDeTs', ['$http', '$q', 'apiConfig', function ($http, $q, apiConfig) {
        var ConsultaDeTs = function () { }

        ConsultaDeTs.prototype.consultarPorId = function (id) {

            if (id === "" || id === undefined) {
                return $q.reject({
                    err: {"status": "400", "statusText":"Campo em branco!"}
                })
            }

            return $http.get(apiConfig.apiBase + 'trequest/' + id)
                .then((response) => {
                    return response.data;

                }).catch((err) => {
                    return $q.reject({
                     err: {"status": err.status, "statusText": "Id não encontrado!"}
                })
            }) 
        }

        return new ConsultaDeTs();
    }])
