import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({providedIn: 'root'})
export class LoginService {
    private url: string = 'https://frontend-manager-backend.onrender.com/login'
    constructor(private _http: HttpClient) { }
    
    login(user: User): Observable<User>{
        return this._http.post<User>(this.url, user)
    }
}