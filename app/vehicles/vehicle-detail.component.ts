import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle-service';

@Component ({
    selector: 'vehicle-details',
    templateUrl: 'app/vehicles/vehiclel-detail.component.html',
    styleUrls: ['./app/vehicles/vehicle-detail.component.css']
})

export class VehicleDetail {
    pageTitle: string = 'Vehicle Detail';
    vehicle: Vehicle;
    errorMessage: string;
    private sub: Subscription;
    private nextVehicleID: number;
    private  prevVehicleID: number = 0;
    private  nextButtonActive: boolean = true;
    private  prevButtonActive: boolean;
    private  avaliabilityChecked: boolean = false;

    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _vehicleService: VehicleService ) {
    }

/*
    ngOnInit(): void {
        console.log(this._route.snapshot.params['id']);
        console.log(this._route.snapshot.url);
        let id = +this._route.snapshot.params['id'];        
        this.pageTitle += `: ${id}`;
        this.getVehicle(id);
    }
*/

    ngOnInit(): void {
        this.avaliabilityChecked = false;
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.nextVehicleID = id;
                if(id === 1) this.prevButtonActive=true;
                else this.prevButtonActive=false;
                //if (id === 2) this.nextButtonActive = false;
                //else this.nextButtonActive = true;
                console.log('NEXT ID: ' + (this.nextVehicleID + 1));
                this.getVehicle(this.nextVehicleID + 1, true);
                this.getVehicle(id, false);
                console.log('Next id: ' + (this.nextVehicleID + 1));
                console.log('Current id: ' + id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getVehicle(id: number, check: boolean): void {
        console.log('Getting vehicle for this ID: ' + id);
        this._vehicleService.getVehicle(id)
            .subscribe(vehicle => { this.vehicle = vehicle, this.checkVehicleAvaliability(id, check); },
                       error => this.errorMessage = <any>error,
                       () => console.log("Vehicle observable completed!!! "));
    }

    checkVehicleAvaliability(id: number, check: boolean): void {
        console.log('Checking vehicle for this ID: ' + id);
        if (check) this.nextButtonActive = true;
        if (this.vehicle === undefined) {
            console.log('No more vehicles!!!!');
            //this.nextVehicleID = 1;
            console.log("Avaliability checked was: " + this.avaliabilityChecked);
            //if (this.avaliabilityChecked !== true) {
                //this.nextButtonActive = false;
            //    this.avaliabilityChecked = true;
            //    console.log("Avaliability checked is now: " + this.avaliabilityChecked);
            //}
            if (check) this.nextButtonActive = false;            
            console.log("Next vehicle id: " + (this.nextVehicleID + 1));
        }
        else {
            console.log("Avaliability else branch checked is now: " + this.avaliabilityChecked);
            console.log("Next ID from fetch: " + this.vehicle.id);
        }
        console.log('Next button active: ' + this.nextButtonActive);        
    }

    onBack(): void {
        //this._router.navigate(['/vehicles']);        
        this._router.navigate(['/vehicle', this.nextVehicleID - 1]);
    }

    onNext(): void {
        //this.getVehicle(this.nextVehicleID);        
        this._router.navigate(['/vehicle', this.nextVehicleID + 1]);        
        //this._router.navigateByUrl('/vehicle/', this.nextVehicleID.toString);
        //this._router.navigate([10], { relativeTo: this._route });
        //this._router.navigate(['/vehicle']);
    }

}