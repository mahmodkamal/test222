import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchService{
 constructor( private httpService :HttpClientService)
 {
 }
 public search(path:string,query?:any)
 {
    return this.httpService.get( path , query)
    
 }
}