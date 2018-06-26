import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { PostService} from '../services/post.service';
import { Post} from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;


    constructor(private formBuilder: FormBuilder, private postService: PostService,
                private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    }


    onCreatePost() {
        const title = this.postForm.get('title').value;
        const content = this.postForm.get('content').value;
        const newPost = new Post();
        newPost.title = title;
        newPost.content = content;
        newPost.created_at = new Date();
        newPost.loveIts = 0;

        // console.log(this.fileUrl);
        // console.log(this.fileUploaded);

        this.postService.createNewPost(newPost);
        this.router.navigate(['/posts']);
    }

}
