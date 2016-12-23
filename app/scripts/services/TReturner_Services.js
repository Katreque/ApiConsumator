(function(){
'use strict'

angular.module('ApiConsumator')
    .factory('ServiceConsultaDeTs', ['$http', '$q', 'apiConfig', 'ModeloConsultaDeTs', function ($http, $q, apiConfig, ModeloConsultaDeTs) {
        var ConsultaDeTs = function () { }

        ConsultaDeTs.prototype.consultarPorId = function (id) {
            if (id === "" || id === undefined) {
                return $q.reject(new TypeError('Id não informado.'));
            }

            return $http.get(apiConfig.apiBase + 'trequest/' + id)
                .then(function(response) {
                    return new ModeloConsultaDeTs(response.data);
                }).catch(function(err) {
                    return $q.reject({
                         "status": err.status || 400, 
                         "statusText": err.data.msg || "Id não encontrado!"
                })
            }) 
        }
        return new ConsultaDeTs();
    }])
}())
