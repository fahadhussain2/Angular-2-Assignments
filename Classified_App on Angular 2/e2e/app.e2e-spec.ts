import { ClassifiedApp1Page } from './app.po';

describe('classified-app1 App', function() {
  let page: ClassifiedApp1Page;

  beforeEach(() => {
    page = new ClassifiedApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
