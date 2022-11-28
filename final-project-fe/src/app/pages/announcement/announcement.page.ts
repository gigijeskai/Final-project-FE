import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  constructor(private announcementSrv: AnnouncementService) {}
  announcements?: Announcement[];

  ngOnInit(): void {
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
      this.announcements = data;
    });
  }
  onDetails(id: number) {
    this.announcementSrv
      .getAnnouncementById(id)
      .subscribe((obj) => (this.announcementSrv.announcements = obj));
  }
}
