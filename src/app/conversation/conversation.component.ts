import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user' 

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendUid : any;
  friends : User []; 
  friend : User;
  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.friendUid = this.activatedRoute.snapshot.params['uid'];
    console.log('Este es valor de pasada'+this.friendUid)
    let usuario1 : User = {
      nick:'Ernersto',
      age:35,
      email: 'ejemplo@ejemplo.com',
      friend:true,
      uid:1
    };
    let usuario2 : User = {
      nick:'Sara',
      age:20,
      email: 'ejemplo2@ejemplo.com',
      friend:false,
      uid:2
    };
    let usuario3 : User = {
      nick:'Ernersto3',
      age:15,
      email: 'ejemplo3@ejemplo.com',
      friend:true,
      uid:3
    };
    let usuario4 : User = {
      nick:'Ernersto4',
      age:25,
      email: 'ejemplo4@ejemplo.com',
      friend:false,
      uid:4
    };
    let usuario5 : User = {
      nick:'Ernersto5',
      age:35,
      email: 'ejemplo5@ejemplo.com',
      friend:true,
      uid:5
    };
    this.friends= [usuario1,usuario2,usuario3,usuario4,usuario5]
    //console.log(this.friends)
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendUid;
    });
    console.log(this.friend)
  }

  ngOnInit() {
  }

}