import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-dettagli-auto-noleggio',
  templateUrl: './dettagli-auto-noleggio.component.html',
  styleUrls: ['./dettagli-auto-noleggio.component.scss'],
})
export class DettagliAutoNoleggioComponent implements OnInit {
  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {}
}
