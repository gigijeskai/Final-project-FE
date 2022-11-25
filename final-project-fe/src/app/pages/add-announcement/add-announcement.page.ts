import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  templateUrl: './add-announcement.page.html',
  styleUrls: ['./add-announcement.page.scss'],
})
export class AddAnnouncementPage implements OnInit {
  @ViewChild('newAnnouncement') form!: NgForm;
  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {}
  onSubmit() {
    return this.announcementSrv
      .addAnnouncement(this.form.value)
      .subscribe((announcement) =>
        this.announcementSrv.announcements?.push(announcement)
      );
  }
}
