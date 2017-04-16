import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../app/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';
/**
 * Created by johny on 16/04/2017.
 */

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    RouterLinkStubDirective,
    RouterOutletStubComponent,
  ],
  exports: [
    SharedModule,
    TranslateModule
  ]
})
export class TestingHelperModule { }
