import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
