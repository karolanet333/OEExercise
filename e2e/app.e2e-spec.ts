import { OePage } from './app.po';

describe('oe App', () => {
  let page: OePage;

  beforeEach(() => {
    page = new OePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
