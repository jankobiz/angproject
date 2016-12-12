import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { VehicleList } from './app.vehicle-list';
import { VehicleComponent } from './app.selected-vehicle';
import { MyPipe } from './app.vehicle-filter.pipe';
import { SimplePipe } from './app.simple-pipe';

//import { HighlightDirective } from '../shared/highlight.directive';

import { VehicleService } from './app.vehicle-service';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [VehicleList],
    declarations: [ VehicleList, MyPipe, VehicleComponent, SimplePipe],
    providers: [ VehicleService ]
})

export class VehicleModule {

}