import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {ContactReducer} from './ngrxStore/reducers/contact.reducer';

import { AppComponent } from './app.component';
import { ErrorComponent } from './Transclusion/error.component';
import { UserCountComponent } from './ByService/user-count/user-count.component';
import { ContactsComponent } from './ngrxStore/contacts/contacts.component';

import {TemperatureMonitorService} from './TemperatureMonitoringSystem/temperature-monitor.service';
import {UserService} from './ByService/user.service';
import { UserlistComponent } from './ByService/userlist/userlist.component';
import {AppRoutes} from './app.routes';
import { TemperatureComponent } from './TemperatureMonitoringSystem/temperature/temperature.component';
import { DisplayComponent } from './TemperatureMonitoringSystem/display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UserCountComponent,
    ContactsComponent,
    UserlistComponent,
    TemperatureComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
    //StoreModule.provideStore(ContactReducer)
   ],
  providers: [UserService,TemperatureMonitorService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
