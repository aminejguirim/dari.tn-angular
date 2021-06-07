import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe} from './search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { StatisticComponent } from './statistic/statistic.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    MyPropertiesComponent,
    NavbarComponent,
    SidebarComponent,
    PropertyDetailsComponent,
    SearchPipe,
    StatisticComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
