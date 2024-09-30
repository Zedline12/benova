import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { baseHttpService } from './services/base-http.service';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [baseHttpService],
})
export class CoreModule {}
