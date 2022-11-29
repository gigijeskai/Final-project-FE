import { Component, Input, OnInit, Pipe } from '@angular/core';
import { json } from 'express';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-dettagli-auto-noleggio',
  templateUrl: './dettagli-auto-noleggio.component.html',
  styleUrls: ['./dettagli-auto-noleggio.component.scss'],
})
export class DettagliAutoNoleggioComponent implements OnInit {
  @Input() dettagliAuto?: Announcement[];

  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementSrv
      .getAnnouncement()
      .subscribe((data) => (this.announcementSrv.carDetails = data));
  }
}
