import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { AddAnnouncementModule } from './pages/add-announcement/add-announcement.module';
import { AnnouncementModule } from './pages/announcement/announcement.module';
import { HomeModule } from './pages/home/home.module';
import { ModalModule } from './modal/modal.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsedModule } from './pages/used/used.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
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
    AddAnnouncementModule,
    AnnouncementModule,
    HomeModule,
    ModalModule,
    UsedModule,
  ],
})
export class AppModule {}
