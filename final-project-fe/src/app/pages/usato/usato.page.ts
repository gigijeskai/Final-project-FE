import { Component, OnInit } from '@angular/core';

import { UsedCarApiService } from 'src/app/services/used-car-api.service';

@Component({
  templateUrl: './usato.page.html',
  styleUrls: ['./usato.page.scss'],
})
export class UsatoPage implements OnInit {
  carList = [];
  constructor(private usedCarApiService: UsedCarApiService) {}

  ngOnInit(): void {
    this.usedCarApiService.getAllCar().subscribe((data) => console.log(data));
  }
}
