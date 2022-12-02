import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  constructor(
    private announcementSrv: AnnouncementService,
    public authService: AuthService
  ) {}
  announcements?: Announcement[];
  carDetails?: Announcement;
  searchText: string = '';
  isAlert = false;

  ngOnInit(): void {
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
      this.announcements = data;
    });
  }
  onDetails(item: Announcement) {
    this.carDetails = item;
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
