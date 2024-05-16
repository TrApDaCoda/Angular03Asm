import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StringToBinaryPipe } from '../pipes/string-to-binary.pipe';
import { RemoveSubmitButtonDirective } from '../directives/remove-submit-button.directive';
import { UnlessDirective } from '../directives/app-unless.directive';

@Component({
  selector: 'app-demographic',
  standalone: true,
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, StringToBinaryPipe, RemoveSubmitButtonDirective, UnlessDirective]
})
export class DemographicComponent {
  demographicForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0), Validators.max(120)]]
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.demographicForm.valid) {
      this.isSubmitted = true;
      console.log('Form Submitted!', this.demographicForm.value);
    }
  }
}
