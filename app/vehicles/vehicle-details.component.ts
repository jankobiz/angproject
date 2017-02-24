import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle-service';

@Component ({
    selector: 'vehicle-details',        
    templateUrl: 'app/vehicles/vehiclel-detail.component.html'      
})

export class VehicleDetail {
    pageTitle: string = 'Vehicle Detail';
    vehicle: Vehicle;

    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _vehicleService: VehicleService ) {
    }

    ngOnInit(): void {
        console.log(this._route.snapshot.params['id']);
        console.log(this._route.snapshot.url);
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/vehicles']);
    }

}