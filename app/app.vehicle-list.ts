import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';
import {VehicleComponent} from './app.selected-vehicle';

import { SimplePipe } from './app.simple-pipe';
import { MyPipe } from './app.custom-pipe';

@Component ({
    selector: 'vehicle-list',
    templateUrl: 'app/app.vehicle-list.html',
    styleUrls: ['./app/app.vehicle-list.css'],
    directives: [VehicleComponent],
    providers: [AppService],
    pipes: [SimplePipe, MyPipe]
})

export class VehicleList {
    @Output() selected = new EventEmitter<Vehicle>();    
    @ViewChild(VehicleComponent) viewChild: VehicleComponent;
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
    filterInput: string = '';
    constructor(private _vehicleServis: AppService) {
        this.title = 'Angular 2 Binding Events';
        //this.vehicles = this._vehicleServis.getVehicles();
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
    ngOnInit() {
        this.vehicles = this._vehicleServis.getVehicles();
    }
    select (selectedVihacle: Vehicle) {
        this.selectedVehicle=selectedVihacle;
        this.selected.emit(selectedVihacle);
        console.log("Clicked on a vehicle " + selectedVihacle.model);
    }
    onVehicleselected(message: string) {
        //this.title = 'Product list: ' + message;
        console.log('Vehicle that is selected: ' + message);
    }
    onMouseOverButtonEvent(vehicleObject: Vehicle) {
        console.log('On mouse over car info ' + vehicleObject.brand + ' ' + vehicleObject.color + '!');
        this.viewChild.viewChildExample();
    }
    remove() {
        this.selectedVehicle = null;
    }
}