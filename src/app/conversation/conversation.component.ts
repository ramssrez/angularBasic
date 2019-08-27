import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendUid : any;

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.friendUid = this.activatedRoute.snapshot.params['uid'];
    console.log('Este es valor de pasada'+this.friendUid)
  }

  ngOnInit() {
  }

}