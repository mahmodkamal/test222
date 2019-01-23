import { SearchService } from './../../services/search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD:src/app/search/search.component.ts
  @Output('search') search= new EventEmitter 
  results:any = {};
  private Url='';
=======
  @Output('search') search = new EventEmitter
  result: any = {};
  private Url = '';
>>>>>>> 451491d0009d94defb82893eebc20855ef720eb2:src/app/components/search/search.component.ts
  searched = false;
  error = false;
  constructor(private httpservice: SearchService) {

  }

  ngOnInit() {
  }
  Search(form: NgForm) {

    console.log(form)
    let query = form.value.search;
<<<<<<< HEAD:src/app/search/search.component.ts
    
    this.httpservice.search(`front/certficate/search_certficate/${query}`).subscribe(res=>{
      this.results = res.data;
      console.log(this.results);
=======

    this.httpservice.search(`front/certficate/search_certficate/${query}`).subscribe(res => {
      this.result = res.data;
      console.log(this.result);
>>>>>>> 451491d0009d94defb82893eebc20855ef720eb2:src/app/components/search/search.component.ts
      this.error = false;
      this.searched = true;
    }, error => {
      this.error = true;
      this.searched = !true;

    });


  }


}
