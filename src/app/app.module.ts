import { HttpClientService } from './services/http/http-client.service';
import { SearchService } from './services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SideComponent } from './components/side/side.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';





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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  providers: [SearchService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
