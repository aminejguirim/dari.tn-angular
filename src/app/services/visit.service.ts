import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Visit} from "../model/visit";
import {Observable} from "rxjs";





@Injectable({
  providedIn: 'root'
})
export class VisitService { private baseURL=("http://localhost:8054/SpringMVC/servlet/Property/Visit")
  private URL=("http://localhost:8054/SpringMVC/servlet/Property/Visit/delete")
  constructor(private httpClient: HttpClient) { }
  getVisitList(): Observable<Visit[]>{
    return this.httpClient.get<Visit[]>(`${this.baseURL}`);
  }

  createVisit(visit: Visit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, visit);
  }

  getVisitById(id: number): Observable<Visit>{
    return this.httpClient.get<Visit>(`${this.baseURL}/${id}`);

  }
  updateVisit(id: number, visit: Visit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, visit);
  }
  deleteVisit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }

}
