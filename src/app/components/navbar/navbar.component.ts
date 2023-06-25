import { Component } from '@angular/core';
import { TokenStorageService } from "../../services/token-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public token: string | null = null;
  public role: any;

  constructor(public tokenStorage: TokenStorageService, private router: Router) {
    this.tokenStorage.getTokenObservable().subscribe(token => this.token = token);
    this.tokenStorage.getRoleObservable().subscribe(role => this.role = role);
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
