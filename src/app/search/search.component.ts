import { SearchService } from './../services/search.service';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { NgForm} from '@angular/forms';



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
  constructor(private httpservice:SearchService) { 

  }
   
  ngOnInit() {
  }
  Search(form: NgForm){
    
    let query = form.value.search;
    this.result=this.httpservice.search('/back/user/get_user/',query);
    this.searched = true;
    console.log( query );
  }

}
