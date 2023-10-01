import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor() {
    // this.createForm();
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^a-zA-Zd]).+$/),
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^a-zA-Zd]).+$/),
        // passwordMatchValidator,
      ]),
    });
  }
  handleSubmitForm() {
    console.log(this.userForm);
    alert('thanks! You are Register');
  }
  
 
}
// export function passwordMatchValidator(
//   control: AbstractControl
// ): any {
//   const password = control.get('password');
//   const repassword = control.get('rePassword');

//   if ( password.value !=== repassword.value) {
//     return { passwordMismatch : true };
//   }

//   return { passwordMismatch: false };
// }