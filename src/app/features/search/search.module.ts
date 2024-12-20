import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from '../../pages/search/search.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SidebarComponent, SearchComponent, SearchResultsComponent],
  imports: [CommonModule, SearchRoutingModule, LayoutsModule, SharedModule],
})
export class SearchModule {}
