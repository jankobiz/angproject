import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from  '@angular/router';
import { MyPipe } from './dealer-filter.pipe';

import { DealersList } from './dealers-list';
import { DealerComponent } from './selected-dealer';

const appRoutes: Routes = [    
  { path: 'dealers', component: DealersList }
];

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [DealersList],
    declarations: [ DealersList, DealerComponent, MyPipe],
    providers: []
})

export class DealerModule {

}