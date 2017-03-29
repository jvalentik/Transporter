import { TransporterPage } from './app.po';

describe('transporter App', () => {
  let page: TransporterPage;

  beforeEach(() => {
    page = new TransporterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
