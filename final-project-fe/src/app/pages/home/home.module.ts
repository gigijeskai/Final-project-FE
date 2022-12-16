import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbdCarouselPause } from '../../components/carousel/carousel.component';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, ComponentsModule, NgbdCarouselPause],
})
export class HomeModule {}
