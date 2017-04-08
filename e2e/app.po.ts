import { browser, element, by } from 'protractor';

export class TransporterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root div h1')).getText();
  }
}
