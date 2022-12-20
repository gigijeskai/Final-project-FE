import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Used } from '../interfaces/used';

@Injectable({
  providedIn: 'root',
})
export class UsedCarApiService {
  carList!: Used[];
  private urlApi: string = 'http://localhost:5000/cars';

  constructor(private http: HttpClient) {}

  getAllCar() {
    return this.http.get<Used[]>(this.urlApi);
  }
  deleteCar(id: number) {
    return this.http.delete<Used[]>(this.urlApi + 'usato/' + id);
  }
}
