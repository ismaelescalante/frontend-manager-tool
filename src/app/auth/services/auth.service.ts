import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, throwError } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import {jwtDecode}from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url: string = 'https://frontend-manager-backend.onrender.com';
  private _user?: User;
  private _authStatus$ = new BehaviorSubject<User | null>(null);

  constructor(private _http: HttpClient) {}

  login(user: User): Observable<User> {
    const loginData = {
      email: user.email,
      password: user.password,
    };

    return this._http
      .post<User>(`${this.url}/login`, loginData, { observe: 'response' })
      .pipe(
        switchMap((response: HttpResponse<User>) => {
          const headers = response.headers;
          const token = headers.get('x-auth-token');

          if (user !== null && user !== undefined) {
            this._authStatus$.next(user);
            this._user = jwtDecode(token!)
            localStorage.setItem("token", token!)
            return of(this._user);
          } else {
            // If the user is null or undefined
            return throwError('Invalid user response');
          }
          })
        );
  }

  get currentUser(): User | undefined {
    if (!this._user) return undefined;
    return jwtDecode(localStorage.getItem("token")!)
  }

  logout() {

    this._user = undefined;
    localStorage.removeItem("token")

  }
}