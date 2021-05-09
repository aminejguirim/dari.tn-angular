import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:9005/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:9005/all-users");
  }

  public getUserByUsername(username){
    return this.http.get("http://localhost:9005/search/"+username);
  }

  public deleteUser(username){
    return this.http.get("http://localhost:9005/delete/"+username);
  }
}
