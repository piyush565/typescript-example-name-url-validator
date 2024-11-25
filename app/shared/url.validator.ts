import {AbstractControl, ValidationErrors} from '@angular/forms'

export function ValidateUrl(control: AbstractControl) : ValidationErrors | null {
  if(!control.value.startsWith('https') || !control.value.includes('.io')){
    return { invalidUrl: true}
  }
 
    const urlPattern = /^https:\/\/.*\.io$/; // URL must start with "https://" and end with ".io"
    const isValid = urlPattern.test(control.value);
  return null;
}
