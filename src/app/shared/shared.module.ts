import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { AppMaterialModule } from './app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import 'hammerjs';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { CapitalsPipe } from './capitals.pipe';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  declarations: [
    ViewHeaderComponent,
    CapitalsPipe,
  ],
  exports: [
    AgmCoreModule,
    CommonModule,
    CalendarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule,
    ViewHeaderComponent
  ]
})
export class SharedModule { }
