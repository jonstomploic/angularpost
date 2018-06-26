import { Component, OnInit } from '@angular/core';
import { PostService} from '../services/post.service';

import {Post} from '../post';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


    LESPOSTS: Post[];
    postSubscription: Subscription;

    constructor(private postService: PostService) {
    }


    ngOnInit() {



        this.postSubscription = this.postService.postSubject.subscribe(
            (posts: Post[]) => {
                this.LESPOSTS = posts;
                // console.log(posts);
            }
        );
        this.postService.emitPost();

    }

}
