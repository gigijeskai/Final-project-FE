import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from './announcementSrv';
import { AuthService } from './auth.service';
import { UsedCarApiService } from './used-car-api.service';

@NgModule({
  declarations: [AnnouncementService, AuthService],
  imports: [CommonModule, NgModule],
  providers: [AnnouncementService, AuthService, UsedCarApiService],
})
export class ServiceModule {}
