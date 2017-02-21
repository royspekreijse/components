import { RspComponentsPage } from './app.po';

describe('rsp-components App', function() {
  let page: RspComponentsPage;

  beforeEach(() => {
    page = new RspComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
