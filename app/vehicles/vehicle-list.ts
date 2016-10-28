import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import {AppService} from './vehicle-service';

import { Vehicle } from './vehicle';

@Component ({
    selector: 'vehicle-list',
    templateUrl: './app/vehicles/vehicle-list.html',
    styleUrls: ['./app/vehicles/vehicle-list.css']        
})

export class VehicleList {
    @Output() selected = new EventEmitter<Vehicle>();    
    //@ViewChild(VehicleComponent) viewChild: VehicleComponent;
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
    hooksMessages: string [] = [];
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
    processLifeCycleEvent(event: string) {
        console.log(`Life cycle hook: ${event}!`);
        this.hooksMessages.splice(0,0, event);
    }
    onInit(event: string) {
        console.log(`Initialisatoin for the following component ${event}!`);
    }
    onChanges(event: string) {
        console.log(`Component ${event} has changed!`);
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
        //this.viewChild.viewChildExample();
    }
    remove() {
        this.selectedVehicle = null;
    }
}