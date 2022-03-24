export interface Task {
    id?:number; //cuando creamos puede no venir con id
    text:string;
    day:string;
    reminder:boolean;
}