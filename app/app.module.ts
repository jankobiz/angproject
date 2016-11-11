import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainApp } from './app.component';
import { VehicleList } from './vehicles/app.vehicle-list';
import {VehicleComponent} from './vehicles/app.selected-vehicle';
import { MyPipe } from './vehicles/app.vehicle-filter.pipe';
import { SimplePipe } from './vehicles/app.simple-pipe';

@NgModule ({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule 
    ],
    declarations: [ MainApp, VehicleList, MyPipe, VehicleComponent, SimplePipe ],
    bootstrap: [ MainApp ]
})

export class AppModule {

}