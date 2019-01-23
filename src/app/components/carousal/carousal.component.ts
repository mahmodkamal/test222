import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  items:Array<any> =[];
  colors  = [
        {dark:'gray',light:'lightgray',text:'black'},
        {dark:'#35697A',light:'#4B90AD',text:'white'},
      ];
  randColor= this.colors[Math.floor(Math.random() *this.colors.length)];    
  
  constructor() {
    this.items=[
      {name:'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel-image_2.jpg?itok=G_lSOxDb',text:'"Beating her drum, she invited her ancestral spirits to enter her body" ',repone:'A Cambridge anthropologist explores the resurgence of shamanic healing in Mongolia '},
      {name:'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel_23.jpg?itok=ihQjyuBK',text:'"There are many needs for robots – but they can’t go everywhere instantly" ',repone:'Robots can go all the way to Mars, but they can’t pick up the groceries'}
     
    ];
    console.log(this.randColor);
   }

  ngOnInit() {
  }


}
