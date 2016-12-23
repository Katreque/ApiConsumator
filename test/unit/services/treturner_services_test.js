describe('TReturnerService', function(){
    var _rootScope, _httpBackend, ServiceConsultaDeTs, ModeloConsultaDeTs;
    var URL_CONSULTA_ID = '/api/trequest/';

    beforeEach(module('ApiConsumator'));

    beforeEach(inject(function($injector){
        _rootScope = $injector.get('$rootScope');        
        _httpBackend = $injector.get('$httpBackend');
        ServiceConsultaDeTs = $injector.get('ServiceConsultaDeTs');
        ModeloConsultaDeTs = $injector.get('ModeloConsultaDeTs');
    }))

    describe('consultaPorId', function() {
        it('Verifica se irá trazer a mensagem correta quando o usuário não informar o id e fizer a consulta', function(){
            var id = "";

            ServiceConsultaDeTs.consultarPorId(id)
                .then(function(r) {
                    expect(true).toBe(false)
                })
                .catch(function(err) {
                    expect(err instanceof TypeError).toBe(true);
                    expect(err.message).toBe('Id não informado.');
                })
            
            _rootScope.$digest();
        });

        it('deve tentar buscar por id, mas endpoint retorna erro 400 - com mensagem', function() {
            var _id = 1;
            var MSG_ERRO = 'deu ruim'
            var STATUS_ERRO = 400

            _httpBackend.expectGET(URL_CONSULTA_ID + _id).respond(STATUS_ERRO, {msg: MSG_ERRO})

            ServiceConsultaDeTs.consultarPorId(_id)
                .then(function(r) {
                    expect(true).toBe(false)
                })
                .catch(function(e) {
                    expect(e.status).toEqual(STATUS_ERRO)
                    expect(e.statusText).toEqual(MSG_ERRO)
                })

            _httpBackend.flush()
        })

        it('Deve tentar buscar por id, mas endpoint retorna erro 400 - sem mensagem [Tratamento geral]', function() {
            var _id = 1;
            var MSG_ERRO = 'Id não encontrado!'
            var STATUS_ERRO = 400

            _httpBackend.expectGET(URL_CONSULTA_ID + _id).respond(STATUS_ERRO, {msg: ""})

            ServiceConsultaDeTs.consultarPorId(_id)
                .then(function(r) {
                    expect(true).toBe(false)
                })
                .catch(function(e) {
                    expect(e.status).toEqual(STATUS_ERRO)
                    expect(e.statusText).toEqual(MSG_ERRO)
                })

            _httpBackend.flush()
        })

        it('Buscar por id e o endpoit retorna corretamente.', function() {
            var _id = 1;
            var _status = 200
            var payload = {Ttype: '1',
                            Ttext: 'aro'}

            _httpBackend.expectGET(URL_CONSULTA_ID + _id).respond(_status, payload)

            ServiceConsultaDeTs.consultarPorId(_id)
                .then(function(r) {
                    expect(r).toEqual(new ModeloConsultaDeTs(payload))
                })
                .catch(function(e) {
                    expect(true).toBe(false)
                })

            _httpBackend.flush()
        })
    })
})