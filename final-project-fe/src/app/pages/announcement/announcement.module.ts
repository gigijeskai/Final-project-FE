import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementPage } from './announcement.page';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

@NgModule({
  declarations: [AnnouncementPage, SearchBarComponent],
  imports: [CommonModule, FormsModule],
})
export class AnnouncementModule {}
