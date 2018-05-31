import { Component, OnInit , Input} from '@angular/core';

import { Post} from '../post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    @Input() selectedPost : Post ;

  constructor() { }

  ngOnInit() {

  }

  onModifierlove(value:boolean)
  {
      // true = +1 ; false = -1
      if(value === false ) this.selectedPost.loveIts -= 1;
      else this.selectedPost.loveIts +=1;
   }



}
