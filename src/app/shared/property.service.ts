import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Property} from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseURL = 'http://localhost:8088/Dari/servlet/all';
  private addURL = 'http://localhost:8088/Dari/servlet/addprop';
  private getByIdURL = 'http://localhost:8088/Dari/servlet/getProperty';
  private updateURL = 'http://localhost:8088/Dari/servlet/updateProperty';
  private deleteURL = 'http://localhost:8088/Dari/servlet/Property/delete';
  private getByUserIdURL = 'http://localhost:8088/Dari/servlet/getPropertyByUser/1';
  private getPriceURL = 'http://localhost:8088/Dari/servlet/PriceDesc';
  private getStatStatetunis = 'http://localhost:8088/Dari/servlet/get-annonce-stat-region/tunis';
  private getStatStatenabeul = 'http://localhost:8088/Dari/servlet/get-annonce-stat-region/nabeul';
  private getStatStateariana = 'http://localhost:8088/Dari/servlet/get-annonce-stat-region/ariana';
  private getRent = 'http://localhost:8088/Dari/servlet/rent';
  private getSale = 'http://localhost:8088/Dari/servlet/sale';
  private averagePriceTunis = 'http://localhost:8088/Dari/servlet/averageprice/tunis';
  private averagePriceNabeul = 'http://localhost:8088/Dari/servlet/averageprice/nabeul';
  private averagePriceAriana = 'http://localhost:8088/Dari/servlet/averageprice/ariana';
  private idUser  = 3;

  constructor(private httpClient: HttpClient) { }

  getPropertiesList(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.baseURL}`);
  }

  createProperty(property: Property): Observable<Object>{
    return this.httpClient.post(`${this.addURL}`, property, {responseType: 'text'} );
  }

  getPropertyById(id: number): Observable<Property>{
    return this.httpClient.get<Property>(`${this.getByIdURL}/${id}`);
  }

  updateProperty(id: number, property: Property): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, property, {responseType: 'text'});
  }

  deleteProperty(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`, {responseType: 'text'});
  }
  getPropertiesByUserId(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getByUserIdURL}`);
  }

  getPriceRange(pricemin, pricemax): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getPriceURL}/${pricemin}/${pricemax}`);
  }

  getStatStatestunis(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getStatStatetunis}`);
  }

  getStatStatesnabeul(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getStatStatenabeul}`);
  }

  getStatStatesariana(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getStatStateariana}`);
  }

  getAveragePriceTunis(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.averagePriceTunis}`);
  }

  getAveragePriceNabeul(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.averagePriceNabeul}`);
  }

  getAveragePriceAriana(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.averagePriceAriana}`);
  }

  getPRent(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getRent}`);
  }

  getPSale(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getSale}`);
  }
}

