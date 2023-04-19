import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { ZodiacService } from './zodiac.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ZodiacService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
