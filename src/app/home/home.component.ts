import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('ok');
    let c: number = 1;
    let b: number = 2;
    let e:string = '1';
    let f:string = '2';
    console.log(e+f)

    let g :boolean =true;
    let h:object = {};  //declaracion de objetos
    console.log(g);
    console.log(h);
    let i =[c,b,e,f,g,h]; 
    console.log(i);

    let j :boolean[] = [true,g] //arreglo de solo boleanos
    console.log(j);

    let k :object[] = [{},h]; //arreglo solo de objetos
    console.log(k);

    let l:any []=[1,'e',3,{},[]]    //Asigna valores  de cualquier tipo en un arreglo con la palabra any



   }

  ngOnInit() {
  }

}