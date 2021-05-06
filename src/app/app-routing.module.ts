import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitListComponent} from "./visit-list/visit-list.component";
import {CreateVisitComponent} from "./create-visit/create-visit.component";
import {UpdateVisitComponent} from "./update-visit/update-visit.component";



const routes: Routes = [
  {path: 'visits', component: VisitListComponent},
  {path: 'create-visit', component: CreateVisitComponent},
  {path: '', redirectTo: 'visits', pathMatch: 'full'},
  {path: 'update-visit/:id', component: UpdateVisitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
