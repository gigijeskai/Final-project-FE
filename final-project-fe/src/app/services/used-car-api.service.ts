import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usato } from '../interfaces/usato';

@Injectable({
  providedIn: 'root',
})
export class UsedCarApiService {
  carList!: Usato[];
  private urlApi: string = 'http://localhost:5000/cars';

  constructor(private http: HttpClient) {}

  getAllCar() {
    return this.http.get<Usato[]>(this.urlApi);
  }
}
