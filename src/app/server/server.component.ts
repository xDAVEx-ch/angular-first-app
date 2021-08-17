//Hey Angular! This is a Component
import { Component } from '@angular/core';

//Typescript decorator which indicates: Here lays an Angular component.
@Component({
  selector: 'app-server', //you can use css selectors: [app-server] or .app-server
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'offline';

  allowComponent: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'server for test';
  serverCreated: boolean = false;
  serverList: Array<string> = ['My first server', 'my second server'];

  //assignment
  userName: string = '';
  isEmpty: boolean = true;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setTimeout(() =>{
      this.allowComponent = true;
    }, 3000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created successfully';
    this.serverList.push('Another server');
  }

  //Explicit casting to make clear the value comes from an element, which means is not null
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  //assignment
  onUpdateUserName(){

    if(this.userName){
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  resetUser(){
    this.userName = '';

    this.onUpdateUserName();
  }
}