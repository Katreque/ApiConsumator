describe('Tela Principal', function(){

  beforeEach(function(){
    browser.get('http://127.0.0.1:1307/');
  })

  it('Verifica se ao informar o número 1 no input, retorna corretamente o tipo e a descrição.', function(){
    element(by.id('entrada')).sendKeys(1);
    element(by.id('btnConsulta')).click();

    browser.sleep(1000);
    expect(element(by.id('tipo')).getAttribute('value')).toEqual("Type 1");
    expect(element(by.id('descricao')).getAttribute('value')).toEqual("Tempz");
  })

  it('Verifica se ao informar o número 2 no input, retorna corretamente o tipo e a descrição.', function(){
    element(by.id('entrada')).sendKeys(2);
    element(by.id('btnConsulta')).click();

    browser.sleep(1000);
    expect(element(by.id('tipo')).getAttribute('value')).toEqual("Type 2");
    expect(element(by.id('descricao')).getAttribute('value')).toEqual("Tapu Koko");
  })

  it('Verifica se ao informar o número 3 no input, retorna corretamente o tipo e a descrição.', function(){
    element(by.id('entrada')).sendKeys(3);
    element(by.id('btnConsulta')).click();

    browser.sleep(1000);
    expect(element(by.id('tipo')).getAttribute('value')).toEqual("Type 23");
    expect(element(by.id('descricao')).getAttribute('value')).toEqual("teLEPorte");
  })

  it('Verifica se retorna a mensagem correta quando o número encontrado é inexistente.', function(){
    element(by.id('entrada')).sendKeys(4);
    element(by.id('btnConsulta')).click();

    browser.sleep(1000);
    var alerta = browser.switchTo().alert();
    expect(alerta.getText()).toEqual("Erro 404 - Id não encontrado!");
  })
})
