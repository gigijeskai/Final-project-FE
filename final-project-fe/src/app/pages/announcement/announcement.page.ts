import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  constructor(public announcementSrv: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementSrv
      .getAnnouncement()
      .subscribe((data) => (this.announcementSrv.announcements = data));
  }
}
