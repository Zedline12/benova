import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from '../../pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AboutUsComponent } from './components/about-us-section/about-us-section';
import { StudentsRatingComponent } from './components/students-rating-section/students-rating-section';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { BenovaBussinesComponent } from './components/benova-bussines/benova-bussines.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HomeComponent,
    AboutUsComponent,
    StudentsRatingComponent,
    WorkspacesComponent,
    BenovaBussinesComponent,
  ],
  imports: [LayoutsModule, HomeRoutingModule, SharedModule, CommonModule],
  providers: [],
})
export class HomeModule {}
