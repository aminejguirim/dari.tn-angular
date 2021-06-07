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
  stat1: Property[];
  stat2: Property[];
  stat3: Property[];
  avg1: Property[];
  avg2: Property[];
  avg3: Property[];


  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {
    this.propertyService.getStatStatestunis().subscribe(res => {console.log(res);

                                                                this.stat1 = res;
  });

    this.propertyService.getStatStatesnabeul().subscribe(res => {console.log(res);

                                                                 this.stat2 = res;
    });

    this.propertyService.getStatStatesariana().subscribe(res => {console.log(res);

                                                                 this.stat3 = res;
    });

    this.propertyService.getAveragePriceTunis().subscribe(res => {console.log(res);

                                                                  this.avg1 = res;
    });

    this.propertyService.getAveragePriceNabeul().subscribe(res => {console.log(res);

                                                                   this.avg2 = res;
    });

    this.propertyService.getAveragePriceAriana().subscribe(res => {console.log(res);

                                                                   this.avg3 = res;
    });



}}
