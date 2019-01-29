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
    // this.getPosts();
    this.posts = [
      {
        header: 'header',
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel-image_2.jpg?itok=G_lSOxDb',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
      },
      {
        header: 'header',
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel-image_2.jpg?itok=G_lSOxDb',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
      },
      {
        header: 'header',
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel-image_2.jpg?itok=G_lSOxDb',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
      },
      {
        header: 'header',
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/carousel-homepage-785x428/public/carousel-image_2.jpg?itok=G_lSOxDb',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`
      }
    ]
  }
  getPosts(body?) {
    this._postService.getAllPosts(body).subscribe(res => {
      this.posts = res.data.data;
    })
  }

}
