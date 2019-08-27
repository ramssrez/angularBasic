import { Component, OnInit } from '@angular/core';
import { User } from  '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends : User[]; 

  constructor() {
   let myUser : User = {
     nick: 'Jesus',
     subnick : 'Que pedo',
     age:28,
     email:'ejemplo@ejemplo.com',
     friend: true,
     uid: 1
   };
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
      uid:1
    };
    let usuario3 : User = {
      nick:'Ernersto3',
      age:15,
      email: 'ejemplo3@ejemplo.com',
      friend:true,
      uid:1
    };
    let usuario4 : User = {
      nick:'Ernersto4',
      age:25,
      email: 'ejemplo4@ejemplo.com',
      friend:false,
      uid:1
    };
    let usuario5 : User = {
      nick:'Ernersto5',
      age:35,
      email: 'ejemplo5@ejemplo.com',
      friend:true,
      uid:1
    };
    this.friends= [usuario1,usuario2,usuario3,usuario4,usuario5]
    console.log(this.friends)

   }

  ngOnInit() {
  }

}