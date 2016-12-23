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

        ModeloConsulta.prototype.estaValido =  function(){
            return !!this.Ttext.length && !!this.Ttype.length
        }

        return ModeloConsulta;    
    }])
}())
