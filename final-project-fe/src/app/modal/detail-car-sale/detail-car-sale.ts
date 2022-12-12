import { Component, Input, OnInit } from '@angular/core';
import { Used } from 'src/app/interfaces/used';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-detail-car-sale',
  templateUrl: './detail-car-sale.html',
  styleUrls: ['./detail-car-sale.scss'],
})
export class DetailCarSaleComponent implements OnInit {
  @Input() dettagliAuto: Used | undefined;
  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {}
}
