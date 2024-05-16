import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StringToBinaryPipe } from '../pipes/string-to-binary.pipe';
import { RemoveSubmitButtonDirective } from '../directives/remove-submit-button.directive';
import { UnlessDirective } from '../directives/app-unless.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, StringToBinaryPipe, RemoveSubmitButtonDirective, UnlessDirective]
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  isLoggedIn = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoggedIn = true;
      console.log('Form Submitted!', this.loginForm.value);
    }
  }
}
