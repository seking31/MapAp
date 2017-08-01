import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes }   from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
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
