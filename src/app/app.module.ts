import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ChallengeComponent } from './challenge/challenge.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './dashboard/side-navbar/side-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { ChallengeDescriptionComponent } from './dashboard/dashboard-content/challenge-description/challenge-description.component';
import { ChallengeIdeComponent } from './dashboard/dashboard-content/challenge-ide/challenge-ide.component';
import { ChallengeEditorComponent } from './dashboard/dashboard-content/challenge-ide/challenge-editor/challenge-editor.component';
import { ChallengeResultComponent } from './dashboard/dashboard-content/challenge-ide/challenge-result/challenge-result.component';
import { ChallengeOutputComponent } from './dashboard/dashboard-content/challenge-ide/challenge-output/challenge-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    NavbarComponent,
    SideNavbarComponent,
    DashboardComponent,
    DashboardContentComponent,
    ChallengeDescriptionComponent,
    ChallengeIdeComponent,
    ChallengeEditorComponent,
    ChallengeResultComponent,
    ChallengeOutputComponent
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
