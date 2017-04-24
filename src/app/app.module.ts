import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { TransportsModule } from './transports/transports.module';
import { CoreModule } from './core/core.module';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    AgmCoreModule.forRoot(environment.googleMaps),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    HttpModule,
    SharedModule,
    TransportsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
