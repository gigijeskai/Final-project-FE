import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsatoPage } from './usato.page';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'src/app/modal/modal.module';

@NgModule({
  declarations: [UsatoPage],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    ModalModule,
  ],
})
export class UsatoModule {}
