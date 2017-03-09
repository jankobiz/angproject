import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle-service';

@Component ({
    selector: 'vehicle-details',
    templateUrl: 'app/vehicles/vehiclel-detail.component.html'
})

export class VehicleDetail {
    pageTitle: string = 'Vehicle Detail';
    vehicle: Vehicle;
    errorMessage: string;
    private sub: Subscription;

    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _vehicleService: VehicleService ) {
    }

    ngOnInit(): void {
        console.log(this._route.snapshot.params['id']);
        console.log(this._route.snapshot.url);
        let id = +this._route.snapshot.params['id'];        
        this.pageTitle += `: ${id}`;
        this.getVehicle(id);
    }

    getVehicle(id: number): void {
        this._vehicleService.getVehicle(id)
            .subscribe(vehicle => this.vehicle = vehicle,
                       error => this.errorMessage = <any>error,
                       () => console.log("Vehicle observable completed!!! "));
    }

    onBack(): void {
        this._router.navigate(['/vehicles']);
    }

    onNext(): void {
        
    }

}