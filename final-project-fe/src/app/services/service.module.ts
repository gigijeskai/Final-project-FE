import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from './announcementSrv';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AnnouncementService, AuthService],
  imports: [CommonModule, NgModule],
  providers: [AnnouncementService, AuthService],
})
export class ServiceModule {}
