import { Injectable } from '@angular/core';
import { HttpClientService } from './http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClientService) { }

  getUsers(page?){
    return this.http.get('user/get_users' , page)
  }

  addUser( body){
    return this.http.post(body , 'user/create_user')
  }
  getUser(userId : number){
    return this.http.get( 'user/get_user/' + userId);

  }
}