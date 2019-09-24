import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {FullCalendarModule} from 'primeng/fullcalendar';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FullCalendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
