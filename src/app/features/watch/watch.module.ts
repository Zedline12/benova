import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from '../../pages/watch/watch.component';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  declarations: [WatchComponent],
  imports: [CommonModule, WatchRoutingModule, LayoutsModule],
})
export class WatchModule {}
