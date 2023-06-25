import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  firstName: string;
  lastName: string;
  description: string;
}

interface Service {
  id: number;
  service_name: string;
  description: string;
  duration: number;
  fee: number;
}

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})

export class HireComponent implements OnInit {
  users: User[] = [];
  services: Service[] = [];

  public showModal: boolean = false;
  public description: string = '';
  public selectedService: string = '';
  public selectedHours: string = '';

  public price: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
    this.getServices();
  }

  getUsers(): void {
    this.http.get<User[]>('http://localhost:8080/users')
        .subscribe(data => {
          this.users = data;
        });
  }

  getServices(): void {
    this.http.get<any>('http://localhost:8080/services')
        .subscribe(data => {
          console.log(data);
          this.services = data;
        }, error => {
          console.error('There was an error!', error);
        });
  }


  openModal(): void {
    this.showModal = true;
  }

  hire(): void {
    const selectedService = this.services.find(service => service.service_name === this.selectedService);
    if (selectedService) {
      this.price = selectedService.fee;
    }

    const hireDetails = `Hired for ${selectedService?.service_name} with description ${this.description}`;
    const duration = selectedService?.duration; // Retrieve the duration value
    const totalPrice = `Total price: $${this.price}`;

    console.log(hireDetails);
    console.log(totalPrice);

    window.alert(`${hireDetails}\nDuration: ${duration} hours\n${totalPrice}`);

    this.closeModal();
  }


  closeModal(): void {
    this.showModal = false;
    this.description = '';
    this.selectedService = '';
    this.selectedHours = '';
    this.price = 0;
  }


  getPrice(): number {
    const selectedService = this.services.find(service => service.service_name === this.selectedService);
    return selectedService ? selectedService.fee : 0;
  }

}
