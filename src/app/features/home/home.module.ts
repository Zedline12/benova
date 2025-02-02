import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from '../../pages/home/home.component';

import { SpeakerSectionComponent } from './components/speaker-section/speaker-section.component';
import { CoreModule } from '../../core/core.module';
import { SpeakersComponent } from './components/speakers/speakers.component';

@NgModule({
  declarations: [HeroSectionComponent, HomeComponent, SpeakerSectionComponent, SpeakersComponent],
  imports: [HomeRoutingModule, CommonModule, CoreModule],
  providers: [],
  exports: [HeroSectionComponent],
})
export class HomeModule {}
