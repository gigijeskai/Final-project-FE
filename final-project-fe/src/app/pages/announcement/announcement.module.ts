import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementPage } from './announcement.page';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServiceModule } from 'src/app/services/service.module';

@NgModule({
  declarations: [AnnouncementPage],
  imports: [CommonModule, FormsModule, ComponentsModule],
})
export class AnnouncementModule {}
