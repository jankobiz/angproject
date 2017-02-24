import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from  '@angular/router';

import { MyPipe } from './dealer-filter.pipe';
import { StatePipe } from './second-dealer-filter.pipe';

import { DealersList } from './dealer-list';
import { DealerComponent } from './selected-dealer';
import { DealerService } from './dealer-service';

const dealerRoutes: Routes = [    
  { path: 'dealers', component: DealersList }
];

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(dealerRoutes)
    ],
    exports: [DealersList],
    declarations: [ DealersList, DealerComponent, MyPipe, StatePipe],
    providers: [DealerService]
})

export class DealerModule {
    
}