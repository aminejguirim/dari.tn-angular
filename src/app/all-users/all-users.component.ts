import { Component, OnInit } from '@angular/core';
import {UserRegisterService} from "../user-register.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit() {
    let response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data => this.users = data);
  }

}
