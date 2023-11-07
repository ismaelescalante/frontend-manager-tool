import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://frontend-manager-backend.onrender.com/';
  private _userId?: number;

  constructor(
    private _http: HttpClient,
  ) { }

  



}
