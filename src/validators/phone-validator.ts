import { Validator, AbstractControl } from "@angular/forms";
import { isValidNumber, TelephoneNumber } from "libphonenumber-js";

export class PhoneValidator implements Validator {
    validate(control: AbstractControl): { [key: string]: any; } {
        const value = control.value;
    
        if (value) {
          if (!isValidNumber(<TelephoneNumber>value)) {
            return { 'invalid-phone-number': true };
          }
        }
    
        return null;
    }
}