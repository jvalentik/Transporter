import { browser, element, by } from 'protractor';
import { promise } from 'selenium-webdriver';

export class TransporterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(
      by.css('app-root app-sidenav md-sidenav-container div div app-home p'))
      .getText();
  }

  clickMenu(): promise.Promise<void> {
    return element(
      by.css('app-root app-toolbar md-toolbar div md-toolbar-row button'))
      .click();
  }

  isMenuShown(): promise.Promise<boolean> {
    return element(
      by.css('app-root app-sidenav md-sidenav-container md-sidenav'))
      .getAttribute('class')
      .then((css) => {
        console.log(JSON.stringify(css));
        return css.split(' ').includes('mat-sidenav-opened');
       });
  }
}
