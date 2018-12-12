import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output('logout') onLogOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
