import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes }   from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlankComponent } from './blank/blank.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'app', component: AppComponent },
    { path: 'blank', component: BlankComponent },
  { path: '',   redirectTo: '/blank', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlankComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC02217vCI0-xrBs0jMi42buvscAn9M6Mo'
    })
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
