import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from '../../pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AboutUsComponent } from './components/about-us-section/about-us-section';
import { StudentsRatingComponent } from './components/students-rating-section/students-rating-section';
import { WhyUsComponent } from './components/why-us-section/why-us-section.component';
import { LearnBetterWithUsSectionComponent } from './components/learn-better-with-us-section/learn-better-with-us-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HomeComponent,
    AboutUsComponent,
    StudentsRatingComponent,
    WhyUsComponent,
    LearnBetterWithUsSectionComponent,
  ],
  imports: [LayoutsModule, HomeRoutingModule, SharedModule, CommonModule],
  providers: [],
})
export class HomeModule {}
