import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = './assets/user_details.json';
  constructor(private http: HttpClient) {
   }

  public getProfileInfo(): Observable<any> {
    return this.http.get(this.url);
  }
}
