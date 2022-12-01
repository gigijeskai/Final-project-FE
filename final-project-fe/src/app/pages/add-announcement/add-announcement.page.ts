import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Announcement } from 'src/app/interfaces/announcement';
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
    this.announcementSrv
      .addAnnouncement(this.form.value)
      .subscribe((announcement) =>
        this.announcementSrv.announcements?.push(announcement)
      );
    return this.form.reset();
  }
}
