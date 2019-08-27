import { Component, OnInit } from '@angular/core';
import { User } from  '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
   let myUser : User = {
     nick: 'Jesus',
     subnick : 'Que pedo',
     age:28,
     email:'ejemplo@ejemplo.com',
     friend: true,
     uid: 1
   };
   let users : User[] =[
     myUser,
   ]
   console.log(users)
   }

  ngOnInit() {
  }

}