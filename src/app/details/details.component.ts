import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  @Input() 
  // userDetail = [{id:0,name:""}] ;
  userDetail = [] ;
  
  ngOnInit(): void {
    console.log(this.userDetail)
  }
  
}
