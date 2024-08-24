import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [HeroSectionComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule,CoreModule],
})
export class HomeModule {}
