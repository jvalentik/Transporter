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
  MdButtonToggleModule, MdInputModule, MdSnackBarModule, MdDialogModule, MdChipsModule, MdMenuModule, MdTabsModule, MdSelectModule,
  MdCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdChipsModule,
    MdDialogModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdAutocompleteModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdChipsModule,
    MdDialogModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdAutocompleteModule
  ]
})
export class AppMaterialModule {}
