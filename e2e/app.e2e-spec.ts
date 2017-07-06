import { AbdPage } from './app.po';

describe('abd App', () => {
  let page: AbdPage;

  beforeEach(() => {
    page = new AbdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
