// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderViewComponent } from './readerview/readerview.component';
import { HomeComponent } from './home/home.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'readerview/:surah', component: ReaderViewComponent },
=======
  { path: '', component: HomeComponent },  // Default route leading to HomeComponent
  { path: 'readerview/:surah', component: ReaderViewComponent },  // Route for ReaderViewComponent with a dynamic parameter
  { path: '**', component: HomeComponent, pathMatch: 'full' },  // Wildcard route, redirects to HomeComponent if no matching route is found
>>>>>>> Stashed changes
];

// Create and export the NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuring the router with the defined routes
  exports: [RouterModule]  // Exporting the configured router module
})
export class AppRoutingModule { }  // AppModule uses this AppRoutingModule to configure the application routes
