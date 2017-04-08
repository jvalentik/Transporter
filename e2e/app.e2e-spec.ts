import { TransporterPage } from './app.po';

describe('transporter App', () => {
  let page: TransporterPage;

  beforeEach(() => {
    page = new TransporterPage();
  });

  it('should display message saying app works', (done) => {
    page.navigateTo();
    page.getParagraphText().then((onResolve) => {
      expect(onResolve).toEqual('app works!');
      done();
    });
  });
});
