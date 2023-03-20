import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ChallengeComponent } from './challenge/challenge.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    NavbarComponent,
    SideNavbarComponent,
    DashboardComponent,
    DashboardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
