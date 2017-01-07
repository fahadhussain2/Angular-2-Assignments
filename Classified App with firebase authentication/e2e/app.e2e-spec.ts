import { ClassifiedApplicationWithFirebasePage } from './app.po';

describe('classified-application-with-firebase App', function() {
  let page: ClassifiedApplicationWithFirebasePage;

  beforeEach(() => {
    page = new ClassifiedApplicationWithFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
