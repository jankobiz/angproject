import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {AppService} from './app.service';

@Component ({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app/app.component.css'],        
})

export class MainApp {
    notice (selectedVihacle: any) {
    }
}