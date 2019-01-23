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
  results:any = {};
  private Url='';
  searched = false;
  error  =false ;
  constructor(private httpservice:SearchService) { 

  }
   
  ngOnInit() {
  }
  Search(form: NgForm){
    
    console.log(form)
    let query = form.value.search;
    
    this.httpservice.search(`front/certficate/search_certficate/${query}`).subscribe(res=>{
      this.results = res.data;
      console.log(this.results);
      this.error = false;
      this.searched = true;
    },error=>{
      this.error = true;
      this.searched = !true;

    });
    
    
  }
  

}
