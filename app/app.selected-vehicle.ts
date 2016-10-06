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
    @Output() mouseOverButton: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

    onClick() {
        console.log('H3 selected vehicle has been clicked!');
        this.vehicleClicked.emit(`The vehicle ${this.vehicleselected.model} was clicked!`);  
    }
    onClickSecondButton() {
        console.log('Trying another event listener');
        this.mouseOverButton.emit(this.vehicleselected);
    }
    viewChildExample() {
        console.log('Viewchild example is working! You have selected ' + this.vehicleselected.model);
    }
}