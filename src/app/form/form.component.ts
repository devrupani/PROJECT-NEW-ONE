import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  id:number;
  name:string;

  users = [] 

  addData(){
    this.users.push({
      id:this.id,
      name : this.name 
    })
    

    //clear
    this.id = null;
    this.name = null;
    
  }
}
