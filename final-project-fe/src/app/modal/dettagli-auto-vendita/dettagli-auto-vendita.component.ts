import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-dettagli-auto-vendita',
  templateUrl: './dettagli-auto-vendita.component.html',
  styleUrls: ['./dettagli-auto-vendita.component.scss'],
})
export class DettagliAutoVenditaComponent implements OnInit {
  constructor(private announcementSrv: AnnouncementService) {}
  announcements?: Announcement[];
  ngOnInit(): void {
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
      this.announcements = data;
    });
  }
}
