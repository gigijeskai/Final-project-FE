import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.page';
import { AnnouncementModule } from '../pages/announcement/announcement.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  declarations: [FooterComponent, NavbarComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SearchBarComponent, NavbarComponent, FooterComponent],
})
export class ComponentsModule {}
