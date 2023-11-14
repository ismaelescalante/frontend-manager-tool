import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'https://frontend-manager-backend.onrender.com/';
  private _userId?: string;

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) { 
    this._userId = this._authService.currentUser?.userId

  }


  saveLinks(github: string, html: string, javascript: string) {
    const userDetails = {
      github, html, javascript
    }

    return this._http.patch<User>(
      `${this._url}/user/links/${this._userId}`,
      userDetails
    );

  }

  



}
