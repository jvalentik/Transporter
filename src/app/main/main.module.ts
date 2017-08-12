import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const COMPONENTS = [
  NavItemComponent,
  ToolbarComponent,
  SidenavComponent,
  AppComponent,
  NotFoundPageComponent,
];

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MainModule { }
