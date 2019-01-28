import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(private HttpClientService: HttpClientService) { }
  getAllPosts(body) {
    return this.HttpClientService.get('front/posts/all_posts', body)
  }
}
