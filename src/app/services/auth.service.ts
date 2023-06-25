import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

const AUTH_API = 'http://localhost:8080';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: any, password: any): Observable<any> {
        return this.http.post(AUTH_API + '/login', {
            email,
            password
        }, httpOptions);
    }

    register(user: User): Observable<any> {
        return this.http.post(AUTH_API + '/register', {
            ...user
        }, httpOptions);
    }
}
