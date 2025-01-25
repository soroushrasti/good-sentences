import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SayingsComponent } from './sayings/sayings.component';
import { QuotesComponent } from './quotes/quotes.component';
import { LettersComponent } from './letters/letters.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'sayings', component: SayingsComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'letters', component: LettersComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
