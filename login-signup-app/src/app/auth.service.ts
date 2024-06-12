import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(username: string, password: string): boolean {
    if (localStorage.getItem(username)) {
      return false; // User already exists
    } else {
      localStorage.setItem(username, password);
      return true;
    }
  }

  login(username: string, password: string): boolean {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}