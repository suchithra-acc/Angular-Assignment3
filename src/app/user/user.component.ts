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
  details=[];
  ngOnInit(): void {
  }
  onUserNameupdate(){
    this.disableReset=this.userName.replace(/\s/g, '').length>0?false:true;
    
  }
  onReset(){
    this.userName='';
    this.disableReset=true;
  }
  OndisplaydetailClick(){
      var index = this.details.length+1;
      this.details.push(index + "  Entry");
  }
  getbackgroundColor( i:number){
     return (i>=4) ? "blue":"white";
  }
  getTextColor(i:number){
   return i>=4?true:false;
  }

}
