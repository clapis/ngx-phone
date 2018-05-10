import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPhoneModule } from '../../src';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CovalentHighlightModule } from '@covalent/highlight';
import * as LocalizedCountryData from 'i18n-iso-countries/langs/en.json';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentHighlightModule,
    BsDropdownModule.forRoot(),
    NgxPhoneModule.forRoot(LocalizedCountryData)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
