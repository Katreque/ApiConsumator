describe('TReturner Controller', function(){
    it('teste do teste do teste para saber quanto é 2 + 2', function(){
        expect(2+2).toEqual(4);
    });
});

describe('Esse Teste e tipo Birrlll!', function(){
    it('sai de casa, codei pra', function(){
        expect("birll").toEqual("birll");
    })
})

describe('TReturnerController', function() {
    var _rootScope, _scope, _q, ServiceConsultaDeTs, _window;
    var NOME_CONTROLLER = 'TReturnerController as ctrl';

    beforeEach(module('ApiConsumator'));

    beforeEach(inject(function($injector) {
        _rootScope = $injector.get('$rootScope')
        _scope = _rootScope.$new()
        _q = $injector.get('$q')
        ServiceConsultaDeTs = $injector.get('ServiceConsultaDeTs')
        _window = $injector.get('$window')
    }))

    it('Verifica se o objeto se inicia vazio', inject(function($controller) {
        $controller(NOME_CONTROLLER, {$scope: _scope})

        expect(_scope.ctrl.recebeTs).toEqual({});
    }))

    it('Verifica se função de limpar está funcionando', inject(function($controller) {
        $controller(NOME_CONTROLLER, {$scope: _scope})

        _scope.ctrl.recebeTs = { 'teste': "Aro!",
                                 'teste2': "Aro2!"}
        _scope.ctrl.limpar();
        expect(_scope.ctrl.recebeTs).toEqual('');
    }))

    it('Verifica se o resultado de retorno é o esperado quando True', inject(function($controller) {
        spyOn(ServiceConsultaDeTs, 'consultarPorId').and.callFake(function() {
            return _q.resolve(_resultadoEsperado);
        })

        spyOn(_window, 'alert').and.callThrough();

        $controller(NOME_CONTROLLER, {$scope: _scope})

        var _resultadoEsperado = {"id":"1","Ttype":"Type 1","Ttext":"Tempz"}

        var _id = 1;

        _scope.ctrl.consultarPorId(_id);

        _rootScope.$digest();

        expect(_scope.ctrl.recebeTs).toEqual(_resultadoEsperado);
        expect(_window.alert).not.toHaveBeenCalled();
        expect(ServiceConsultaDeTs.consultarPorId).toHaveBeenCalledWith(_id);
    }))

    it('Verifica se o resultado de retorno é exception e retornou -1 do servidor.', inject(function($controller){
        spyOn(ServiceConsultaDeTs, 'consultarPorId').and.callFake(function() {
            return _q.reject(_resultadoEsperado);
        })

        spyOn(_window, 'alert').and.callThrough();
        
        $controller(NOME_CONTROLLER, {$scope: _scope})

        var _resultadoEsperado = -1;
        
        var _id = 0;

        _scope.ctrl.consultarPorId(_id);

        _rootScope.$digest();

        expect(_scope.ctrl.recebeTs).toEqual({});
        expect(_window.alert).toHaveBeenCalled();
        expect(_window.alert).toHaveBeenCalledWith('Falha ao conectar com o EndPoint!');
    }))
})