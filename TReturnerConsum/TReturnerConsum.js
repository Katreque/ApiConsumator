'use strict';

angular.module('ControleConsulta')
    .factory('localizaId', function($http, $q, apiConfig) {
        var localizaId = function(){}

        localizaId.prototype._consultar = function(id){

             return $http.get(apiConfig.apiBase + 'trequest/' + id)
            .then((response) =>{

              return response.data;   
            }).catch((err) =>{

                return $q.reject(err.status);
            })
        }

        return new localizaId();
    })

    .controller('TReturnerConsum', function($scope, localizaId) {

        var recebeTs = {}

        $scope.consultar = () => {

            var returnPromisse = localizaId._consultar($scope.id)
            .then((res)=>{
                
                return $scope.recebeTs = res;
            })
            .catch((err)=>{

                if(err === -1){
                    return alert("Falha ao conectar com o EndPoint!");
                }
            
            return alert("Erro 404 -  Id não Encontrado!");
        })        
    }

        $scope.limpar = () =>{

            $scope.id = "";
            $scope.recebeTs = "";
        }
    })