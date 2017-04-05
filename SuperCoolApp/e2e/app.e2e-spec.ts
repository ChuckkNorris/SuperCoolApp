import { SuperCoolAppPage } from './app.po';

describe('super-cool-app App', () => {
  let page: SuperCoolAppPage;

  beforeEach(() => {
    page = new SuperCoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
