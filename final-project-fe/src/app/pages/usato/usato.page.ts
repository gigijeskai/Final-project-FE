import { Component, OnInit } from '@angular/core';
import { Usato } from 'src/app/interfaces/usato';
import { UsedCarApiService } from 'src/app/services/used-car-api.service';

@Component({
  templateUrl: './usato.page.html',
  styleUrls: ['./usato.page.scss'],
})
export class UsatoPage implements OnInit {
  constructor(private usedCarApiService: UsedCarApiService) {}
  carList!: Usato[];
  carDetails?: Usato;
  searchText: string = '';

  ngOnInit(): void {
    this.usedCarApiService
      .getAllCar()
      .subscribe((data: Usato[]) => (this.carList = data));
  }
  onDetails(item: Usato) {
    this.carDetails = item;
    console.log(this.carDetails);
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
