import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementPage } from './add-announcement.page';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from 'src/app/services/service.module';

@NgModule({
  declarations: [AddAnnouncementPage],
  imports: [CommonModule, FormsModule],
})
export class AddAnnouncementModule {}
