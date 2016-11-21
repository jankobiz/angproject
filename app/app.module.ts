import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainApp } from './app.component';
//import { VehicleList } from './vehicles/app.vehicle-list';
//import { VehicleComponent } from './vehicles/app.selected-vehicle';
//import { MyPipe } from './vehicles/app.vehicle-filter.pipe';
//import { SimplePipe } from './vehicles/app.simple-pipe';

import { VehicleService } from './vehicles/app.vehicle-service';



/* Feature Modules */
import { VehicleModule } from './vehicles/app.vehicle-module';

@NgModule ({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        VehicleModule 
    ],
    declarations: [
        MainApp,
        //VehicleList,
        //MyPipe,
        //VehicleComponent,
        //SimplePipe
        
    ],
    providers: [ VehicleService ],
    bootstrap: [ MainApp ]
})

export class AppModule {

}