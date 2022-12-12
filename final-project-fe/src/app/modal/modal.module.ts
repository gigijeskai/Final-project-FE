import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCarRentalComponent } from './detail-car-rental/detail-car-rental';
import { DetailCarSaleComponent } from './detail-car-sale/detail-car-sale';

@NgModule({
  declarations: [DetailCarRentalComponent, DetailCarSaleComponent],
  imports: [CommonModule],
  exports: [DetailCarRentalComponent, DetailCarSaleComponent],
})
export class ModalModule {}
