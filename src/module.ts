import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap";
import { CountryService } from "./services/country.service";
import { CountrySearchPipe } from "./pipes/country-search.pipe";
import { PhoneNumberInputComponent } from "./components/phone-number-input/phone-number-input.component";

@NgModule({
  imports: [CommonModule, FormsModule, BsDropdownModule],
  declarations: [PhoneNumberInputComponent, CountrySearchPipe],
  exports: [PhoneNumberInputComponent]
})
export class NgxPhoneModule {
  public static forRoot(localizedCountryData: any): ModuleWithProviders {
    return {
      ngModule: NgxPhoneModule,
      providers: [
        {
          provide: 'LocalizedCountryData',
          useValue: localizedCountryData
        },
        {
          provide: CountryService,
          useClass: CountryService
        }
      ]
    };
  }
}
