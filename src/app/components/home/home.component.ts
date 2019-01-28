import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Array<any>;
  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts(body?) {
    this._postService.getAllPosts(body).subscribe(res => {
      this.posts = res.data.data;
    })
  }

}
