describe('ModeloConsultaDeTs', function() {
    var ModeloConsultaDeTs;

    beforeEach(module('ApiConsumator'))

    beforeEach(inject(function($injector) {
        ModeloConsultaDeTs = $injector.get('ModeloConsultaDeTs')
    }))

    describe('criação', function() {
        it('deve ter as propriedades default preenchidas corretamente', function() {
            var _m = new ModeloConsultaDeTs();

            expect(_m.Ttype).toBe('')
            expect(_m.Ttext).toBe('')
        })

        it('deve ter as propriedades default sobrescritas corretamente', function() {
            var _objPassado = {
                Ttype: '1',
                Ttext: '999',
                outraInfo: true
            }

            var _m = new ModeloConsultaDeTs(_objPassado);

            expect(_m.Ttype).toBe(_objPassado.Ttype)
            expect(_m.Ttext).toBe(_objPassado.Ttext)
            expect(_m.outraInfo).toBe(_objPassado.outraInfo)
        })
    })

    describe('typePreenchido', function() {
        it('deve retornar false, porque a instância é vazia - sem type', function() {
            var _m = new ModeloConsultaDeTs();

            expect(_m.typePreenchido()).toBe(false)
        })

        it('deve retornar false, porque a instância é vazia - type é string vazia', function() {
            var _m = new ModeloConsultaDeTs({Ttype: ''});

            expect(_m.typePreenchido()).toBe(false)
        })

        it('deve retornar false, porque a instância é vazia - com type preenchido', function() {
            var _m = new ModeloConsultaDeTs({Ttype: 'yo!'});

            expect(_m.typePreenchido()).toBe(true)
        })
    })

    describe('textPreenchido', function() {
        it('deve retornar false, porque a instância é vazia - sem type', function() {
            var _m = new ModeloConsultaDeTs();

            expect(_m.textPreenchido()).toBe(false)
        })

        it('deve retornar false, porque a instância é vazia - type é string vazia', function() {
            var _m = new ModeloConsultaDeTs({Ttext: ''});

            expect(_m.textPreenchido()).toBe(false)
        })

        it('deve retornar false, porque a instância é vazia - com type preenchido', function() {
            var _m = new ModeloConsultaDeTs({Ttext: 'yo!'});

            expect(_m.textPreenchido()).toBe(true)
        })
    })

    describe('estaValido', function() {
        it('deve retornar false, porque o método typePreenchido recebeu false', function() {
            var _m = new ModeloConsultaDeTs();
            
            expect(_m.estaValido()).toBe(false)
        })

        it('deve retornar false, porque o método textPreenchido recebeu false', function() {
            var _m = new ModeloConsultaDeTs();
            
            expect(_m.estaValido()).toBe(false)
        })

        it('deve retornar true, pois ambos os métodos typePreenchido e textPreenchido retornaram true', function() {
            var _m = new ModeloConsultaDeTs({Ttype: 'yo!', Ttext: 'yo2!'});
            
            expect(_m.estaValido()).toBe(true)
        })
    })


})