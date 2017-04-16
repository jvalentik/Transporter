import { Observable } from 'rxjs/Observable';
/**
 * Created by johny on 16/04/2017.
 */

export const translateServiceStub = {
  currentLang: '',
  addLangs: function(array: Array<string>) { },
  setDefaultLang: function(lang: string) { this.currentLang = lang; },
  use: function(lang: string) { this.currentLang = lang; },
  getBrowserLang: function () { return 'en'; },
  getBrowserCultureLang: function () { return 'en-US'; },
  get: function (param: string): Observable<any> {
    return Observable.create((observer) => {
      observer.next('test');
      observer.complete();
    });
  }
};


