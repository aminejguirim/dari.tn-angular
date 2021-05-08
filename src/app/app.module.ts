import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { VisitComponent } from './visit/visit.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateVisitComponent } from './create-visit/create-visit.component';
import {FormsModule} from "@angular/forms";
import { UpdateVisitComponent } from './update-visit/update-visit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FavoriteComponent,
    VisitListComponent,
    VisitComponent,
    CreateVisitComponent,
    UpdateVisitComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
