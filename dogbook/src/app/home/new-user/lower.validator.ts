import { AbstractControl } from '@angular/forms';

export function lowerValidator(control: AbstractControl): object | null {
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()) {
    return { lower: true };
  } else {
    return null;
  }
}
