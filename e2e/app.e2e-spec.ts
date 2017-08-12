
import { $, browser, by, element } from 'protractor';


xdescribe('transporter App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a toolbar with title Transporter manager', () => {
    element(by.css('md-toolbar-row.mat-toolbar-row'))
      .getText()
      .then(title => {
        expect(title).toContain('Transport manager');
      });
  });

  xit('should show side menu on start', () => {
    $('md-sidenav').getAttribute('class')
                   .then(classAttribute => {
                     expect(classAttribute).toContain('mat-sidenav-opened');
                   });
  });

  it('should close menu when clicked menu button', () => {
    browser.get('/');
    const sideNav = $('md-sidenav');
    $('button.mat-icon-button').click()
      .then(() => sideNav.getAttribute('class'))
      .then(classAttribute => {
        expect(classAttribute).not.toContain('mat-sidenav-opened');
      });
  });
});
