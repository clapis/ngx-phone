import { Injectable, Inject } from '@angular/core';
import { getPhoneCode, CountryCode } from 'libphonenumber-js';
import { Country } from '../models/country';

@Injectable()
export class CountryService {
  private cache: Country[];

  constructor(@Inject('LocalizedCountryData') private localizedCountryData: any) { }

  getCountries(): Country[] {
    if (!this.cache) {
      this.cache = this.loadCountries();
    }

    return this.cache;
  }

  private loadCountries(): Country[] {
    const results: Country[] = [];

    const countries = this.localizedCountryData.countries;

    for (const country of Object.keys(countries)) {
      const dialCode = this.getDialCode(country);
      if (dialCode) {
        results.push(<Country>{
          code: country,
          name: countries[country],
          dialCode: dialCode
        });
      }
    }

    results.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));

    return results;
  }

  private getDialCode(countryCode: string): string | undefined {
    try {
      const code = getPhoneCode(<CountryCode>countryCode);
      return code as string;
    } catch {
      return undefined;
    }
  }
}
