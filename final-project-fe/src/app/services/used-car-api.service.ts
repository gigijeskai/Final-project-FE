import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsedCarApiService {
  private urlApi: string = 'http://localhost:5000/cars';

  constructor(private http: HttpClient) {}

  getAllCar() {
    return this.http.get(this.urlApi);
  }
}
