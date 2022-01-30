import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credential = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.getUserList(this.credential).then(res => {
      if (res) {
        this.router.navigateByUrl('/post');
      } else {
        alert('username or password is not match');
      }
    })
  }
}
