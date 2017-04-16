import { browser, element, by } from 'protractor';

export class TransporterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root app-sidenav md-sidenav-container div div app-home p')).getText();
  }
}
