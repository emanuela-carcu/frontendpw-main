import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const ROLE_KEY = 'role-token';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    private roleSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {
        const token = window.sessionStorage.getItem(TOKEN_KEY);
        const role = window.sessionStorage.getItem(ROLE_KEY);

        if (token) {
            this.tokenSubject.next(token);
        }

        if (role) {
            this.roleSubject.next(JSON.parse(role));
        }
    }

    signOut(): void {
        window.sessionStorage.clear();
        this.tokenSubject.next(null);
        this.roleSubject.next(null);
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
        this.tokenSubject.next(token);
    }

    public getToken(): string | null {
        return this.tokenSubject.value;
    }

    public getTokenObservable(): Observable<string | null> {
        return this.tokenSubject.asObservable();
    }

    public saveUserRole(userRole: any): void {
        window.sessionStorage.removeItem(ROLE_KEY);
        window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(userRole));
        this.roleSubject.next(userRole);
    }

    public getRole(): any {
        return this.roleSubject.value;
    }

    public getRoleObservable(): Observable<any> {
        return this.roleSubject.asObservable();
    }
}
