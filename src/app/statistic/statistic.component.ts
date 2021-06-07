import { Component, OnInit } from '@angular/core';
import {Property} from '../model/property';
import {PropertyService} from '../shared/property.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  properties: Property[];
  property: Property;
  stat: Property[];

  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {
    this.propertyService.getStatStates().subscribe(res => {console.log(res);

                                                           this.stat = res;
  });



}}
