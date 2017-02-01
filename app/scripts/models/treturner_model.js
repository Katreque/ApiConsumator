(function(){
'use strict'

angular.module('ApiConsumator')
    .factory('ModeloConsultaDeTs', [function(){
        var ModeloConsulta = function(modelo) {
            this.Ttype = '';
            this.Ttext = '';

            angular.extend(this, modelo)
        }

        ModeloConsulta.prototype.typePreenchido =  function(){
            return !!this.Ttype.length
        }

        ModeloConsulta.prototype.textPreenchido =  function(){
            return !!this.Ttext.length
        }

        ModeloConsulta.prototype.isValid =  function(valor){
            if(valor === null){
              return false;
            }
            return true;
        }

        return ModeloConsulta;
    }])
}())
