import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  items:Array<any> =[];
  constructor() {
    this.items=[
      {name:'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/banner_embryo_this.jpg?itok=OlJVWiio',text:'this is the first image '},
      {name:'assets/images/download (1).jpg',text:'this is the second image '},
      {name:'assets/images/download (2).jpg',text:'this is the third image '},
      {name:'assets/images/download (3).jpg',text:'this is the fourth image '},
      {name:'assets/images/download.jpg',text:'this is the first image '}
    ];
   }

  ngOnInit() {
  }

}
