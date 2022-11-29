import { Component, Input, OnInit } from '@angular/core';
import { Usato } from 'src/app/interfaces/usato';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  selector: 'app-dettagli-auto-vendita',
  templateUrl: './dettagli-auto-vendita.component.html',
  styleUrls: ['./dettagli-auto-vendita.component.scss'],
})
export class DettagliAutoVenditaComponent implements OnInit {
  @Input() dettagliAuto: Usato | undefined;
  constructor(private announcementSrv: AnnouncementService) {}

  ngOnInit(): void {
    console.log(this.dettagliAuto);
  }
}
