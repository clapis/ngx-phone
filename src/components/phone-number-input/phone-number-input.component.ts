import { Component, OnInit, Input, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { CountryCode, isValidNumber, format, parse, TelephoneNumber, ParsedNumber } from 'libphonenumber-js';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { PhoneValidator } from '../../validators/phone-validator';

@Component({
  selector: 'ngx-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useClass: PhoneValidator,
      multi: true
    }
  ]
})
export class PhoneNumberInputComponent implements OnInit, ControlValueAccessor {
  public number: string;
  public filter?: string;
  public country: Country;
  public countries: Country[];

  private defaultCountry: Country;

  private onChange = (_: any) => {};
  private onTouched = (_: any) => {};

  constructor(private countryService: CountryService) {}

  get phone() {
    let number = <TelephoneNumber>this.number;
    let country = <CountryCode>(this.country && this.country.code);

    return format(number, country, 'E.164')
  }

  set phone(value: any) {
    let { phone = value, country = this.defaultCountry } = parse(value || '');

    this.number = phone;
    this.country = this.countries.find(c => c.code === country);
  }

  ngOnInit() {
    this.number = '';
    this.countries = this.countryService.getCountries();
    this.country = this.defaultCountry = this.countries[0];
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.filter !== undefined) {
      if (event.key.match(/^[a-z]$/i)) {
        this.filter = this.filter + event.key;
      }
    }
  }

  writeValue(value: any): void {
    this.phone = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setCountry(country: Country) {
    this.country = country;
    this.onChange(this.phone);
  }

  onNumberInput(value: string) {
    this.number = value;
    this.onChange(this.phone);
  }

  onNumberBlur() {
    this.onTouched(this.phone);
  }

  isOpenChange(isOpen: boolean) {
    this.filter = isOpen ? '' : undefined;
  }
}
