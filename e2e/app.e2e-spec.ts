import { CollectiveChangePage } from './app.po';

describe('collective-change App', function() {
  let page: CollectiveChangePage;

  beforeEach(() => {
    page = new CollectiveChangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
