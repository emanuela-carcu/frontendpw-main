import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        lastName: this.registrationForm.value.lastName,
        firstName: this.registrationForm.value.firstName,
        password: this.registrationForm.value.password,
        phoneNumber: this.registrationForm.value.phoneNumber,
        role: this.registrationForm.value.role
      }
      this.authService.register(user).subscribe(
          data => {
          },
          err => {
          }
      );
    }
  }
}
