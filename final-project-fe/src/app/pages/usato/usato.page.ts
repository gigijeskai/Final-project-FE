import { Component, OnInit } from '@angular/core';
import { Usato } from 'src/app/interfaces/usato';

import { UsedCarApiService } from 'src/app/services/used-car-api.service';

@Component({
  templateUrl: './usato.page.html',
  styleUrls: ['./usato.page.scss'],
})
export class UsatoPage implements OnInit {
  carList!: Usato[];
  carDetails?: Usato;
  constructor(private usedCarApiService: UsedCarApiService) {}

  ngOnInit(): void {
    this.usedCarApiService
      .getAllCar()
      .subscribe((data: Usato[]) => (this.carList = data));
  }
  onDetails(item: Usato) {
    this.carDetails = item;
    console.log(this.carDetails);
  }
}
