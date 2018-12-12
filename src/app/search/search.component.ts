import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('search') search= new EventEmitter 
  result:any;
  private Url='';
  searched = false;
  constructor(private http:HttpClient) { 

  }
   
  ngOnInit() {
  }
  Search(f){
    
    let query = f.value;
    console.log( query );
    /*this.http.get( 'Url' + query ).subscribe( response =>{
      console.log( response );
      this.result = response;
    })*/
    //send requist with query
    //here will exist the returned data from search
    
  }

}
