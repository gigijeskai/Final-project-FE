import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementPage } from './add-announcement.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementPage } from '../announcement/announcement.page';

const routes: Routes = [
  {
    path: 'annunci',
    component: AnnouncementPage,
  },
];

@NgModule({
  declarations: [AddAnnouncementPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class AddAnnouncementModule {}
