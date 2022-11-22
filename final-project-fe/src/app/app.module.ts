import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './auth/login/login.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { AddAnnouncementPage } from './pages/add-announcement/add-announcement.page';
import { AnnouncementPage } from './pages/announcement/announcement.page';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePage,
    AddAnnouncementPage,
    AnnouncementPage,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
