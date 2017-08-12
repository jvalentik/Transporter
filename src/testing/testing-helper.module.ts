import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../app/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';

/**
 * Created by johny on 16/04/2017.
 */

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
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
