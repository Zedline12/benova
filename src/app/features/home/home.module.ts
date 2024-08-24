import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  declarations: [HeroSectionComponent, HomeComponent],
  imports: [ LayoutsModule ,HomeRoutingModule,CoreModule,SharedModule],
})
export class HomeModule {}
