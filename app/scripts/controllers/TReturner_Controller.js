(function(){
'use strict'

angular.module('ApiConsumator')
.controller('TReturnerController', ['ServiceConsultaDeTs', function(ServiceConsultaDeTs) {
        var recebeTs = {};
        var self = this;

        self.consultarPorId = function() {

            ServiceConsultaDeTs.consultarPorId(self.id)
            .then(function(res) {                
                return self.recebeTs = res;
            })
            .catch(function(err) {
                if(err === -1){
                    return alert("Falha ao conectar com o EndPoint!");
                }

                return alert("Erro "+err.err.status+" - "+err.err.statusText+"");
            })        
        }

        self.limpar = function() {
            self.id = "";
            self.recebeTs = "";
        }
    }])
}())