import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    post: Post[] = [];
    postSubject = new Subject<Post[]>();

  constructor() {

      for(let i =0; i<5 ; i++){
          this.post.push( {
              title: "MON POST N°"+i,
              content: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
              loveIts: 0,
              created_at: new Date()
          })
      }

  }


    emitPost() {
        this.postSubject.next(this.post);
    }


    ModifLoveIt(value:boolean , postIndex:number)
    {
            // true = +1 ; false = -1
            if(value === false ) this.post[postIndex].loveIts -= 1;
            else this.post[postIndex].loveIts +=1;

        this.emitPost();
    }

    removePost(postIndexToRemove:number)
    {

        this.post.splice(postIndexToRemove, 1);
        this.emitPost();
    }

    createNewPost( lePost:Post)
    {
        this.post.push(lePost);
        this.emitPost();
    }



}
