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
        expect(_scope.ctrl.recebeTs).toEqual({});
    }))

    it('Verifica se o resultado de retorno é o esperado e o id é 1', inject(function($controller) {
        var _resultadoEsperado = {"id":"1","Ttype":"Type 1","Ttext":"Tempz"}

        spyOn(ServiceConsultaDeTs, 'consultarPorId').and.callFake(function() {
            return _q.resolve(_resultadoEsperado);
        })

        spyOn(_window, 'alert').and.callThrough();

        $controller(NOME_CONTROLLER, {$scope: _scope})

        var _id = 1;

        _scope.ctrl.consultarPorId(_id);

        _rootScope.$digest();

        expect(_scope.ctrl.recebeTs).toEqual(_resultadoEsperado);
        expect(_window.alert).not.toHaveBeenCalled();
        expect(ServiceConsultaDeTs.consultarPorId).toHaveBeenCalledWith(_id);
    }))

    it('Verifica se o resultado de retorno é exception e retornou -1 do servidor.', inject(function($controller){
        var _resultadoEsperado = -1;

        spyOn(ServiceConsultaDeTs, 'consultarPorId').and.callFake(function() {
            return _q.reject(_resultadoEsperado);
        })

        spyOn(_window, 'alert').and.callThrough();
        
        $controller(NOME_CONTROLLER, {$scope: _scope})
        
        var _id = 0;

        _scope.ctrl.consultarPorId(_id);

        _rootScope.$digest();

        expect(_scope.ctrl.recebeTs).toEqual({});
        expect(_window.alert).toHaveBeenCalledWith('Falha ao conectar com o EndPoint!');
    }))

    it('Verifica se o resultado de retorno é uma exception e retornou algum erro em específico.', inject(function($controller){
        var _resultadoEsperado = {status:'404',
                                  statusText:'Not Found'};

        spyOn(ServiceConsultaDeTs, 'consultarPorId').and.callFake(function() {
            return _q.reject(_resultadoEsperado);
        })

        spyOn(_window, 'alert').and.callThrough();
        
        $controller(NOME_CONTROLLER, {$scope: _scope})

        var _id = 0;

        _scope.ctrl.consultarPorId(_id);

        _rootScope.$digest();

        expect(_scope.ctrl.recebeTs).toEqual({});
        expect(_window.alert).toHaveBeenCalledWith('Erro 404 - Not Found');
    }))
})