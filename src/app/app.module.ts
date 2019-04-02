import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularImportsModule} from './angular-imports/angular-imports.module';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
