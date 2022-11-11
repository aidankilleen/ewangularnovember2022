import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MembersPageComponent } from './members-page/members-page.component';

const routes: Routes = [
  { path:"", redirectTo:"home", pathMatch:"full" },
  { path:"home", component:HomePageComponent }, 
  { path:"contact", component:ContactPageComponent }, 
  { path:"about", component:AboutPageComponent }, 
  { path:"members", component:MembersPageComponent, canActivate:[AuthGuard]
 } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
