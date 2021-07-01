import { AbstractControl } from '@angular/forms';

export function userPasswordEqualsValidator(
  formGroup: AbstractControl
): object | null {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { userEqualsPassword: true };
  } else {
    return null;
  }
}
