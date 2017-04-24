import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AgmCoreModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    CalendarModule.forRoot(),
    TranslateModule
  ],
  declarations: [
    GoogleMapsComponent
  ],
  exports: [
    CommonModule,
    CalendarModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    TranslateModule,
    GoogleMapsComponent
  ]
})
export class SharedModule { }
