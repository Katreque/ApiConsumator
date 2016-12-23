(function(){
'use strict'

angular.module('ApiConsumator')
.controller('TReturnerController', ['$window', 'ServiceConsultaDeTs', function($window, ServiceConsultaDeTs) {
        var self = this;
        self.recebeTs = {};
    
        self.consultarPorId = function(id) {

            ServiceConsultaDeTs.consultarPorId(id)
            .then(function(res) {                
                return self.recebeTs = res;
            })
            .catch(function(err) {
                if(err === -1){
                    return $window.alert("Falha ao conectar com o EndPoint!");
                }

                return $window.alert("Erro "+err.status+" - "+err.statusText+"");
            })        
        }

        self.limpar = function() {
            self.id = "";
            self.recebeTs = {};
        }
    }])
}())