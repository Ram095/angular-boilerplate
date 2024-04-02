import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getCountryList(): Observable<any> {
    return this.http.get('/api/countries');
  }

  getCarDetails(): Observable<any> {
    return this.http.get('/api/car-details');
  }
}
