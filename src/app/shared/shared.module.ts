import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    AgmCoreModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    GoogleMapsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    TranslateModule
  ]
})
export class SharedModule { }
