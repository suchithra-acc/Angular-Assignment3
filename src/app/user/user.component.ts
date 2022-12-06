import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  userName :string='';
  disableReset:boolean=true;
 
  ngOnInit(): void {
  }
  onUserNameupdate(){
    this.disableReset=this.userName.replace(/\s/g, '').length>0?false:true;
    
  }
  onReset(){
    this.userName='';
    this.disableReset=true;
  }
}
