// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderViewComponent } from './readerview/readerview.component';
import { HomeComponent } from './home/home.component';

// Import your components for routing

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'readerview/:surah', component: ReaderViewComponent },
];

// Create and export the NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }