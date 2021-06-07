import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../shared/property.service';
import {Property} from '../model/property';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[];
  propertiesSale: Property[];
  property: Property;

  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRent();
    this.getSale();
  }

  private getRent() {
    this.propertyService.getPRent().subscribe(data => {
      this.properties = data;
    });
  }

  private getSale() {
    this.propertyService.getPSale().subscribe(data => {
      this.propertiesSale = data;
    });
  }

  propertyDetails(id: number) {
    this.router.navigate(['property-details', id]);
  }
}
