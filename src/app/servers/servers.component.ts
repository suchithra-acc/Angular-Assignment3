import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversallowed:boolean=false;
  serverStatus:string="offline";
  serverName="";
  showServerStatus:boolean=false;
  servers=[];
  constructor() {
    setTimeout(()=>{
     
    },2000)
   }

  ngOnInit(): void {

  }
  onUpdateServerName(event:any){
       this.serverName=(<HTMLInputElement>event.target).value;
       this.showServerStatus=false;
  }

 onCreateserver(){
  this.servers.push(this.serverName)
    this.serverStatus=Math.random()>0.5?"online":"offline";
    this.showServerStatus =true;
 }
 getColor(){
  return this.serverStatus=="online"?"green":"red";
 }
}
