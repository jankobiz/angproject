import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';

@Component ({
    selector: 'selected-vehicle',        
    templateUrl: 'app/app.selected-vehicle.html'      
})

export class VehicleComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    @Input() vehicleselected: Vehicle;
    @Output() vehicleClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() mouseOverButton: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
    @Output() onLifeCycleHookEvent = new EventEmitter<string>();

    onClick() {
        console.log('H3 selected vehicle has been clicked!');
        this.vehicleClicked.emit(`The vehicle ${this.vehicleselected.model} was clicked!`);  
    }
    onMouseOver() {
        console.log('Trying another event listener');
        this.mouseOverButton.emit(this.vehicleselected);
    }    
    viewChildExample() {
        console.log('Viewchild example is working! You have selected ' + this.vehicleselected.model);
    }
    ngAfterViewInit() {
        console.log('This is AFTER VIEW EVENT!');
        this.onLifeCycleHookEvent.emit('After View Event Emitted!');        
    }
    ngOnInit() {
        console.log('This is ON INIT EVENT!');
    }
    ngOnChanges() {
        //console.log(`New vehichle ${this.vehicleselected.model} is selected`);
        //console.log(`New vehichle ${this.vehicleselected.model} was selected!`);
        //console.log('New vehichle selected - ' + this.vehicleselected.model);
        console.log('New vehichle selected!');
    }
    ngOnDestroy() {
        console.log('Component destroyed!');
    }
}