import { Component } from '@angular/core';

import { Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GESTION DES POSTS';

/*
  POSTSARRAY: Post[] = [
      {title :'name1' , content:'content' , loveIts : 0 , created_at : new Date},
      {title :'name2' , content:'content' , loveIts : 0 , created_at : new Date},
      {title :'name3' , content:'content' , loveIts : 0 , created_at : new Date},
      {title :'name4' , content:'content' , loveIts : 0 , created_at : new Date}
      ]
  ;
*/

    POSTSARRAY: Post[] =[] ;








}
