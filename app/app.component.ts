import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {AppService} from './app.service';

import { Vehicle } from './app.vehicle';
import {VehicleComponent} from './app.selected-vehicle';

@Component ({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class MainApp {      
    notice (selectedVihacle: any) {        
    }
}