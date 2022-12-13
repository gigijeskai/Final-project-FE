import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { UserToken } from '../interfaces/user-token';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged!: UserToken;
  isLogin = false;

  constructor(private http: HttpClient) {}

  signUp(user: User) {
    return this.http.post(environment.urlAPI + 'register', user);
  }

  signIn(userObj: User) {
    return this.http.post(environment.urlAPI + 'login', userObj).pipe(
      tap((data) => {
        this.isLogged = data as UserToken;
        this.isLogin = true;
      })
    );
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
