import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'countrySearch'
})
export class CountrySearchPipe implements PipeTransform {
  transform(value: Country[], filter?: string): any {
    let result = value;

    if (value && filter) {
      const filterNormalized = filter.toUpperCase();
      const filtered = result.filter((country: Country) => country.name.toUpperCase().startsWith(filterNormalized));
      if (filtered.length > 0) { result = filtered; }
    }

    return result;
  }
}
