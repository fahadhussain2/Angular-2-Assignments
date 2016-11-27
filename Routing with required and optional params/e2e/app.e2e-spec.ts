import { BuiltInComponentsPage } from './app.po';

describe('built-in-components App', function() {
  let page: BuiltInComponentsPage;

  beforeEach(() => {
    page = new BuiltInComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
