import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  
  constructor(private http:HttpClientService) { }
  getUserMaterial()
  {
    return this.http.get('back/material/getmaterial');
  }
  getCategories()
  {
    return this.http.get('back/category/getCategory ');
  }

}
