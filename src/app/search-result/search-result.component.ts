import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Download(f) {
    //reaquest to download resource
    console.log(f);
  }
  submit(f) {

  }

}
