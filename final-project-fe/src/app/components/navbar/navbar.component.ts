import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  isAlert = false;
  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('isLogged');
    this.authService.isLogin = false;
    this.router.navigate(['/login']);
  }

  alert() {
    if (!this.authService.isLogin) {
      this.isAlert = true;
    }
    return setTimeout(() => {
      this.isAlert = false;
    }, 1500);
  }
}
