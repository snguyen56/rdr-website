import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CollabComponent } from './collab/collab.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { TeamComponent } from './team/team.component'
import { FaqComponent } from './faq/faq.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'collab', component:CollabComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'team', component:TeamComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'active-trial', component:ActiveTrialsComponent},
  {path: 'career', component:CareersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
