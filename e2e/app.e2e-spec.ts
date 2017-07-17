import { MapApPage } from './app.po';

describe('map-ap App', function() {
  let page: MapApPage;

  beforeEach(() => {
    page = new MapApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
