import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  p: number = 1;
  Posts: Array<any>;
  total: number = 0;
  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this.getALlPosts()
  }
  getALlPosts(body?) {
    this._postService.getAllPosts(body).subscribe(res => {
      this.Posts = res.data.data;
      this.total = res.data.total;
      this.p = res.data.current_page;

    })
  }
  ChangePage($event) {
    this.p = $event;
    this.getALlPosts({ page: $event })
  }
}
