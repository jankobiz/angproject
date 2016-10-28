import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainApp } from './app.component';

/* Feature Modules */
import { VehicleModule } from './vehicles/vehicle-module';

@NgModule ({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        VehicleModule 
    ],
    declarations: [ MainApp ],
    bootstrap: [ MainApp ]
})

export class AppModule {

}