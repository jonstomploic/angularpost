import { Component , OnInit} from '@angular/core';

//import { Post} from './post';
//import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuth = false;


   // POSTSARRAY: Post[] =[] ;



    //constructor(private appareilService: PostService) {
        constructor() {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }


    ngOnInit(){

    }



}
