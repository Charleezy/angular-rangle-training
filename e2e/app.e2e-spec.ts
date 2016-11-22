import { AngularLoyaltyPage } from './app.po';

describe('angular-loyalty App', function() {
  let page: AngularLoyaltyPage;

  beforeEach(() => {
    page = new AngularLoyaltyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
