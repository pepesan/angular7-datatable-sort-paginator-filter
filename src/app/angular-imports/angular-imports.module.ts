import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AngularImportsModule { }
