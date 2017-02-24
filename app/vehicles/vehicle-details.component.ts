import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle-service';

@Component ({
    selector: 'vehicle-details',        
    templateUrl: 'app/vehicles/vehiclel-detail.component.html'      
})

export class VehicleDetail {
    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _vehicleService: VehicleService ) {

    }
}