import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(private authService: AuthService,
              private route: Router,
              private formBuilder: FormBuilder) {
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
      password: ['', Validators.required]
    });
  }

  onClickSubmit(): void {
    if (this.registrationForm.valid) {
      const user = {
        email: this.registrationForm.value.email,
        lastName: this.registrationForm.value.lastName,
        firstName: this.registrationForm.value.firstName,
        password: this.registrationForm.value.password,
        phoneNumber: this.registrationForm.value.phoneNumber, // Add this line
        role: this.registrationForm.value.role,
        description: this.registrationForm.value.description,
        skills_ui_ux: this.registrationForm.value.ui_ux ? 1 : 0,
        skills_ar_vr: this.registrationForm.value.ar_vr ? 1 : 0,
        skills_digital: this.registrationForm.value.digital ? 1 : 0,
        skills_animation: this.registrationForm.value.animation ? 1 : 0,
        skills_film_editing: this.registrationForm.value.film_editing ? 1 : 0,
        skills_visual_effects: this.registrationForm.value.visual_effects ? 1 : 0,
        skills_three_motion: this.registrationForm.value.three_motion ? 1 : 0,
        skills_three_art: this.registrationForm.value.three_art ? 1 : 0,
      };
      this.authService.register(user).subscribe(
          data => {
            console.log('Registration successful', data);
            this.route.navigate(['/login']); // Redirect to login page after successful registration
          },
          err => {
            console.error('Registration failed', err);
          }
      );
    } else {
      console.log('Form is not valid');
      Object.keys(this.registrationForm.controls).forEach(key => {
        const controlErrors: ValidationErrors | null = this.registrationForm.get(key)?.errors || null;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
  }}
