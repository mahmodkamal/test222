import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: 'posts',
    loadChildren: './components/posts/posts.module#PostsModule'
  },
  {
    path:'materials',
    loadChildren: './components/materials/materials.module#MaterialsModule'

  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
