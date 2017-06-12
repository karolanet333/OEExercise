import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'oe-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() likes: number;
  @Input() ilike: boolean;


  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.ilike){
      this.ilike = false;
      this.likes--;
    } else{
      this.ilike = true;
      this.likes++;
    }
  }

}
