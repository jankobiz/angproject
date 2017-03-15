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
import { VehicleDetail } from './vehicle-detail.component';
import { SharedModule } from '../shared/shared.module';
import { VehicleDetailGuard } from './vehicle-guard.service';

const vehicleRoutes: Routes = [  
  { path: 'vehicles', component: VehicleList },
  { path: 'vehicle/:id',
        canActivate: [ VehicleDetailGuard ],
        component: VehicleDetail}
];

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(vehicleRoutes)
    ],
    exports: [VehicleList],
    declarations: [ VehicleList, MyPipe, VehicleComponent, SimplePipe, VehicleDetail],
    providers: [ VehicleService, VehicleDetailGuard ]
})

export class VehicleModule {

}