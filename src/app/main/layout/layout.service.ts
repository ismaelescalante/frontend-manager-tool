import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LayoutService {

    private apiUrl = 'https://frontend-manager-backend.onrender.com'
    constructor(private httpClient: HttpClient) { }
    
    getProgress(id:string){
        return this.httpClient.get(`${this.apiUrl}/user/${id}/progress`)
    }
}