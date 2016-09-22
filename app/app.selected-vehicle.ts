import { Component, Input } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';

@Component ({
    selector: 'selected-vehicle',
    template: `<h3 *ngIf="vehicleselected">You selected {{vehicleselected.id}}. {{vehicleselected.model}}</h3>`    
})

export class VehicleComponent {
    @Input() vehicleselected: Vehicle;    
}