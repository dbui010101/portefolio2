import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    // RouterModule.forRoot([
    //   { path:'', component: HomeComponent},
    //   { path:'/about', component: AboutComponent},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
