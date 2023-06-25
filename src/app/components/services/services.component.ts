import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Service {
  service_name: string;
  description: string;
  fee: number;
  duration: number;
}


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Service[]>('http://localhost:8080/services')
        .subscribe(data => {
          this.services = data;
        });
  }}
