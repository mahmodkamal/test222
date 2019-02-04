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
  getUserMaterials(user_id)
  {
    return this.http.post({'id' : user_id},'back/material/get_User_Material');
  }
  
}
