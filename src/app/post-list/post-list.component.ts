import { Component, OnInit , Input} from '@angular/core';

import { Post} from '../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


    @Input() LESPOSTS: Post[];

    constructor() {}

  ngOnInit() {

      console.log("list post");
      console.log(this.LESPOSTS);

      for(let i =0; i<5 ; i++){
          this.LESPOSTS.push( {
              title: "MON POST N°"+i,
              content: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
              loveIts: 0,
              created_at: new Date()
          })
      }


      console.log(this.LESPOSTS);

  }

}
