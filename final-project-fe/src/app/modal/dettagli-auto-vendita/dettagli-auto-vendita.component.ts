import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-dettagli-auto-vendita',
  templateUrl: './dettagli-auto-vendita.component.html',
  styleUrls: ['./dettagli-auto-vendita.component.scss'],
})
export class DettagliAutoVenditaComponent implements OnInit {
  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {}
}
