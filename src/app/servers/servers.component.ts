import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serversallowed:boolean=false;
  serverStatus:string="new"
  serverName="";
  constructor() {
    setTimeout(()=>{
     
    },2000)
   }

  ngOnInit(): void {

  }
  onUpdateServerName(event:any){
       this.serverName=(<HTMLInputElement>event.target).value;
  }

 onCreateserver(){
    this.serverStatus=this.serverName + " Server Created!!"
    this.serversallowed=true;
 }

}
