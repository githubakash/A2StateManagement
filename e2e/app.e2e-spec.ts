import { A2StateManagementPage } from './app.po';

describe('a2-state-management App', () => {
  let page: A2StateManagementPage;

  beforeEach(() => {
    page = new A2StateManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
