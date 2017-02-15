import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from  '@angular/router';

import { VehicleList } from './vehicle-list';
import { VehicleComponent } from './selected-vehicle';
import { MyPipe } from './vehicle-filter.pipe';
import { SimplePipe } from './simple-pipe';

//import { HighlightDirective } from '../shared/highlight.directive';

import { VehicleService } from './vehicle-service';
import { VehicleDetail } from './vehicle-details.component';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [  
  { path: 'vehicles', component: VehicleList },
  { path: 'vehicle/:id', component: VehicleDetail}
];

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [VehicleList],
    declarations: [ VehicleList, MyPipe, VehicleComponent, SimplePipe, VehicleDetail],
    providers: [ VehicleService ]
})

export class VehicleModule {

}