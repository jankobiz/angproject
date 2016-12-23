import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { VehicleService } from './vehicles/vehicle-service';

@Component ({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app/app.component.css'],        
})

export class MainApp {
    notice (selectedVihacle: any) {
    }
}