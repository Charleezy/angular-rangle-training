import {Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
  // @Inject
  private postsService: PostsService;
  private posts: any[];
  constructor(postService: PostsService) {
    this.postsService = postService;
  }

  ngOnInit(){
    this.posts = this.postsService.getPosts();
  }
}
