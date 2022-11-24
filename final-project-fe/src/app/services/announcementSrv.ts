import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnnunciService {
  constructor(private http: HttpClient) {}
  getAnnouncement() {
    return this.http.get(environment.urlAPI + 'annunci');
  }
}
