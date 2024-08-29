import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule,BrowserModule, AppRoutingModule,LayoutsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
