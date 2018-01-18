import { ControleEstacionamentoItssFrontendPage } from './app.po';

describe('controle-estacionamento-itss-frontend App', function() {
  let page: ControleEstacionamentoItssFrontendPage;

  beforeEach(() => {
    page = new ControleEstacionamentoItssFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
