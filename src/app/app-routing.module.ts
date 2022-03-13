import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollabComponent } from './collab/collab.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path:'collab', component:CollabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
