export interface User {
  nick:string;
  subnick?:string;   //Con el signo de interrogaciòn, se cancela el llamado de la variable
  age?:number;
  email:string;
  friend:boolean;
  uid:any;
}