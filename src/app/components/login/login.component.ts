import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { formMange } from '../../classes/formValid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends formMange implements OnInit {
  loginForm: FormGroup;
  dataIsNotValid: string;

  constructor(private authService: AuthService, private router: Router) {
    super()
  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    })
    this.setForm(this.loginForm);
  }

  login() {
    this.authService.login(this.FormValue).subscribe(res => {

      if (res.access_token) {
        this.authService.setUserInLocaleStorge(res);
        this.router.navigate(['']);
      } else {
        this.dataIsNotValid = res;
      }

    })
  }
}