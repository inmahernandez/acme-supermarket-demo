import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (control.value != null) {
      if(!control.value.startsWith('http')) {
        return { validUrl: false };
      }
  }
  return null;
}