import { TransporterPage } from './app.po';

describe('transporter App', () => {
  let page: TransporterPage;

  beforeEach(() => {
    page = new TransporterPage();
  });

  it('should display message saying home works', (done) => {
    page.navigateTo();
    page.getParagraphText()
        .then((onResolve) => {
          expect(onResolve).toEqual('home works!');
          done();
        });
  });

  it('should hide and show side menu', (done) => {
    page.navigateTo();
    page
      .isMenuShown()
      .then((onResolve) => {
        expect(onResolve).toBeTruthy();
        return Promise.resolve;
      })
      .then(() => {
        return page.clickMenu();
      })
      .then(() => {
        return page.isMenuShown();
      })
      .then((onResolve) => {
        expect(onResolve).toBeFalsy();
        done();
      });
  });
});
