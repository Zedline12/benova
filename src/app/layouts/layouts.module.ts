import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BodyLayoutComponent } from './body-layout/body-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [MainLayoutComponent,BodyLayoutComponent],
  imports:[CommonModule,RouterModule,CoreModule],
  exports:[MainLayoutComponent,BodyLayoutComponent]
})
export class LayoutsModule { }