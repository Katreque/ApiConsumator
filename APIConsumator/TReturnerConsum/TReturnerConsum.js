'use strict';

angular.module('ControleConsulta')
    .factory('localizaId', function($http, apiConfig) {
        var localizaId = function(id){
            this.id = id;
            this.data = null;
            this.exception = null;
            this._consultar();
        };

        localizaId.prototype._consultar = function () {

             $http({

                method: 'GET',
                url: apiConfig.apiBase + '/trequest/' + this.id

            }).then((response) =>{
                
                this.data = response.data;
                
            }).catch((error) =>{

                this.exception = error.status;
            })
        }

        return localizaId;
    })

    .controller('TReturnerConsum', function($scope, localizaId) {
        var recebeTs = {}

        $scope.consultar = () => {
            var lid = new localizaId($scope.id);
             
            if(lid.exception != null){

                if(lid.exception === -1){
                    return alert("Falha ao conectar com o EndPoint!");
                }

                return alert("Erro 404 -  Id não Encontrado!");
            }

            $scope.recebeTs = lid.data;
        }

        $scope.limpar = () =>{

            $scope.id = null;
            $scope.recebeTs = null;
        }
    })