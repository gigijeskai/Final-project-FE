import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './pages/home/home.page';
import { AddAnnouncementPage } from './pages/add-announcement/add-announcement.page';
import { AnnouncementPage } from './pages/announcement/announcement.page';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, HomePage, AddAnnouncementPage, AnnouncementPage],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
})
export class AppModule {}
