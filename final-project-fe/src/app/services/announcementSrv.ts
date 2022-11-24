import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Announcement } from '../interfaces/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  announcements?: Announcement[];
  constructor(private http: HttpClient) {}
  getAnnouncement() {
    return this.http.get<Announcement[]>(environment.urlAPI + 'annunci');
  }
}
