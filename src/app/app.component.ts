import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'sk']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  onLanguageChange(): void {
    if (this.translate.currentLang === 'en') {
      this.translate.use('sk');
    } else {
      this.translate.use('en');
    }
  }

  getCurrentLAnguage(): string {
    return this.translate.currentLang.toUpperCase();
  }
}
