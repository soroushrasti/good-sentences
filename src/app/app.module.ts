import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SayingsComponent } from './sayings/sayings.component';
import { QuotesComponent } from './quotes/quotes.component';
import { LettersComponent } from './letters/letters.component';
import { OverviewComponent } from './overview/overview.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SayingsComponent,
    QuotesComponent,
    LettersComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
