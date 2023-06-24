import { Component } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public tokenStorage: TokenStorageService) {
  }
  // Define any additional properties or methods you need for your navbar component
}
