import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase/app';
import * as fromRoot from '../../../reducers';
import * as Layout from '../../actions/layout.actions';
import * as User from '../../actions/user.actions';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidenav: Observable<boolean>;
  sidenavMode: Observable<string>;
  viewList: Observable<Array<NavItem>>;
  userLoggedIn: Observable<boolean>;
  loggedInUser: Observable<firebase.User>;
  isOpen: boolean;
  mode: string;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.store.dispatch(new Layout.ResizeWindowAction({
      width: event.target.innerWidth,
      height: event.target.innerHeight
    }));
  }

  constructor(private translate: TranslateService,
              private store: Store<fromRoot.State>) {
    this.showSidenav = this.store.select(fromRoot.getShowSidenav);
    this.sidenavMode = this.store.select(fromRoot.getSidenavMode);
    this.viewList = this.store.select(fromRoot.getViewList);
    this.userLoggedIn = this.store.select(fromRoot.isLoggedIn);
    this.loggedInUser = this.store.select(fromRoot.getLoggedInUser);
  }

  ngOnInit() {
    this.store.select(fromRoot.getShowSidenav)
        .subscribe(isOpen => {
          this.isOpen = isOpen;
        });
    this.store.select(fromRoot.getSidenavMode)
        .subscribe(mode => {
          this.mode = mode;
        });
    this.translate.addLangs(['en', 'sk']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.store.dispatch(new Layout.SetLocaleAction(this.translate.getBrowserCultureLang().split('-')[0]));
    this.translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

  onToggleSidenav(): void {
    if (this.isOpen) {
      this.store.dispatch(new Layout.CloseSideNavAction());
    } else {
      this.store.dispatch(new Layout.OpenSidenavAction());
    }
  }

  onSidenavClosed(): void {
    this.store.dispatch(new Layout.CloseSideNavAction());
  }

  closeIfSmall(): void {
    if (this.mode === 'over') {
      this.store.dispatch(new Layout.CloseSideNavAction());
    }
  }

  onLogin(): void {
    this.store.dispatch(new User.LogInAction());
  }

  onLogout(): void {
    this.store.dispatch(new User.LogOffAction());
  }
}
