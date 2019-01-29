import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from 'src/app/services/posts.service';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
