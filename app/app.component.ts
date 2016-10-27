import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';
import {VehicleList} from './app.vehicle-list';

@Component ({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [VehicleList]    
})

export class MainApp {
    notice (selectedVihacle: any) {
    }
}