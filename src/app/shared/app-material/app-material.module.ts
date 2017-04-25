import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdSlideToggleModule,
  MdListModule,
  MdButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
  ],
  declarations: [],
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdIconModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule
  ]
})
export class AppMaterialModule {}
