import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {Login} from "../../model/login";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginForm: FormGroup;
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private route: Router,
              private formBuilder: FormBuilder) {
      this.loginForm  =  this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onClickSubmit(): void {
    this.authService.login(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.jwtToken);
          this.tokenStorage.saveUserRole(data.role);
          console.log(data.role);
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          if(this.tokenStorage.getRole() === "DESINGER") {

          }
          // this.route.navigate(['/home'])
          //     .then(() => {
          //       window.location.reload();
          //     });
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
    );
  }

}
