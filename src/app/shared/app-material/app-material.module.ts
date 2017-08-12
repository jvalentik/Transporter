import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSelectModule, MdSidenavModule, MdSnackBarModule,
  MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
const MODULES = [
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdCardModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdListModule,
  MdInputModule,
  MdSnackBarModule,
  MdDialogModule,
  MdChipsModule,
  MdMenuModule,
  MdTabsModule,
  MdSelectModule,
  MdCheckboxModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class AppMaterialModule {}
