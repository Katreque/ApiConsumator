'use strict';

angular.module('ControleConsulta')
.controller('TReturnerController', ['$scope', 'ServiceConsultaDeTs', function($scope, ServiceConsultaDeTs) {

        var recebeTs = {}

        $scope.consultarPorId = () => {

            ServiceConsultaDeTs.consultarPorId($scope.id)
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
    }])