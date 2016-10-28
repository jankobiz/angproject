import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { VehicleList } from './vehicle-list';
import {VehicleComponent} from './selected-vehicle';
import { MyPipe } from './custom-pipe';
import { SimplePipe } from './simple-pipe';

import {AppService} from './vehicle-service';

@NgModule ({
    imports: [        
        FormsModule         
    ],
    declarations: [ 
        VehicleList,
        MyPipe,
        VehicleComponent,
        SimplePipe
    ],
    providers: [
        AppService
    ]    
})

export class VehicleModule {

}