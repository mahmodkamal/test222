import { HttpClientService } from './services/http/http-client.service';
import { SearchService } from './services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarousalComponent } from './carousal/carousal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SideComponent } from './side/side.component';
import { UserNameComponent } from './user-name/user-name.component';
import { RouterModule } from '@angular/router';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarousalComponent,
    ContactusComponent,
    ContactComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    ProfileComponent,
    SearchComponent,
    SearchResultComponent,
    SideComponent,
    UserNameComponent,
    LoginComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '' ,
        component:HomeComponent
      },
      {
       path: 'profile',
       component:ProfileComponent
      },
      {
        path: 'contact',
        component:ContactusComponent
       },
       {
        path: 'login',
        component:LoginComponent
       },
      {
        path: '**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [SearchService,HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
