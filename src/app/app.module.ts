import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSelect2Component } from './app-select2/app-select2.component';
import { OptionSelect2Component } from './option-select2/option-select2.component';
import { CuadroAzulComponent } from './cuadro-azul/cuadro-azul.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSelect2Component,
    OptionSelect2Component,
    CuadroAzulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
