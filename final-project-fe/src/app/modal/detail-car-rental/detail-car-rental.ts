import { Component, Input, OnInit, Pipe } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-detail-car-rental',
  templateUrl: './detail-car-rental.html',
  styleUrls: ['./detail-car-rental.scss'],
})
export class DetailCarRentalComponent implements OnInit {
  @Input() dettagliAuto: Announcement | undefined;

  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {}
}
