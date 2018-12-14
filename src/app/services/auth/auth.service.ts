import { HttpClientService } from './../http/http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientService) { }

  login(body) {
    return this.http.post(body, 'auth/login');

  }

  setUserInLocaleStorge(user) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocaleStorge() {
    return JSON.parse(localStorage.getItem('user'));
  }


  logout(body) {
    return this.http.post(body, 'auth/logout');
  }

  getTokenFromLocaleStorge() {
    if (JSON.parse(localStorage.getItem('user'))) {
      return JSON.parse(localStorage.getItem('user')).access_token;
    }
  }
}