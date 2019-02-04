import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output('logout') onLogOut = new EventEmitter();
  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }
  close(){
document.getElementById('close').click();
  }
}
