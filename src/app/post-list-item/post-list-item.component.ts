import { Component, OnInit , Input} from '@angular/core';
import { PostService} from '../services/post.service';
import { Post} from '../post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

   // @Input() selectedPost : Post ;
    selectedPost : Post ;
    @Input() id : number ;




    constructor(private postService: PostService) {}

      ngOnInit() {
          this.selectedPost = this.postService.post[this.id]
          //console.log(this.postService.post[this.id]);

      }

    onModifierlove(value:boolean)
    {
      this.postService.ModifLoveIt(value ,this.id);
    }


    onRemovepost()
    {
        this.postService.removePost(this.id);
    }



}
