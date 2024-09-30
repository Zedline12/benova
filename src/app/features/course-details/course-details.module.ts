import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from '../../pages/course-details/course-details.component';
import { DetailsContainerComponent } from './components/details-container/details-container.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { LearnDetailsComponent } from './components/learn-details/learn-details.component';
import { DescriptionComponent } from './components/description/description.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import SnackService from '../../core/services/snack.service';

@NgModule({
  declarations: [
    CourseDetailsComponent,
    DetailsContainerComponent,
    DetailsContainerComponent,
    LearnDetailsComponent,
    DescriptionComponent,
    CourseContentComponent,
    CourseContentComponent,
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,
    SharedModule,
    LayoutsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [SnackService],
})
export class CourseDetailsModule {}
