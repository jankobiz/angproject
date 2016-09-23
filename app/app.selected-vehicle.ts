import { Component, Input, OnChanges, 
         Output, EventEmitter } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';

@Component ({
    selector: 'selected-vehicle',        
    templateUrl: 'app/app.selected-vehicle.html'      
})

export class VehicleComponent {
    @Input() vehicleselected: Vehicle;
    @Output() vehicleClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        console.log('H3 selected vehicle has been clicked!');
        this.vehicleClicked.emit(`The vehicle ${this.vehicleselected.model} was clicked!`);  
    }
}