import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  Posts: Array<any>;
  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this.getALlPosts()
  }
  getALlPosts(body?) {
    this._postService.getAllPosts(body).subscribe(res => {
      this.Posts = res.data.data;
      console.log(res)
    })
  }
}
