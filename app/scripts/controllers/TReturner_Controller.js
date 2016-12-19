'use strict';

angular.module('ApiConsumator')
.controller('TReturnerController', ['ServiceConsultaDeTs', function(ServiceConsultaDeTs) {

        var recebeTs = {}

        this.consultarPorId = () => {

            ServiceConsultaDeTs.consultarPorId(this.id)
            .then((res)=>{
                
                return this.recebeTs = res;
            })
            .catch((err)=>{
                if(err === -1){
                    return alert("Falha ao conectar com o EndPoint!");
                }
            return alert("Erro "+err.err.status+" - "+err.err.statusText+"");
        })        
    }

        this.limpar = ()=>{

            this.id = "";
            this.recebeTs = "";
        }
    }])