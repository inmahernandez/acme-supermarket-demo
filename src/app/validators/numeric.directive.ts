import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: NumericValidatorDirective, multi: true}]
  })
  export class NumericValidatorDirective implements Validator {
    @Input('numericValue') numericValue: string;
   
    validate(control: AbstractControl): {[key: string]: any} {
      return this.numericValue ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                : null;
    }
  }