import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';

@Component ({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [AppService]
})

export class AppComponent {
    title: string;
    timesClicked: number = 0;
    inputtext = 'This is default text';
    anothertext = 'Another default text';
    messages: string [] = [];
    divcolor = "white";
    bckdivcolor = "darkred";
    vehicles: Vehicle [];
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
}