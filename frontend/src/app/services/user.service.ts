import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




const USER_AUTH = "http://localhost:8080/api/users/"



@Injectable({
  providedIn: 'root'
})



export class UserService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<any> {
    return this.http.post(USER_AUTH + 'signup', {
      email,
      password
    }, httpOptions);
  }

}


