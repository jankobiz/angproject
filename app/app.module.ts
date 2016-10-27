import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainApp } from './app.component';
import { VehicleList } from './app.vehicle-list';

@NgModule ({
    imports: [ BrowserModule ],
    declarations: [ MainApp, VehicleList ],
    bootstrap: [ MainApp ]
})

export class AppModule {

}