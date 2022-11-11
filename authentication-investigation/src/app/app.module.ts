import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    MembersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot({
      domain: 'dev-580a4kic.eu.auth0.com',
      clientId: 'nRoDNOBtCBHjlG1tx5B3YLj9JcqBGShw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
