import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      description: [''],
      ui_ux: [''],
      ar_vr: [''],
      digital: [''],
      animation: [''],
      film_editing: [''],
      visual_effects: [''],
      three_motion: [''],
      three_art: [''],
      // adăugați câmpul pentru parolă
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      // Logic pentru înregistrare
      console.log('Form submitted:', this.registrationForm.value);
      // Puteți adăuga aici logica pentru trimiterea datelor către server sau procesarea lor în alt mod
    }
  }
}
