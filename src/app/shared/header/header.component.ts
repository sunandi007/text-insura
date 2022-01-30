import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../login/_service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  userName = '';

  constructor(
    private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.isLogin = AuthService.isLogin();
        this.userName = AuthService.getUsername();
      }
    });
  }

  ngOnInit(): void {
  }

  goLink(value: string) {
    this.router.navigateByUrl(value);
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/login');
  }

}
