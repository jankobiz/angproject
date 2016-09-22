import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';
import {VehicleComponent} from './app.selected-vehicle';

@Component ({
    selector: 'my-app',
    templateUrl: 'app/app.vehicle-component.html',
    styleUrls: ['./app/app.vehicle.component.css'],
    directives: [VehicleComponent],
    providers: [AppService]
})

export class AppVehicle {
    @Output() selected = new EventEmitter<Vehicle>();
    title: string;
    timesClicked: number = 0;
    inputtext = 'This is default text';
    anothertext = 'Another default text';
    messages: string [] = [];
    divcolor = "white";
    bckdivcolor = "darkred";
    vehicles: Vehicle [];
    selectedVehicle: Vehicle;
    vehicles1: any;
    constructor(private _vehicleServis: AppService) {
        this.title = 'Angular 2 Binding Events';
        this.vehicles = this._vehicleServis.getVehicles();
    }
    log(msg: string, data: string){
        this.timesClicked+=1;
        this.messages.splice(0,0, msg + " " + this.timesClicked);
        console.log(msg);
        if(data){
            console.log(data);
        }
    }
    getVihacles (): void {
        this._vehicleServis.getVehiclesPromise().then(vehicles => this.vehicles = vehicles);
    }
    OnInit (): void {
        this.getVihacles;
    }
    select (selectedVihacle: Vehicle) {
        this.selectedVehicle=selectedVihacle;
        //this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    }
}